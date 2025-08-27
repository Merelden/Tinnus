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
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
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

    // Смена пароля
    const auth = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null);
        try {
            await NetworkService.csrf();
            const res = await NetworkService.requestCode({
                code: code,
                new_password: password,

            });
            console.log(res);
            if (res.status === 400) {
                const parsedErrors = res.data;
                setErrors({
                    code: parsedErrors.code ? parsedErrors.code[0] : '',
                    new_password: parsedErrors.new_password ? parsedErrors.new_password[0] : '',
                    confirm_password: parsedErrors.confirm_password ? parsedErrors.confirm_password[0] : '',
                    detail: parsedErrors.detail ? parsedErrors.detail : ''
                });
                console.log(parsedErrors);
            }
            if (res.status === 200) {
                router.push('/');
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
                            image={'phone'}
                            label={'Код подтверждения'}
                            value={code}
                            type={'string'}
                            onChange={setCode}
                            error={errors?.code}
                        />
                        {code.length >6 && (
                            <>
                                <InputAuth
                                    image={'lock'}
                                    label={'Новый пароль'}
                                    value={password}
                                    type={'password'}
                                    onChange={setPassword}
                                    error={errors?.new_password}
                                />
                                <InputAuth
                                    image={'lock'}
                                    label={'Подтверждение пароля'}
                                    value={passwordConfirm}
                                    type={'password'}
                                    onChange={setPasswordConfirm}
                                    error={errors?.confirm_password}
                                />
                            </>
                        )}
            
                        <button type={"submit"}>Сохранить</button>
                    </AuthForm>

                </WindowBlock>
                <OtherErrors $message={errors?.detail}>
                    {errors?.detail}
                </OtherErrors>
            </ContentBlock>
        </BackgroundPage>
    );
}
