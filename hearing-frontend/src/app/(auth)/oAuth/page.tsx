'use client'

import Link from "next/link";
import WindowBlock from "@/components/UI/WindowBlock";
import {AuthForm, BackgroundPage} from "@/app/(auth)/page.styled";
import InputAuth from "@/components/UI/Auth/InputAuth";
import {FormEvent, useEffect, useState} from "react";
import OAuthBtns from "@/components/UI/Auth/OAuthBtns";
import {NetworkService} from "@/api/request";
import {useRouter} from "next/navigation";


export default function OAuthPage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
    const router = useRouter();

    //Проверка на авторизацию
    useEffect(() => {
        const fetchAuth = async () =>{
            const res = await NetworkService.isAuth();
            if(res.status === 200){
                const info = res.data.participant
                console.log(info)
                setName(info?.full_name)
                setAge(info?.age)
                setEmail(info?.user?.email)
                setPhone(info?.phone)
            }else{
                return;
            }
        }
        fetchAuth()
    }, []);

    // Регистрируем
    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null)
        try {
            await NetworkService.csrf();
            if(phone.length !== 12){
                setErrors({
                    phone: 'Введите корректный номер телефона'
                })
                return;
            }
            const res = await NetworkService.completeProfile({
                email: email,
                full_name: name,
                age: age,
                phone: phone,
            });
            console.log(res)
            if (res.status === 400) {
                const parsedErrors = res.data;
                setErrors({
                    email: parsedErrors.user.email ? parsedErrors.user.email[0] : '',
                    full_name: parsedErrors.full_name ? parsedErrors.full_name[0] : '',
                    age: parsedErrors.age ? parsedErrors.age[0] : '',
                    phone: parsedErrors.phone ? parsedErrors.phone[0] : '',
                    detail: parsedErrors.detail ? parsedErrors.detail : ''
                });
                console.log(parsedErrors);
            }
            if (res.status === 200) {
                router.push('/start')
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BackgroundPage>
            <WindowBlock>

                <h2>Регистрация</h2>

                <p className={'description-mini'}>
                    Пожалуйста, проверьте правильность введённых данных.<br />
                    И заполните все пустые поля.
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
                    <button type={"submit"}>Зарегистрироваться</button>
                </AuthForm>
            </WindowBlock>
        </BackgroundPage>
    );
}
