'use client'

import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import SubmitButton from "@/components/UI/SubmitButton";
import ReceptionConditions from "@/components/UI/ReceptionConditions";
import {useState} from "react";



export default function StartPage() {
    const [isReception, setIsReception] = useState(false);

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>

                <h2>Добро пожаловать</h2>
                <p className={'description-start'}>
                    Приветствуем Вас в приложении, разработанном специально для научного исследования.
                    В течение следующих 15 дней мы приглашаем вас к прохождению диагностического упражнения
                    и прослушиванию нейроупражнения для снижения симптомов тиннитуса
                </p>
                <ReceptionConditions isReception={isReception} setIsReception={setIsReception}  />
                <p>Я принимаю правила использования</p>
                <SubmitButton width={412} height={50} label={'Продолжить'} disabled={!isReception} />


            </WindowBlock>
        </BackgroundPage>
    );
}
