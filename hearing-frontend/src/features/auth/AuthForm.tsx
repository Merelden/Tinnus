import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../hooks';
import { loginUser } from './authSlice';
import './index.css'

import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    TextField,
    Typography,
    Paper,
} from '@mui/material';
import GradientButton from '../../components/Gradient';

const AuthForm = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState<number>(0);
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(loginUser({
            email,
            password,
            full_name: fullName,
            age,
            agreed
        }));
    };

    return (
        <Container maxWidth="sm">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Paper elevation={4} sx={{ padding: 4, marginTop: 8 }}>
                    <Typography variant="h3" className='bold-h' gutterBottom align="center">
                        Регистрация
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            label="ФИО"
                            fullWidth
                            margin="normal"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField
                            label="Возраст"
                            fullWidth
                            margin="normal"
                            type="number"
                            required
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            type="email"
                            margin="normal"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Пароль"
                            fullWidth
                            type="password"
                            margin="normal"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="Согласен на участие в исследовании"
                        />

                        <GradientButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ marginTop: 2 }}
                            disabled={!agreed}
                        >
                            Зарегистрироваться
                        </GradientButton>
                    </Box>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default AuthForm;
