'use client'
import {ButtonContainer, ButtonHome, ContainerHome, Header, InitialSection} from "@/app/page.styled";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <InitialSection>
            <ContainerHome>
                <Header>
                    <Image width={212} height={75} src="/icons/logo.svg" alt={"logo"} />
                    <ButtonContainer>
                        <ButtonHome>Узнать больше</ButtonHome>
                        <ButtonHome $primary>Регистрация</ButtonHome>
                    </ButtonContainer>
                </Header>

            </ContainerHome>
        </InitialSection>
    </>
  );
}
