'use client'
import {
    ButtonContainer,
    ButtonHome,
    ContainerHome, DescriptionHome, Footer,
    Header, HowItWorksCards, HowItWorksHeader, HowItWorksSection, ImportanceCards, ImportanceSection,
    InitialContent, InitialImage,
    InitialSection,
    InitialText, TitleHome
} from "@/app/page.styled";
import Image from "next/image";
import ImportanceCard from "@/components/home/ImportanceCard";
import HowItWorksCard from "@/components/home/HowItWorksCard";
import {useEffect, useState} from "react";
import {NetworkService} from "@/api/request";

export default function Home() {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const isAuth = async ()=>{
            const res = await NetworkService.isAuth();
            if(res.status===200){
                setAuth(true)
            }else{
                setAuth(false)
            }
        }
        isAuth();
    }, []);

  return (
    <>
        <InitialSection>
            <ContainerHome>
                <Header>
                    <Image width={212} height={75} src="/icons/logo-text.svg" alt={"logo"} className={'logo'} />
                    <ButtonContainer>
                        <ButtonHome href={'#info'} $width={200}>Узнать больше</ButtonHome>
                        {isAuth
                            ? <ButtonHome href={'/tests'} $width={260} $primary>Начать упражнение</ButtonHome>
                            : <ButtonHome href={'/register'} $width={190} $primary>Регистрация</ButtonHome>
                        }
                    </ButtonContainer>
                </Header>
                <InitialContent>
                    <InitialText>
                        <h1>Программа<br/>исследования<br/>тиннитуса</h1>
                        <DescriptionHome>Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса. Ваше участие важно для нас и для улучшения жизни людей с этим состоянием.</DescriptionHome>
                        <ButtonContainer>
                            {isAuth
                                ? <ButtonHome href={'/tests'} $width={260} $primary>Начать упражнение</ButtonHome>
                                : <ButtonHome href={'/register'} $width={210} $primary>Присоединиться</ButtonHome>
                            }
                            <ButtonHome href={'#info'} $width={210}>Узнать больше</ButtonHome>
                        </ButtonContainer>
                    </InitialText>
                    <InitialImage>
                        <Image width={0} height={0} layout='responsive' src="/images/mainHeader.png" alt={"Начальная картинка"} />
                    </InitialImage>
                </InitialContent>
            </ContainerHome>
        </InitialSection>


        <ContainerHome>
            <ImportanceSection id={'info'}>
                <TitleHome>Почему ваше участие так важно?</TitleHome>
                <DescriptionHome className={'description'}>В этом исследовании мы сосредоточены на улучшении методов диагностики тиннитуса. Пройдя серию диагностических упражнений и нейроупражнений, вы сможете помочь нам собрать важные данные, которые будут использованы для более точного понимания и лечения этого состояния.</DescriptionHome>
                <ImportanceCards>
                    <ImportanceCard image={'audio-waves'} title={'Возможность снизить симптомы тиннитуса'} description={'С помощью упражнений и терапии вы сможете почувствовать улучшение состояния.'} />
                    <ImportanceCard image={'vrach'} title={'Личное внимание и помощь от профессионалов'} description={'Наши специалисты всегда рядом, чтобы помочь вам на каждом этапе.'} />
                    <ImportanceCard image={'heart-hands'} title={'Рекомендации по улучшению качества жизни'} description={'Вы получите советы, которые помогут вам улучшить ваше состояние в долгосрочной перспективе.'} />
                </ImportanceCards>
                {isAuth
                    ? <ButtonHome href={'/tests'} $width={410} $primary>Перейти к упражнению</ButtonHome>
                    : <ButtonHome href={'/register'} $width={410} $primary>Присоединиться к исследованию</ButtonHome>
                }
            </ImportanceSection>

            <HowItWorksSection>
                <HowItWorksHeader>
                    <TitleHome>Как работает наша<br/>программа  по<br/>исследованию тиннитуса?</TitleHome>
                    <DescriptionHome>В рамках нашей программы вы будете ежедневно получать задания и упражнения. Эти задания помогут вам лучше справляться с тиннитусом. Мы также будем отправлять вам напоминания, чтобы вы не забывали выполнять упражнения.</DescriptionHome>
                </HowItWorksHeader>
                <HowItWorksCards>
                    <HowItWorksCard image={'to_do_list'} title={'Подключение к исследованию за несколько шагов'} description={'Зарегистрируйтесь через простую форму или с помощью ВКонтакте/Телеграма. После этого получите доступ к программе и начните исследования.'} />
                    <HowItWorksCard image={'questionnaire'} title={'Ежедневные задания для контроля состояния'} description={'Каждый день выполняйте тесты и упражнения для диагностики и улучшения состояния. Программа адаптируется к вашему прогрессу.'} />
                    <HowItWorksCard image={'reminder'} title={'Поддержка на каждом шаге исследования'} description={'Получайте напоминания и рекомендации, чтобы не забывать выполнять задания и поддерживать прогресс.'} />
                </HowItWorksCards>
            </HowItWorksSection>
        </ContainerHome>

        <Footer>
            <TitleHome>Присоединяйтесь к исследованию</TitleHome>
            <DescriptionHome>Станьте частью программы и помогите улучшить жизнь людей, страдающих от тиннитуса</DescriptionHome>
            {isAuth
                ? <ButtonHome href={'/tests'} $width={410} $primary>Перейти к упражнению</ButtonHome>
                : <ButtonHome href={'/register'} $width={410} $primary>Присоединиться</ButtonHome>
            }
        </Footer>

    </>
  );
}
