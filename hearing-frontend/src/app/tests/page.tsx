'use client'
import React, {useState, useEffect, FormEvent} from 'react';
import WaveSvg from "@/components/UI/WaveSvg";
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
import {isTestDay} from "@/store/streakStore";
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

type AnswersState = Record<number, AnswerValue>;


const QuestionsForm = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<AnswersState>({});
    const router = useRouter();
    const isTest = isTestDay();


    // Работа с беком
    useEffect(() => {
        const fetchData = async () =>{
            try{
                // if(!isTest){
                //     router.push("/instruction");
                // }else{
                    const res = await NetworkService.questions();
                    setQuestions(res.data.questions);

            }catch(err){
                console.log(err);
                setQuestions([])
            }
        }

        fetchData();
    }, []);
    const handleSubmit = () => {
        console.log(answers)
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
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    const handleNextQuestion = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
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
            <WaveSvg />
            <WindowBlock>
                {currentQuestion && (
                    <TestSection>
                        <TitleTest>
                            <ProgressBar
                                totalQuestions={questions.length}
                                currentQuestion={currentQuestionIndex + 1}
                            />
                            <h2>{currentQuestion.question}</h2>
                        </TitleTest>
                        <FormTest id='questionForm' onSubmit={handleNextQuestion}>
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
                        </FormTest>
                        <ButtonsWrapper>
                            <ButtonTest onClick={handlePrevQuestion} disabled={currentQuestionIndex===0}>Назад</ButtonTest>
                            <ButtonTest
                                $primary
                                disabled={!isAnswered(currentQuestion)}
                                type='submit'
                                form='questionForm'
                            >
                                {currentQuestionIndex === questions.length - 1 ? 'Отправить' : 'Далее'}
                            </ButtonTest>
                        </ButtonsWrapper>
                    </TestSection>
                )}
            </WindowBlock>
        </BackgroundPage>
    );
};

export default QuestionsForm;