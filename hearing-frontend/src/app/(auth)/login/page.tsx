'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage, ContentBlock, OtherErrors} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/InputAuth";
import {FormEvent, useEffect, useState} from "react";
import OAuthBtns from "@/components/UI/OAuthBtns";
import {NetworkService} from "@/api/request";
import {useRouter} from "next/navigation";
import {isTestDay} from "@/store/streakStore";



export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
    const router = useRouter();

    //Проверка на авторизацию
    useEffect(() => {
        const fetchAuth = async () =>{
            const res = await NetworkService.isAuth();
            if(res.status === 200){
                router.push('/tests')
            }else{
                return;
            }
        }
        fetchAuth()
    }, []);

    //Авторизируем
    const auth = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null);
        try {
            await NetworkService.csrf();
            const res = await NetworkService.login({
                email: email,
                password: password
            });
            if (res.status === 400) {
                const parsedErrors = res.data;
                setErrors({
                    email: parsedErrors.email ? parsedErrors.email[0] : '',
                    password: parsedErrors.password ? parsedErrors.password[0] : '',
                    detail: parsedErrors.detail ? parsedErrors.detail : ''
                });
                console.log(parsedErrors);
            }
            if (res.status === 200) {
                router.push("/tests");
            }
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <BackgroundPage>
            <WaveSvg />
            <ContentBlock>
                <WindowBlock>
                    <h2>Вход в приложение</h2>
                    <p className={'description-mini'}>
                        Введите вашу почту и пароль, чтобы продолжить.<br/>
                        Если у вас нет аккаунта, <Link href={'/register'}>зарегистрируйтесь</Link>.
                    </p>

                    <AuthForm onSubmit={auth}>
                        <InputAuth
                            image={'mail'}
                            label={'Email'}
                            value={email}
                            type={'email'}
                            onChange={setEmail}
                            error={errors?.email}
                        />
                        <InputAuth
                            image={'lock'}
                            label={'Пароль'}
                            value={password}
                            type={'password'}
                            onChange={setPassword}
                            error={errors?.password}
                        />
                        <button type={"submit"}>Войти</button>
                    </AuthForm>

                    <OAuthBtns />

                </WindowBlock>
                <OtherErrors $message={errors?.detail}>
                    {errors?.detail}
                </OtherErrors>
            </ContentBlock>
        </BackgroundPage>
    );
}
