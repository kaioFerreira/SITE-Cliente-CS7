import styled from 'styled-components';
import {shade} from 'polished';

export const  Container = styled.div`
    background: #c7d0d8;
    color: #004aad;

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 134px;

    p {
        width: 60%;
    }

    a {
        background: #004aad;
        color: #FFF;

        font-size: 16px;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        transition: background-color 0.2s;
        text-decoration: none;

        &:hover {
            background: ${shade(0.2, '#004aad')};
        }
    }
    @media(max-width: 800px) {
        flex-direction: column;
        height: auto;

        p {
            margin-top: 50px;
            width: 80%;
        }

        a {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }

`;
