import { useEffect } from 'react';
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import confetti from 'canvas-confetti';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const DonePage = () => {
    const isNewUser = useAppSelector((state) => state.auth.isNewUser);
    const daysPassed = useAppSelector((state) => state.auth.daysPassed);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isNewUser) return;

        const duration = 2 * 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                spread: 90,
                origin: { y: 0.6 },
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, [isNewUser]);

    const showSurveyButton =
        daysPassed !== null && [0, 14, 29].includes(daysPassed);

    const handleGoToForm = () => {
        if (daysPassed !== null) {
            navigate(`/form-group/1`);
        }
    };

    const handleGoToFormTwo = () => {
        navigate(`/form-group/1`);
    };

    if (!isNewUser) {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 2,
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Typography variant="h6">
                    Сегодня вам доступен опрос, который поможет нам лучше понять ваше состояние.
                    Пожалуйста, пройдите его, это займёт всего несколько минут.
                </Typography>

                {showSurveyButton && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGoToForm}
                    >
                        Перейти к опросу
                    </Button>
                )}
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        textAlign: 'center',
                        border: '2px solid #1976d2',
                        borderRadius: '16px',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        🎉 Поздравляем!
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Ваш профиль успешно сохранён.
                        <br />
                        Спасибо за участие в исследовании.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        onClick={handleGoToFormTwo}
                    >
                        Перейти к опросу
                    </Button>
                </Paper>
            </Container>
        </Box>
    );

};

export default DonePage;
