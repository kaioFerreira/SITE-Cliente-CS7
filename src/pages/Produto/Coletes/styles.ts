import styled from 'styled-components';

export const Content = styled.div`

    background: #77838d;

    display: flex;
    padding: 20px;

    margin-bottom: 40px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-top: 40px;
        margin-left: 40px;
        color: #FFF;
        font-size: 20px;
    }

    img {
        margin-top: -100px;
    }

    a {
        text-align: center;

        margin-top: 80px;
        background: #004aad;
        color: #FFF;
        width: 250px;
        padding: 20px;

        border-radius: 10px;

        text-decoration: none;
    }
    @media(max-width: 800px) {
        flex-direction: column-reverse;

        img {
            width: 350px;
        }
    }
`;

export const Text = styled.h1`
    margin: 40px 15% 80px 15%;
    text-align: center;

    font-size: 25px;
    color: #004aad;
`;

export const Bloco = styled.div`
    margin: 40px 15% 80px 15%;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;
