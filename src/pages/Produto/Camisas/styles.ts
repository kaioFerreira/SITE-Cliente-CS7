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
    text-align: center;

    font-size: 25px;
    color: #004aad;

    div {
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
    }

    @media(max-width: 800px) {

        h2 {
            font-size: 100%;
        }
        h1 {
            font-size: 150%;
        }

    }
`;
