'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {useRouter} from "next/navigation";
import {
    TitleInstruction,
    VideoButton,
    VideoControls, VideoError,
    VideoRange,
    VideoWrapper,
    VideTime, WrapperWindowVide
} from "@/app/video/page.styled";
import SubmitButton from "@/components/UI/SubmitButton";
import {useEffect, useRef, useState} from "react";
import {NetworkService} from "@/api/request";


export default function VideoPage() {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const videoUrl = 'http://127.0.0.1:8000/videos/noise.mp4';

    const handleNext = () =>{
        const step = 125 / 12;
        const result = Math.floor(currentTime/step) + 1;
        const query = Math.min(Math.max(result, 1), 12)
        router.push(`/neuroexercise?timestamp=${Math.floor(query)}`)
    }

    //Управление видео
    const togglePlay = async () => {
        if (!videoRef.current) return;

        const res = await NetworkService.streak();
        console.log(res);
        try {
            if (videoRef.current.paused) {
                await videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error('Error playing video:', error);
        }
    }

    const rewind = (seconds: number) =>{
        if(videoRef.current){
            const newTime = videoRef.current.currentTime + seconds;
            videoRef.current.currentTime = Math.max(0, Math.min(newTime, videoRef.current.duration));
        }
    }

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }

    useEffect(() => {
        const video = videoRef.current;
        if(!video) return;

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };
        
        const handleLoadedMetadata = () => {
            if (video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded:', video.duration);
            }
        };
        
        const handleCanPlay = () => {
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from canplay:', video.duration);
            }
        };
        
        const handleEnded = () => {
            setIsPlaying(false);
        };

        const handleError = () => {
            setVideoError(true);
            setIsVideoReady(false);
            console.error('Video failed to load');
        };

        // Принудительно загружаем метаданные при монтировании
        if (video.readyState >= 1) {
            // Если видео уже загружено
            if (video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video already loaded, duration:', video.duration);
            }
        } else {
            // Если видео еще не загружено, загружаем метаданные
            video.load();
        }

        // Fallback: проверяем duration через небольшую задержку
        const fallbackTimer = setTimeout(() => {
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from fallback timer:', video.duration);
            }
        }, 1000);

        // Дополнительная проверка через 2 секунды
        const additionalTimer = setTimeout(() => {
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from additional timer:', video.duration);
            }
        }, 2000);

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("ended", handleEnded);
        video.addEventListener("error", handleError);
        
        return ()=>{
            clearTimeout(fallbackTimer);
            clearTimeout(additionalTimer);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('error', handleError);
        }
    }, [duration]);

    // Формат времени
    const formatTime = (time: number) => {
        if (isNaN(time) || time === 0 || time === Infinity) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    // Проверяем, что duration действительно валидный
    const isValidDuration = duration > 0 && !isNaN(duration) && duration !== Infinity;


    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <WrapperWindowVide>
                <TitleInstruction>
                    <h2>Теперь прослушайте аудиофайл</h2>
                    <p>Как только вы услышите шум, похожий на ваш, нажмите кнопку «Я услышал свой шум», чтобы продолжить. Это поможет нам точно зафиксировать ваш симптом и направить вас к нужному нейроупражнению.</p>
                </TitleInstruction>
                <VideoWrapper>
                    {videoError ? (
                        <VideoError>
                            <p>Ошибка загрузки видео. Попробуйте обновить страницу.</p>
                        </VideoError>
                    ) : (
                        <video
                            onClick={togglePlay}
                            ref={videoRef}
                            preload="metadata"
                            onLoadedMetadata={() => {
                                if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration) && videoRef.current.duration > 0 && videoRef.current.duration !== Infinity) {
                                    setDuration(videoRef.current.duration);
                                    setIsVideoReady(true);
                                    console.log('Video duration from onLoadedMetadata:', videoRef.current.duration);
                                }
                            }}
                            onCanPlay={() => {
                                if (videoRef.current && duration === 0 && videoRef.current.duration && !isNaN(videoRef.current.duration) && videoRef.current.duration > 0 && videoRef.current.duration !== Infinity) {
                                    setDuration(videoRef.current.duration);
                                    setIsVideoReady(true);
                                    console.log('Video duration from onCanPlay:', videoRef.current.duration);
                                }
                            }}
                            onError={() => setVideoError(true)}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    )}
                </VideoWrapper>
                <VideoControls>
                    <VideoButton onClick={()=>rewind(-10)} disabled={videoError || !isVideoReady}>-10c</VideoButton>
                    <VideoButton $primary onClick={togglePlay} disabled={videoError || !isVideoReady}>
                        {isPlaying ? 'Пауза' : 'Пуск'}
                    </VideoButton>
                    <VideoButton onClick={()=>rewind(10)} disabled={videoError || !isVideoReady}>+10c</VideoButton>
                    <VideoRange
                        type='range'
                        min={0}
                        max={isValidDuration ? duration : 0}
                        step={0.1}
                        value={currentTime}
                        onChange={handleRangeChange}
                        style={{ ['--value' as any]: isValidDuration ? `${(currentTime / duration) * 100}%` : '0%' }}
                        disabled={videoError || !isVideoReady}
                    />
                    <VideTime>
                        {isVideoReady && isValidDuration ? (
                            `${formatTime(currentTime)}/${formatTime(duration)}`
                        ) : (
                            'Загрузка...'
                        )}
                    </VideTime>
                </VideoControls>
                <SubmitButton
                    marginTop={12}
                    width={315} height={50}
                    label={'Я услышал свой шум'}
                    primary
                    onClick={handleNext}
                    hidden={isPlaying || !(currentTime>0)}
                />
                </WrapperWindowVide>
            </WindowBlock>
        </BackgroundPage>
    );
}
