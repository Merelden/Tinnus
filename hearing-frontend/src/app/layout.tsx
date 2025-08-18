import { Metadata } from 'next';
import { Manrope, Montserrat } from 'next/font/google';
import '../styles/reset.css';
import ModalProvider from "@/providers/ModalProvider";
import Modal from "@/components/UI/Modal";

// Подключение шрифтов
const MontserratFont = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
});

const ManropeFont = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
});

// Дефолтные метаданные, которые будут использоваться на всех страницах
export const metadata: Metadata = {
    title: 'Программа исследования тиннитуса',
    description:
        'Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса.',
    openGraph: {
        title: 'Программа исследования тиннитуса',
        description:
            'Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса.',
        url: 'https://neurotinnitus.ru',
        siteName: 'Программа исследования тиннитуса',
        images: [
            {
                url: '/images/ogImage.png',
                width: 1200,
                height: 630,
                alt: 'Начальная картинка',
            },
        ],
        type: 'website',
    },
    icons: {
        icon: [
            { url: "/favicon/favicon.ico", sizes: "any" },
            { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
            { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192" },
            { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512" },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Программа исследования тиннитуса',
        description:
            'Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса.',
        images: ['/images/ogImage.png'],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body className={`${ManropeFont.variable} ${MontserratFont.variable}`}>
            <ModalProvider>
                {children}
                <Modal />
            </ModalProvider>
        </body>
        </html>
    );
}
