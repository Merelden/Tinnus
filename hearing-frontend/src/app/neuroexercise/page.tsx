'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {useRouter} from "next/navigation";
import SubmitButton from "@/components/UI/SubmitButton";
import {InfoWindow, TitleNeuroexercise, VideoWrapper} from "@/app/neuroexercise/page.styled";


export default function NeuroexercisePage() {
    const router = useRouter()
    const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

    const handleNext = () =>{
        router.push('/complete')
    }

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <TitleNeuroexercise>
                    <div>
                        <h2>Нейроупражнение</h2>
                        <p>Упражнение сегодняшнего дня для Вас. Прослушайте в спокойном состоянии и удобном положении, постарайтесь расслабиться и настроиться на отдых.</p>
                    </div>
                    <div>
                        <InfoWindow $primary>День 1 из 15</InfoWindow>
                        <InfoWindow>Группа: A</InfoWindow>
                    </div>
                </TitleNeuroexercise>
                <VideoWrapper>
                    <video width='100%' controls>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </VideoWrapper>

                <TitleNeuroexercise>
                    <p>Задача каждого дня заключается в том, чтобы научиться расслабляться, снизить уровень тревоги и снизить влияние шума в ушах на ваше настроение.</p>
                    <SubmitButton width={315} height={50} label={'Я прослушал упражнение'} primary onClick={handleNext} />
                </TitleNeuroexercise>
            </WindowBlock>
        </BackgroundPage>
    );
}
