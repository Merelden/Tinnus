import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks';

const YandexForm = () => {
    const daysPassed = useAppSelector((state) => state.auth.daysPassed);
    const [formUrl, setFormUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (daysPassed === null) return;

        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/api/forms/current/?days=${daysPassed}`, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                setFormUrl(data.url);
            })
            .catch((err) => {
                console.error('Ошибка при получении формы:', err);
            })
            .finally(() => setLoading(false));
    }, [daysPassed]);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Анкета участника
            </Typography>

            {loading ? (
                <Typography variant="body1">Загрузка...</Typography>
            ) : formUrl ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.open(formUrl, '_blank')}
                >
                    Перейти к форме
                </Button>
            ) : (
                <Typography variant="body2" color="textSecondary">
                    Нет доступной формы на этот день.
                </Typography>
            )}
        </Box>
    );
};

export default YandexForm;
