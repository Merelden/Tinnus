'use client'
import WaveSvg from "@/components/UI/WaveSvg";
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {
    CardInstruction,
    CardsInstruction,
    NoteInstruction,
    noteInstruction,
    TitleInstruction
} from "@/app/instruction/page.styled";
import SubmitButton from "@/components/UI/SubmitButton";
import {useRouter} from "next/navigation";


export default function InstructionPage() {
    const router = useRouter()

    const handleNext = () =>{
        router.push('/video')
    }

    return (
        <BackgroundPage>
            <WaveSvg />
            <WindowBlock>
                <TitleInstruction>
                    <h2>Мультсенсорная шумометрия</h2>
                    <p>В рамках исследования приглашаем вас в новое тестирование — аудиовизуальную шумометрию. Вы будете проходить её ежедневно следующие 15 дней.</p>
                </TitleInstruction>
                <CardsInstruction>
                    <CardInstruction>
                        <h4>1</h4>
                        <div>
                            <h3>Подготовьтесь</h3>
                            <p>Используйте наушники или прибавьте громкость на вашем устройстве. Когда будете готовы, нажмите кнопку «Начать».</p>
                        </div>
                    </CardInstruction>
                    <CardInstruction>
                        <h4>2</h4>
                        <div>
                            <h3>Слушайте и смотрите</h3>
                            <p>Воспроизведение сопровождается цветом и шумом. Как только услышите шум, похожий на ваш - нажмите «Стоп».</p>
                        </div>
                    </CardInstruction>
                    <CardInstruction>
                        <h4>3</h4>
                        <div>
                            <h3>Точная навигация</h3>
                            <p>Чтобы вернуться назад или пройти вперёд, используйте кнопки на 10 секунд назад или на 10 секунд вперёд.</p>
                        </div>
                    </CardInstruction>
                </CardsInstruction>
                <SubmitButton width={316} height={50} label={'Начать тестирование'} primary onClick={handleNext} />
                <NoteInstruction>
                    Обратите внимание: на следующий день шум и цвет могут измениться — это нормально.
                </NoteInstruction>
            </WindowBlock>
        </BackgroundPage>
    );
}
