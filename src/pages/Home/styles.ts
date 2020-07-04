import styled from 'styled-components';
import {shade} from 'polished';

import headerImg from '../../assets/img-header.png';

export const Background = styled.div`
    flex: 1;
    background: url(${headerImg}) no-repeat center;
    background-size: cover;

    width: 100%;
    height: 100vh;

    @media(max-width: 800px) {
        height: 200px;
    }
`;

export const Medalha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100%;

    img {
        margin-top: -60px;
        margin-right: 100px;
    }

    @media(max-width: 800px) {
        img {
            margin-top: -48px;
            margin-right: 10px;
            width: 100px;
        }
    }
`;

export const Subtitulo = styled.div`
    color: #004aad;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media(max-width: 800px) {
        h1 {
            font-size: 120%;
        }

        h2 {
            font-size: 100%;
        }
    }
`;

export const Uniformes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
    color: #004aad;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            box-shadow: 8px 9px #a2a1a1;
        }
        h1 {
            margin-top: 20px;
            font-size: 23px;
            font-weight: 700;
        }
    }

    @media(max-width: 800px) {
        div {
            h1 {
                margin-bottom: 40px;
            }
        }
    }
`;

export const Orcamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        margin-top: 60px;
        margin-bottom: 60px;
        background: #004aad;
        color: #FFF;
        text-decoration: none;
        font-size: 16px;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#004aad')};
        }
    }

    div{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        p {
            color: #004aad;
            margin-top: 40px;
            margin-bottom: 40px;
            max-width: 60%;
            text-align: center;
            font-size: 25px;
        }
    }

    @media(max-width: 800px) {
        div {
            p {
                font-size: 140%;
            }
        }
    }

`;

export const UniformePersonalizado = styled.div`
    background: #c7d0d8;
    border-top: 5px solid #004aad;
    color: #004aad;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
            margin-top: 30px;
            font-size: 50px;
            font-weight: 700;
        }
        h5 {
            font-size: 20px;
            font-weight: 400;
        }
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 80%;

        p {
            font-size: 20px;

            & + p {
                margin-top: 40px;
            }
        }
    }

    @media(max-width: 800px) {
        div {
            h1 {
                font-size: 25px;
            }

            h5 {

            }
        }

        section {
            flex-direction: column;

            div {
                p {
                    margin-top: 20px;
                }
            }
        }
    }

`;

export const Depoimentos = styled.div`

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        color: #004aad;

        margin-top: 40px;
        h1 {
            margin: 0 8%;
        }
        span {
            background: #004aad;
            height: 1px;
            width: 20%;
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        div {
            margin: 40px;
            width: 20%;
            min-width: 200px;
            align-items: flex-start;
            display: flex;
            flex-direction: column;

            h5 {
                margin-top: 20px;
            }
        }
    }
`;
