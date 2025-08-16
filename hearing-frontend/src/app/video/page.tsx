'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {useRouter} from "next/navigation";
import {
    TitleInstruction,
    VideoButton,
    VideoControls,
    VideoRange,
    VideoWrapper,
    VideTime
} from "@/app/video/page.styled";
import SubmitButton from "@/components/UI/SubmitButton";


export default function VideoPage() {
    const router = useRouter()
    const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

    const handleNext = () =>{
        router.push('/neuroexercise')
    }

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <TitleInstruction>
                    <h2>Теперь прослушайте аудиофайл</h2>
                    <p>Как только вы услышите шум, похожий на ваш, нажмите кнопку «Я услышал свой шум», чтобы продолжить. Это поможет нам точно зафиксировать ваш симптом и направить вас к нужному нейроупражнению.</p>
                </TitleInstruction>
                <VideoWrapper>
                    <video width='100%' controls>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </VideoWrapper>
                <VideoControls>
                    <VideoButton>-10c</VideoButton>
                    <VideoButton $primary>Пуск</VideoButton>
                    <VideoButton>+10c</VideoButton>
                    <VideoRange type='range' />
                    <VideTime>0:00/1:56</VideTime>
                </VideoControls>
                <SubmitButton width={315} height={50} label={'Я услышал свой шум'} primary onClick={handleNext} />
            </WindowBlock>
        </BackgroundPage>
    );
}
