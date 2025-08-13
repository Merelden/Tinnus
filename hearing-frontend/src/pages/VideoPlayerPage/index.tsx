import { useEffect, useState, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    CircularProgress,
    Alert,
} from '@mui/material';

interface Video {
    id: number;
    title: string;
    file: string;
}

const VideoPlayerPage = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/videos/`, {
                    credentials: 'include',
                });
                if (!res.ok) throw new Error('Ошибка загрузки видео');

                const data = await res.json();
                setVideos(data);
            } catch (err: any) {
                setError(err.message || 'Неизвестная ошибка');
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        videos.forEach((video, index) => {
            const videoEl = videoRefs.current[index];
            if (!videoEl) return;

            const handlePause = async () => {
                const currentTime = videoEl.currentTime;
                console.log(`Видео "${video.title}" — пауза на ${currentTime.toFixed(2)} сек`);

                try {
                    await fetch(`${process.env.REACT_APP_API_URL}/api/videos/save-timestamp/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            video: video.id,
                            timestamp: currentTime,
                        }),
                    });
                } catch (err) {
                    console.error('Ошибка при отправке таймкода:', err);
                }
            };

            videoEl.addEventListener('pause', handlePause);
            return () => videoEl.removeEventListener('pause', handlePause);
        });
    }, [videos]);

    if (loading) {
        return (
            <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h4" gutterBottom>
                Видеофайлы
            </Typography>

            {videos.map((video, index) => (
                <Box key={video.id} mb={6}>
                    <Typography variant="h6" gutterBottom>
                        {video.title}
                    </Typography>
                    <video
                        controls
                        ref={(el) => {
                            videoRefs.current[index] = el;
                        }}
                        style={{ width: '100%', borderRadius: '12px' }}
                        src={video.file}
                    />
                </Box>
            ))}
        </Container>
    );
};

export default VideoPlayerPage;
