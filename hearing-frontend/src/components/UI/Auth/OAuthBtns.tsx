import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Image from "next/image";
import { lightGrayColor, textColor } from "@/styles/colors";

import { NetworkService } from '@/api/request';
import { TelegramLoginButton } from './TgBtn';

const Wrapper = styled.div`
    width: 100%;
`;

const WrapperOr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
    width: 100%;
    p {
        font-size: 20px;
        font-family: var(--font-manrope), serif;
        color: ${textColor};
        margin-bottom: 8px;
        width: 50%;
    }
    hr {
        width: 100%;
        height: .5px;
        background-color: ${textColor};
    }
`;

const WrapperButtons = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

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

const OAuthBtns = () => {
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);

    useEffect(() => {
        // Программно загружаем скрипт SDK
        const script = document.createElement('script');
        // Пин к стабильной версии SDK VK ID
        script.src = "https://unpkg.com/@vkid/sdk@2.4.0/dist-sdk/umd/index.js";
        script.async = true;
        script.onload = () => {
            setIsSdkLoaded(true);  // Устанавливаем состояние, что SDK загружен
            console.log("VK SDK загружен");
        };
        script.onerror = () => {
            console.error("Не удалось загрузить VK SDK");
        };
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (!isSdkLoaded || !(window as any).VKIDSDK) return;

        const VKID: any = (window as any).VKIDSDK;
        const REDIRECT_URL = 'https://neurotinnitus.ru';

        VKID.Config.init({
            app: 54067159,
            redirectUrl: REDIRECT_URL,
            responseMode: VKID.ConfigResponseMode.Callback,
            source: VKID.ConfigSource.LOWCODE,
            scope: 'email phone',
        });

        const oneTap = new VKID.OneTap();

        oneTap.render({
            container: document.getElementById('vk-id-container'),
            skin: 'secondary',
            styles: { borderRadius: 10, height: 40, width: 200 },
        })
        .on(VKID.WidgetEvents.ERROR, (error: Error) => console.error('VK Ошибка входа', error))
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, async (payload: any) => {
            console.log('VK payload:', payload);

            const { code, device_id } = payload;
            if (!code || !device_id) {
                console.error('Пустой code или device_id', payload);
                return;
            }

            // Попробуем client-side обмен кода
            try {
                if (VKID.Auth && typeof VKID.Auth.exchangeCode === 'function') {
                    const tokenRes = await VKID.Auth.exchangeCode(code, device_id);
                    console.log('Client-side token:', tokenRes);
                    const dataBaba = await VKID.Auth.userInfo(tokenRes.access_token)
                    console.log(dataBaba)
                    const dataBaba4 = await NetworkService.streak;
                    console.log(dataBaba4)
                    try { await NetworkService.csrf(); } catch {}
                    await NetworkService.authVk({
                        access_token: tokenRes.access_token,
                        id_token: tokenRes.id_token,
                        refresh_token: tokenRes.refresh_token,
                        user_id: tokenRes.user_id,
                        scope: tokenRes.scope,
                        email: tokenRes.email || '',
                    });
                    return;
                }
            } catch (err) {
                console.error('VK exchangeCode error:', err);
            }

            // Server-side fallback
            try {
                const res = await NetworkService.authVk({
                    code,
                    device_id,
                    redirect_uri: REDIRECT_URL,
                });
                console.log('Server-side auth result:', res);
            } catch (error: any) {
                console.error('Server-side VK auth error:', error.response?.data || error);
            }
        });
    }, [isSdkLoaded]);


    return (
        <Wrapper>

            <WrapperOr>
                <hr />
                <p>или</p>
                <hr />
            </WrapperOr>
            <WrapperButtons>
                    <div id="vk-id-container" className='btnAuth'></div>
                <TelegramLoginButton botName='neurotinnitus_bot' />
            </WrapperButtons>
            
        </Wrapper>
    );
};

export default OAuthBtns;
