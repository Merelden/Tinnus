import { useState } from 'react';

const ProfilePage = () => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState<number>(0);

    const handleSubmit = () => {
        fetch('http://212.113.123.35:8000/auth/profile/', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ full_name: fullName, age }),
        })
            .then(() => {
                window.location.href = '/done';
            })
            .catch(() => alert('Ошибка сохранения'));
    };

    return (
        <div>
            <h2>Введите ФИО и возраст</h2>
            <input
                placeholder="ФИО"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            /><br />
            <input
                placeholder="Возраст"
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            /><br />
            <button onClick={handleSubmit}>Сохранить</button>
        </div>
    );
};

export default ProfilePage;
