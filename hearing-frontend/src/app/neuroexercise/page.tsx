'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {useRouter, useSearchParams} from "next/navigation";
import SubmitButton from "@/components/UI/SubmitButton";
import {InfoWindow, TitleNeuroexercise, VideoWrapper} from "@/app/neuroexercise/page.styled";
import {useEffect, useState} from "react";
import {NetworkService} from "@/api/request";
import {streak, streakLoaded, studyGroup} from "@/store/streakStore";


export default function NeuroexercisePage() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const timestamp = searchParams.get('timestamp');
    const [videoUrl, setVideoUrl] = useState<string>('')
    const loaded = streakLoaded();
    const streakDay = streak();
    const totalDays = studyGroup();

    useEffect(() => {
        console.log()
        const fetchVideo = async () => {
            const res = await NetworkService.calming({
                timestamp: timestamp,
            });
            if(res.status === 200){
                // setVideoUrl(`http://127.0.0.1:8000${res.data.path}`)
                setVideoUrl(`http://127.0.0.1:8000/videos/noise.mp4`)
            }else{
                setVideoUrl(`http://127.0.0.1:8000/videos/early/1.mp4"`)
            }
        };
        fetchVideo();
    }, []);

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
                        <InfoWindow $primary>День {streakDay} из {totalDays}</InfoWindow>
                        <InfoWindow>Группа: {totalDays>15 ? 'B' : 'A'}</InfoWindow>
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
