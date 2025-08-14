import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {lightGrayColor, textColor} from "@/styles/colors";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {E164Number} from "libphonenumber-js";

interface IProps {
    image: string;
    label: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${lightGrayColor};
    width: 412px;
    padding: 5px 6px;
    border-radius: 6px;
    
    .PhoneInput{
        width: 100%;
    }
    .PhoneInputCountry{
        display: none;
    }
    
    input{
        font-family: var(--font-manrope), serif;
        font-size: 20px;
        color: ${textColor};
        margin-left: 5px;
        width: 100%;
    }
`

const InputAuth = ({image, label, value, onChange, type}:IProps) => {

    const handlePhoneChange = (phoneValue: E164Number | undefined) => {
        onChange(phoneValue || '');
    };

    return (
        <Wrapper>
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
                    required
                />
            }
        </Wrapper>
    );
};

export default InputAuth;