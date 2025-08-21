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
import {TextareaComplete} from "@/app/complete/page.styled";
 import {NetworkService} from "@/api/request";


export default function CompletePage() {
    const [reviewValue, setReviewValue] = useState('')
    const route = useRouter()

    const fetchReview = async () => {
        await NetworkService.feedback({feedback: reviewValue})
        route.push('/')
    }

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <StartSection>

                    <RoundIcon>
                        <Image src={'/icons/check.svg'} alt={'check'} width={100} height={100} />
                    </RoundIcon>
                    <h2 style={{textWrap:"wrap"}}>Благодарим за<br/>выполнение упражнения!</h2>
                    <p className={'description-start'}>
                        Пожалуйста, поделитесь своими ощущениями после прослушивания упражнения. Это поможет нам сделать программу ещё лучше.
                    </p>
                    <TextareaComplete
                        placeholder='Опишите свои ощущения, мысли и наблюдения...'
                        value={reviewValue}
                        onChange={(e)=> setReviewValue(e.target.value)}
                    />
                    <SubmitButton width={300} height={50} label={'Отправить'} primary onClick={fetchReview} />
                    <p className={'description-start'}>Не забывайте возвращаться завтра — это ежедневная практика, и она работает лучше всего при регулярном участии!</p>
                </StartSection>
            </WindowBlock>
        </BackgroundPage>
    );
}
