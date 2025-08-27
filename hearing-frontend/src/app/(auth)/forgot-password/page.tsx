'use client'
import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage, ContentBlock, OtherErrors} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/Auth/InputAuth";
import {FormEvent, useEffect, useState} from "react";
import OAuthBtns from "@/components/UI/Auth/OAuthBtns";
import {NetworkService} from "@/api/request";
import {useRouter} from "next/navigation";
import {isTestDay} from "@/store/streakStore";



export default function AuthPage() {
    const [email, setEmail] = useState('');
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

    // Запрос кода
    const auth = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null);
        try {
            await NetworkService.csrf();
            const res = await NetworkService.requestCode({
                email: email,
            });
            console.log(res);
            if (res.status === 400) {
                const parsedErrors = res.data;
                setErrors({
                    email: parsedErrors.email ? parsedErrors.email[0] : '',
                    detail: parsedErrors.detail ? parsedErrors.detail : ''
                });
                console.log(parsedErrors);
            }
            if (res.status === 200) {
                router.push('/forgot-password/submit');
            }
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <BackgroundPage>
            <ContentBlock>
                <WindowBlock>
                    <h2>Введите почту</h2>

                    <AuthForm onSubmit={auth}>
                        <InputAuth
                            image={'mail'}
                            label={'Email'}
                            value={email}
                            type={'email'}
                            onChange={setEmail}
                            error={errors?.email}
                        />

                        <button type={"submit"}>Получить код</button>
                    </AuthForm>

                </WindowBlock>
                <OtherErrors $message={errors?.detail}>
                    {errors?.detail}
                </OtherErrors>
            </ContentBlock>
        </BackgroundPage>
    );
}
