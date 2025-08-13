const ConsentPage = () => {
    const handleConsent = () => {
        fetch('http://212.113.123.35:8000/auth/consent/', {
            method: 'POST',
            credentials: 'include',
        })
            .then(() => {
                window.location.href = '/profile';
            })
            .catch(() => alert('Ошибка согласия'));
    };

    return (
        <div>
            <h2>Согласие на участие</h2>
            <button onClick={handleConsent}>Я согласен</button>
        </div>
    );
};

export default ConsentPage;
