'use client'
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        console.log("Home page");
        // функция, которую вызовет Telegram Login Widget
        window.onTelegramAuth = function (user) {
            console.log("Данные от Telegram:", user);

            const res = fetch("http://127.0.0.1:8000/auth/telegram/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Ответ бэкенда:", data);
                    alert("Авторизация прошла");
                })
                .catch(console.error);

            console.log(res);
        };

        // динамически создаём тег скрипта Telegram
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute("data-telegram-login", "neurotinniusbot"); // без @
        script.setAttribute("data-size", "large");
        script.setAttribute("data-onauth", "onTelegramAuth");
        script.setAttribute("data-request-access", "write");
        document.getElementById("telegram-login-btn").appendChild(script);
    }, []);

    return (
        <div style={{ padding: 50 }}>
            <h1>Вход через Telegram</h1>
            <div id="telegram-login-btn"></div>
        </div>
    );
}