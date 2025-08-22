import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Image from "next/image";
import { lightGrayColor, textColor } from "@/styles/colors";
import Head from 'next/head';
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
    .btnAuth{
        width: 200px;
        height: 40px;
        overflow: hidden;
    }
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
        if (isSdkLoaded && 'VKIDSDK' in window) {
            const VKID = window.VKIDSDK;

            // Инициализация SDK
            VKID.Config.init({
                app: 54067159,
                redirectUrl: 'https://neurotinnitus.ru',
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
                    height: 40
                }
            })
            .on(VKID.WidgetEvents.ERROR, vkidOnError)
            .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
                const code = payload.code;
                const deviceId = payload.device_id;

                // Обмен кода на токен
                VKID.Auth.exchangeCode(code, deviceId)
                    .then(vkidOnSuccess)
                    .catch(vkidOnError);
            });

            function vkidOnSuccess(data) {
                console.log("Результат обмена кода:", data);

                const idToken = data.id_token;
                const accessToken = data.access_token;
                console.log(accessToken)

                if (idToken) {
                    VKID.Auth.publicInfo(idToken)
                    .then(userInfo => {
                        authWithServer(accessToken)
                        console.log("Информация о пользователе:", userInfo);
                    })
                    .catch(err => {
                        console.error("Ошибка получения publicInfo:", err);
                    });
                }
            }

            function vkidOnError(error) {
                // Обработка ошибки
                console.error('Ошибка входа', error);
            }
            const authWithServer = async(accessToken: string)=>{
                const res = await NetworkService.authVk({
                    access_token: accessToken
                })
                console.log(res);
            }
        }
    }, [isSdkLoaded]);

    return (
        <Wrapper>
            <Head>
                <script src="https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js"></script>
            </Head>
            <WrapperOr>
                <hr />
                <p>илfи</p>
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
