'use client'

import WaveSvg from "@/components/UI/WaveSvg";
import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/InputAuth";
import {FormEvent, useState} from "react";
import OAuthBtns from "@/components/UI/OAuthBtns";
import {NetworkService} from "@/api/request";
import {useRouter} from "next/navigation";




export default function RegisterPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
    const router = useRouter();

    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null)
        try {
            const res = await NetworkService.register({
                user: {
                    email: email,
                    password: password
                },
                full_name: name,
                age: age,
                phone: phone,
            });
            console.log(res);
            if (res.status === 400) {
                const parsedErrors = res.data;
                setErrors({
                    email: parsedErrors.user.email ? parsedErrors.user.email[0] : '',
                    full_name: parsedErrors.full_name ? parsedErrors.full_name[0] : '',
                    age: parsedErrors.age ? parsedErrors.age[0] : '',
                    phone: parsedErrors.phone ? parsedErrors.phone[0] : '',
                    password: parsedErrors.user.password ? parsedErrors.user.password[0] : '',
                    detail: parsedErrors.detail ? parsedErrors.detail : ''
                });
                console.log(parsedErrors);
            }
            if (res.status === 201) {
                router.push("/start");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>

                <h2>Регистрация</h2>

                <p className={'description-mini'}>
                    Пожалуйста, заполните форму для создания аккаунта.<br/>
                    Если у вас есть аккаунт, <Link href={'/login'}>войдите</Link>.
                </p>

                <AuthForm onSubmit={register}>
                    <InputAuth
                        image={'user'}
                        label={'ФИО'}
                        value={name}
                        error={errors?.full_name}
                        onChange={setName}
                    />
                    <InputAuth
                        image={'calendar'}
                        label={'Возраст'}
                        value={age}
                        type={'number'}
                        error={errors?.age}
                        onChange={setAge}
                    />
                    <InputAuth
                        image={'phone'}
                        label={'Номер телефона'}
                        value={phone}
                        type={'tel'}
                        error={errors?.phone}
                        onChange={setPhone}
                    />
                    <InputAuth
                        image={'mail'}
                        label={'Email'}
                        value={email}
                        type={'email'}
                        error={errors?.email}
                        onChange={setEmail}
                    />
                    <InputAuth
                        image={'lock'}
                        label={'Пароль'}
                        value={password}
                        type={'password'}
                        error={errors?.password}
                        onChange={setPassword}
                    />
                    <button type={"submit"}>Зарегистрироваться</button>
                </AuthForm>

                <OAuthBtns />

            </WindowBlock>
        </BackgroundPage>
    );
}
