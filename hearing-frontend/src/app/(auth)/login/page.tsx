'use client'

import WaveSvg from "@/components/UI/WaveSvg";
import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/InputAuth";
import {useState} from "react";
import OAuthBtns from "@/components/UI/OAuthBtns";


export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>

                <h2>Вход в приложение</h2>

                <p className={'description-mini'}>
                    Введите вашу почту и пароль, чтобы продолжить.<br/>
                    Если у вас нет аккаунта, <Link href={'/register'}>зарегистрируйтесь</Link>.
                </p>

                <AuthForm>
                    <InputAuth
                        image={'mail'}
                        label={'Email'}
                        value={email}
                        type={'email'}
                        onChange={setEmail}
                    />
                    <InputAuth
                        image={'lock'}
                        label={'Пароль'}
                        value={password}
                        type={'password'}
                        onChange={setPassword}
                    />
                    <button type={"submit"}>Войти</button>
                </AuthForm>

                <OAuthBtns />

            </WindowBlock>
        </BackgroundPage>
    );
}
