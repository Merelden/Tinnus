import { useEffect, useState } from 'react';

interface FormField {
    id: number;
    label: string;
    field_type: string;
    required: boolean;
    options: string;
    order: number;
}

interface FormData {
    id: number;
    title: string;
    fields: FormField[];
    url?: string; // если ты всё ещё хранишь ссылку
}

export const useFormData = (days: number | null) => {
    const [form, setForm] = useState<FormData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (days === null) return;

        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/api/forms/current/?days=29`, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => setForm(data))
            .catch((err) => setError(err.message || 'Ошибка загрузки формы'))
            .finally(() => setLoading(false));
    }, [days]);

    return { form, loading, error };
};
