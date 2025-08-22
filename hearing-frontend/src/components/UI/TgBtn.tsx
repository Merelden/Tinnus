import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import Image from "next/image";
import { lightGrayColor } from "@/styles/colors";
import { TelegramIcon } from './TelegramIcon';
import { NetworkService } from '@/api/request';

export type TGUser = {
  id: number;
  username?: string;
  photo_url?: string;
  first_name: string;
  last_name?: string;
  auth_date: number;
  hash: string;
};

type Props = {
  botName: string;
  onAuthCallback?: (user: TGUser) => void;
};

const Button = styled.button`
    width: 160px;
    height: 44px;
    border-radius: 6px;
    background-color: ${lightGrayColor};
    
    img {
        user-drag: none;
        -webkit-user-drag: none;
    }
`;

export const TelegramLoginButton = (props: Props) => {
  const _containerRef = useRef<HTMLDivElement | null>(null);
  const { botName, onAuthCallback } = props;

  useEffect(() => {
    function getCookie(name: string): string | null {
      const matches = typeof document !== 'undefined' ? document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')) : null;
      return matches ? decodeURIComponent(matches[1]) : null;
    }

    (window as any).TelegramOnAuthCb = async (user: TGUser) => {
      try {
        if (onAuthCallback) onAuthCallback(user);
        await NetworkService.csrf();
        const csrftoken = getCookie('csrftoken') || '';
        const res = await fetch('/api/auth/telegram/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          },
          credentials: 'include',
          body: JSON.stringify(user),
        });
        const data = await res.json().catch(() => ({}));
        console.log('Telegram auth response:', data);
      } catch (e) {
        console.error('Telegram auth error:', e);
      }
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;

    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'TelegramOnAuthCb(user)');
    script.setAttribute('data-lang', 'ru');
    script.setAttribute('data-size', 'medium');

    _containerRef.current?.appendChild(script);

    return () => {
      _containerRef.current?.removeChild(script);
      (window as any).TelegramOnAuthCb = undefined;
    };
  }, [botName, onAuthCallback]);

  return (
    <div className="relative w-[300px]">
      <div className="absolute top-0.5 left-8 opacity-0" ref={_containerRef} />
      <Button
        style={{
          pointerEvents: 'none',
          background: 'var(--background-gradient-telegram-button)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <TelegramIcon />
        <span>Войти с Telegram</span>
      </Button>
    </div>
  );
};