'use client'

import WaveSvg from "@/components/UI/WaveSvg";
import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/InputAuth";
import {useState} from "react";
import OAuthBtns from "@/components/UI/OAuthBtns";


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>

                <h2>Регистрация</h2>

                <p className={'description-mini'}>
                    Пожалуйста, заполните форму для создания аккаунта.<br/>
                    Если у вас есть аккаунт, <Link href={'/login'}>войдите</Link>.
                </p>

                <AuthForm>
                    <InputAuth
                        image={'user'}
                        label={'ФИО'}
                        value={name}
                        onChange={setName}
                    />
                    <InputAuth
                        image={'calendar'}
                        label={'Возраст'}
                        value={age}
                        type={'number'}
                        onChange={setAge}
                    />
                    <InputAuth
                        image={'phone'}
                        label={'Номер телефона'}
                        value={phone}
                        type={'tel'}
                        onChange={setPhone}
                    />
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
                    <button type={"submit"}>Зарегистрироваться</button>
                </AuthForm>

                <OAuthBtns />

            </WindowBlock>
        </BackgroundPage>
    );
}
