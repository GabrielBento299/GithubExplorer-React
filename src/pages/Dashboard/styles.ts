import styled from "styled-components";
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
     line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: none;
        border-radius: 5px 0 0  5px;
        outline: none;
        border: 2px solid #fff;
        
        &::placeholder {
            color: #a8a8b3;
        }

        border: ${(props) => props.hasError ? '2px solid red' : ''}
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0;
        border: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        transition: background-color 0.2s;

        &:hover {
           background: ${shade(0.2, '#04d361')};

         
        }
    }
`;

export const InputErorr = styled.p`
    display: block;
    color: #c53030;
    margin-top: 7px;
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;
           
        & + a {
            margin-top: 16px;
        }

        &:hover {
           transform: translate(10px);
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div {
        margin-left: 16px;

        strong {
            font-size: 20px;
            color: #3d3d4d;
        }

        p {
            font-size: 18px;
            color: #3d3d4d;
            margin-top: 4px;
        }
    }

    svg {
        margin-left: auto;
        color: red
    }
  }
`;

 