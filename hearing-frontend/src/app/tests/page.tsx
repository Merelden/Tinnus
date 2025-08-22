'use client'
import React, {useState, useEffect, FormEvent} from 'react';
import WindowBlock from "@/components/UI/WindowBlock";
import {BackgroundPage} from "@/app/(auth)/page.styled";
import {
    ButtonsWrapper,
    ButtonTest,
    FormTest,
    QuestionBlock,
    TestSection,
    TextAreaStyled,
    TitleTest
} from "@/app/tests/page.styled";
import ProgressBar from "@/components/UI/ProgressBar";
import Reception from "@/components/UI/Reception";
import {NetworkService} from "@/api/request";
import {isTestDay, loadStreak, streak} from "@/store/streakStore";
import {useRouter} from "next/navigation";

type Option = {
    id: number,
    label: string
}
type Question = {
    id: number;
    question: string;
    type: 'single' | 'multiple' | 'input';
    options?: Option[],
    input?: string
}
type AnswerValue = {
    selected?: number[];
    input?: string;
};
type InterstitialText ={
    title: string;
    text: string;
};

type AnswersState = Record<number, AnswerValue>;

type OutAnswer = {
    question: number;
    selected?: number | number[];
    input?: string;
};


const QuestionsForm = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<AnswersState>({});
    const [interstitialTexts, setInterstitialTexts] = useState<InterstitialText | null>(null);
    const [isStreakLoaded, setIsStreakLoaded] = useState(false);
    const router = useRouter();
    const streakDay = streak();
    const testDay = isTestDay();

    // Текстовые вставки
    const interstitials: Record<number, InterstitialText> = {
        12: {title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:", text: "Часть 1. Тревога. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"},
        19: {title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:", text: "Часть 2. Депрессия. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"},
        26: {title: "Ниже вы найдете 13 утверждений, описывающих различные мысли и чувства, которые могут быть связаны с шумом в ушах у вас.", text: "Шкала катастрофизации тиннитуса (TCS). Шкала катастрофизации тиннитуса направлена на определение мыслей и чувств, которые вы испытываете при ощущении шума в ушах. С помощью данного опросника мы хотим выяснить, какое влияние оказывает шум в ушах на ваше состояние: на настроение, поведение, отношение."},
    }

    // 1) Загружаем streak в стор и отмечаем готовность
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                await loadStreak();
                if (mounted) setIsStreakLoaded(true);
            } catch (err) {
                console.log(err);
                if (mounted) setIsStreakLoaded(true);
            }
        })();
        return () => { mounted = false };
    }, []);

    // 2) После загрузки streak реагируем на актуальное значение testDay
    useEffect(() => {
        if (!isStreakLoaded) return;
        if (!testDay) {
            router.push("/instruction");
            return;
        }
        (async () => {
            try {
                const res = await NetworkService.questions();
                setQuestions(res.data.questions);
            } catch (err) {
                console.log(err);
                setQuestions([]);
            }
        })();
    }, [isStreakLoaded, testDay, router]);
    const handleSubmit = async () => {
        const outAnswers: OutAnswer[] = Object.entries(answers)
            .map(([key, value]) => {
                const questionId = Number(key);
                const questionMeta = questions.find(q => q.id === questionId);

                const out: OutAnswer = { question: questionId };

                if (value.selected && value.selected.length > 0) {
                    if (questionMeta?.type === 'single') {
                        out.selected = value.selected[0];
                    } else if (questionMeta?.type === 'multiple') {
                        out.selected = value.selected;
                    }
                }

                if (value.input && value.input.trim() !== '') {
                    out.input = value.input.trim();
                }

                if (out.selected === undefined && !out.input) return null;
                return out;
            })
            .filter((v): v is OutAnswer => v !== null);

        const payload = { day: streakDay, answers: outAnswers };
        await NetworkService.answers(payload);
        router.push("/instruction");
    };

    // Изменение состояния ответов
    const handleMultipleChange = (qId: number, optionId: number, checked: boolean) => {
        setAnswers((prev) => {
            const prevAns = prev[qId]?.selected || [];
            const newAns = checked
                ? [...prevAns, optionId]
                : prevAns.filter((id) => id !== optionId);

            return { ...prev, [qId]: { ...prev[qId], selected: newAns } };
        });
    };
    const handleSingleChange = (questionId: number, optionId: number) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: { selected: [optionId] },
        }));
    };
    const handleInputChange = (qId: number, value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [qId]: { ...prev[qId], input: value },
        }));
    };

    //Переключение вопросов
    const handlePrevQuestion = () => {
        if (interstitialTexts){
            setInterstitialTexts(null);
            return;
        }
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    const handleNextQuestion = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const currentQ = questions[currentQuestionIndex];
        if(currentQ && interstitials[currentQ.id]) {
            setInterstitialTexts(interstitials[currentQ.id])
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev)=> prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handleNextFromInterstitial = () => {
        setInterstitialTexts(null);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    // Проверка ответа на вопрос
    const isAnswered = (question: Question): boolean=>{
        const ans = answers[question.id];
        if(question.type === 'multiple' || question.type === 'single'){
            return !!ans?.selected && ans.selected.length > 0
        }
        if (question.type === 'input') {
            return !!ans?.input && ans.input.trim() !== '';
        }
        return false
    }


    const currentQuestion: Question = questions[currentQuestionIndex];

    return (
        <BackgroundPage>
            <WindowBlock>
                {currentQuestion && (
                    <TestSection>
                        <TitleTest>
                            <ProgressBar
                                totalQuestions={questions.length}
                                currentQuestion={currentQuestionIndex + 1}
                            />
                            {!interstitialTexts && <h2>{currentQuestion.question}</h2>}
                            {interstitialTexts && <h2>{interstitialTexts.title}</h2>}
                        </TitleTest>
                        <FormTest id='questionForm' onSubmit={handleNextQuestion}>
                            {interstitialTexts ? (
                                <QuestionBlock>
                                    <p style={{cursor: "auto"}}>{interstitialTexts.text}</p>
                                </QuestionBlock>
                            ) : (
                                <>
                                    {currentQuestion.type === 'multiple' &&
                                        currentQuestion.options?.map((opt) => {
                                            const selected = answers[currentQuestion.id]?.selected || [];
                                            return (
                                                <QuestionBlock key={opt.id}>
                                                    <Reception
                                                        isReception={selected.includes(opt.id)}
                                                        setIsReception={(checked) =>
                                                            handleMultipleChange(currentQuestion.id, opt.id, checked)
                                                        }
                                                    />
                                                    <p>{opt.label}</p>
                                                </QuestionBlock>
                                            );
                                        })}
                                    {currentQuestion.type === 'single' &&
                                        currentQuestion.options?.map((opt) => (
                                            <QuestionBlock key={opt.id}>
                                                <Reception
                                                    type="radio"
                                                    isReception={answers[currentQuestion.id]?.selected?.[0] === opt.id}
                                                    setIsReception={(checked) =>
                                                        checked && handleSingleChange(currentQuestion.id, opt.id)
                                                    }
                                                />
                                                <p>{opt.label}</p>
                                            </QuestionBlock>
                                        ))}
                                    {currentQuestion.input && (
                                        <TextAreaStyled
                                            placeholder={currentQuestion.input}
                                            value={(answers[currentQuestion.id] as { input: string } | undefined)?.input || ''}
                                            onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                                        >
                                        </TextAreaStyled>
                                    )}
                                </>
                            )}
                        </FormTest>
                        <ButtonsWrapper>
                            <ButtonTest onClick={handlePrevQuestion} disabled={currentQuestionIndex===0 && !interstitialTexts}>Назад</ButtonTest>
                            <ButtonTest
                                $primary
                                disabled={!interstitialTexts && !isAnswered(currentQuestion)}
                                type={interstitialTexts ? 'button' : 'submit'}
                                onClick={interstitialTexts ? handleNextFromInterstitial : undefined}
                                form='questionForm'
                            >
                                {currentQuestionIndex === questions.length - 1 && !interstitialTexts ? 'Отправить' : 'Далее'}
                            </ButtonTest>
                        </ButtonsWrapper>
                    </TestSection>
                )}
            </WindowBlock>
        </BackgroundPage>
    );
};

export default QuestionsForm;