import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Image from "next/image";
import { lightGrayColor, textColor } from "@/styles/colors";

import { NetworkService } from '@/api/request';

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
        -webkit-user-drag: none;с≠
    }
`;

const OAuthBtns = () => {
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);

    useEffect(() => {
        // Программно загружаем скрипт SDK
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js";
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
        // Проверка, что SDK загружен и готов
        if (isSdkLoaded && (window as any).VKIDSDK) {
            const VKID: any = (window as any).VKIDSDK;
            const REDIRECT_URL = 'https://neurotinnitus.ru';

            // Инициализация SDK
            VKID.Config.init({
                app: 54067159,
                redirectUrl: REDIRECT_URL,
                responseMode: VKID.ConfigResponseMode.Callback,
                source: VKID.ConfigSource.LOWCODE,
                scope: 'email, vkid.personal_info'// Заполните нужными доступами по необходимости
            });

            const oneTap = new VKID.OneTap();

            // Рендер виджета в контейнер
            oneTap.render({
                container: document.getElementById('vk-id-container'),
                showAlternativeLogin: true,
                skin: 'secondary',
                styles: {
                    borderRadius: 10,
                    height: 40,
                    width: 200
                }
            })
            .on(VKID.WidgetEvents.ERROR, vkidOnError)
            .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: any) {
                const code = payload.code;
                const deviceId = payload.device_id;
                const codeVerifier = payload.code_verifier || payload.codeVerifier;

                // Отправляем code на бэкенд
                authWithServer(code, deviceId, codeVerifier, REDIRECT_URL);
            });



            function vkidOnError(error) {
                // Обработка ошибки
                console.error('Ошибка входа', error);
            }
            const authWithServer = async(code, deviceId, codeVerifier, redirectUri)=>{
                const res = await NetworkService.authVk({
                    code: code,
                    device_id: deviceId,
                    code_verifier: codeVerifier,
                    redirect_uri: redirectUri
                })
                console.log(res);
            }
        }
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
                <Button>
                    <Image width={110} height={25} src={'/icons/auth/tg-auth.svg'} alt={'Телеграм'} />
                </Button>
            </WrapperButtons>
            
        </Wrapper>
    );
};

export default OAuthBtns;
