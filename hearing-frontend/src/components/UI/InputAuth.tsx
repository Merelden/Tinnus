import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {lightGrayColor, redColor, textColor} from "@/styles/colors";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {E164Number} from "libphonenumber-js";

interface IProps {
    image: string;
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
    error?: string;
}

const Field = styled.div`
    width: 412px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Wrapper = styled.div<{ $hasError?: boolean }>`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${lightGrayColor};
    width: 100%;
    padding: 5px 6px;
    border-radius: 6px;
    border: 1px solid ${props => props.$hasError ? redColor : 'transparent'};
    
    .PhoneInput{
        width: 100%;
    }
    .PhoneInputCountry{
        display: none;
    }
    
    img{
        user-drag: none;
        -webkit-user-drag: none;
    }
    input{
        font-family: var(--font-manrope), serif;
        font-size: 20px;
        color: ${textColor};
        margin-left: 5px;
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
    }
`

const ErrorText = styled.div`
    font-family: var(--font-manrope), serif;
    font-size: 14px;
    color: ${redColor};
    margin-left: 6px;
    margin-bottom: -4px;
`

const InputAuth = ({image, label, value, onChange, type, error}:IProps) => {

    const handlePhoneChange = (phoneValue: E164Number | undefined) => {
        onChange(phoneValue || '');
    };

    return (
        <Field>
            {error && <ErrorText>{error}</ErrorText>}
            <Wrapper $hasError={Boolean(error)}>
                <Image width={40} height={40} src={`/icons/auth/${image}.svg`} alt={image} />
                {type === 'tel' ?
                    <PhoneInput
                        placeholder={label}
                        value={value}
                        onChange={handlePhoneChange}
                        defaultCountry="RU"
                    />
                    :
                    <input
                        placeholder={label}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type={type ? type : 'text'}
                        min={0}
                    />
                }
            </Wrapper>
        </Field>
    );
};

export default InputAuth;