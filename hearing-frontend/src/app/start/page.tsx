'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import SubmitButton from "@/components/UI/SubmitButton";
import Reception from "@/components/UI/Reception";
import {useState} from "react";
import {ReceptionCondition, RoundIcon, StartSection} from "@/app/start/page.styled";
import Image from "next/image";
import {useModal} from "@/providers/ModalProvider";
import {useRouter} from "next/navigation";


export default function StartPage() {
    const [isReception, setIsReception] = useState(false);
    const {openModal} = useModal();
    const route = useRouter()

    const handleNext = () =>{
        route.push('/tests')
    }

    const handleConfirmModal = () => {
        console.log('erg');
        openModal(
            <div>
                <h2>Привкпет!!</h2>
            </div>
        )
    }

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <StartSection>

                    <RoundIcon>
                        <Image src={'/icons/ear.svg'} alt={'ear'} width={128} height={126} />
                    </RoundIcon>
                    <h2>Добро пожаловать</h2>
                    <p className={'description-start'}>
                        Приветствуем Вас в приложении, разработанном специально для научного исследования.
                        В течение следующих 15 дней мы приглашаем вас к прохождению диагностического упражнения
                        и прослушиванию нейроупражнения для снижения симптомов тиннитуса
                    </p>
                    <ReceptionCondition>
                        <Reception isReception={isReception} setIsReception={setIsReception}  />
                        <p>Я принимаю <button onClick={handleConfirmModal}>правила использования</button></p>
                    </ReceptionCondition>
                    <SubmitButton width={412} height={50} label={'Продолжить'} disabled={!isReception} primary onClick={handleNext} />

                </StartSection>
            </WindowBlock>
        </BackgroundPage>
    );
}
