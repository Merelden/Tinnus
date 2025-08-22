import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import Image from "next/image";
import { lightGrayColor } from "@/styles/colors";
import { TelegramIcon } from './TelegramIcon';

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
        -webkit-user-drag: none;с≠
    }
`;

export const TelegramLoginButton = (props: Props) => {
  const _containerRef = useRef<HTMLDivElement | null>(null);
  const { botName, onAuthCallback } = props;

  useEffect(() => {
    if (onAuthCallback != null) {
      (window as any).TelegramOnAuthCb = (user: TGUser) => onAuthCallback(user);
    }

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?21';
    script.async = true;

    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'TelegramOnAuthCb(user)');
    script.setAttribute('data-lang', 'ru');

    _containerRef.current?.appendChild(script);

    return () => {
      _containerRef.current?.removeChild(script);
      (window as any).TelegramOnAuthCb = undefined;
    };
  }, []);

  return (
    <div className="relative w-[300px]">
      <div className="absolute top-0.5 left-8 opacity-0" ref={_containerRef} />
      <Button
        style={{
          pointerEvents: 'none',
          background: 'var(--background-gradient-telegram-button)',
        }}
        leftSlot={<TelegramIcon />}
        label="Войти с Telegram"
      />
    </div>
  );
};