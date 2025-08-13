import { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Button,
    Alert,
    CircularProgress,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import FormRenderer from './FormRenderer';

interface Field {
    id: number;
    label: string;
    field_type: string;
    required: boolean;
    options: string;
}

interface Form {
    id: number;
    title: string;
    fields: Field[];
}

interface FormGroup {
    id: number;
    name: string;
    forms: Form[];
}

const GroupedFormsPage = () => {
    const { groupId } = useParams();
    const navigate = useNavigate();
    const profile = useAppSelector((state) => state.auth.profile);

    const [group, setGroup] = useState<FormGroup | null>(null);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [formValues, setFormValues] = useState<{ [formId: number]: { [fieldId: number]: any } }>({});
    const [otherInputs, setOtherInputs] = useState<{ [fieldId: number]: string }>({});
    const [loading, setLoading] = useState(true);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/form-groups/${groupId}/`, {
                    credentials: 'include',
                });
                if (!res.ok) throw new Error('Ошибка загрузки группы форм');
                const data = await res.json();
                setGroup(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchGroup();
    }, [groupId]);

    const currentForm = group?.forms[currentFormIndex];

    const handleChange = (fieldId: number, value: any) => {
        setFormValues((prev) => ({
            ...prev,
            [currentForm!.id]: {
                ...(prev[currentForm!.id] || {}),
                [fieldId]: value,
            },
        }));
    };

    const handleOtherChange = (fieldId: number, value: string) => {
        setOtherInputs((prev) => ({
            ...prev,
            [fieldId]: value,
        }));
    };

    const handleSubmitForm = async () => {
        const formId = currentForm!.id;
        const answers = formValues[formId] || {};
        const responsePayload = {
            form_id: formId,
            full_name: profile?.full_name || '',
            responses: Object.entries(answers).map(([fieldId, value]) => ({
                field_id: Number(fieldId),
                answer: Array.isArray(value) ? value.join(', ') : value,
            })),
        };

        for (const [fieldId, text] of Object.entries(otherInputs)) {
            if (text?.trim()) {
                responsePayload.responses.push({
                    field_id: Number(fieldId),
                    answer: text.trim(),
                });
            }
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/forms/submit/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(responsePayload),
            });

            if (!res.ok) throw new Error('Ошибка при отправке');

            if (currentFormIndex < group!.forms.length - 1) {
                setCurrentFormIndex((prev) => prev + 1);
            } else {
                setSubmitStatus('success');
                navigate('/videos');
            }
        } catch (err) {
            console.error(err);
            setSubmitStatus('error');
        }
    };

    if (loading || !group || !currentForm) {
        return (
            <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container sx={{ py: 6 }}>
            <Paper elevation={0} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    {currentForm.title}
                </Typography>

                <FormRenderer
                    form={currentForm}
                    values={formValues[currentForm.id] || {}}
                    onChange={handleChange}
                    otherInputs={otherInputs}
                    onOtherChange={handleOtherChange}
                />

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }}
                    onClick={handleSubmitForm}
                >
                    {currentFormIndex < group.forms.length - 1 ? 'Следующая форма' : 'Завершить'}
                </Button>

                {submitStatus === 'success' && (
                    <Alert sx={{ mt: 2 }} severity="success">
                        Все формы успешно отправлены!
                    </Alert>
                )}
                {submitStatus === 'error' && (
                    <Alert sx={{ mt: 2 }} severity="error">
                        Ошибка при отправке формы.
                    </Alert>
                )}
            </Paper>
        </Container>
    );
};

export default GroupedFormsPage;
