'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {useRouter, useSearchParams} from "next/navigation";
import SubmitButton from "@/components/UI/SubmitButton";
import {InfoWindow, TitleNeuroexercise, VideoWrapper} from "@/app/neuroexercise/page.styled";
import {useEffect} from "react";
import {NetworkService} from "@/api/request";
import {streak, streakLoaded} from "@/store/streakStore";


export default function NeuroexercisePage() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const timestamp = searchParams.get('timestamp');
    const loaded = streakLoaded();
    const streakDay = streak();
    const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

    // Редирект по дню: пример — если день 3, переходим на страницу видео
    useEffect(() => {
        if (!loaded) return;
        if (streakDay === 3) {
            router.replace('/video');
        }
    }, [loaded, streakDay, router]);

    // Получение видео только после загрузки streak и если остаёмся на этой странице
    useEffect(() => {
        if (!loaded) return;
        if (streakDay === 3) return; // при редиректе не грузим
        const fetchVideo = async () => {
            const res = await NetworkService.calming({
                timestamp: timestamp,
            });
            console.log(res.data.path);
        };
        fetchVideo();
    }, [loaded, streakDay, timestamp]);

    const handleNext = () =>{
        router.push('/complete')
    }

    if (!loaded) return null;

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
                        <InfoWindow $primary>День {streakDay} из 15</InfoWindow>
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
