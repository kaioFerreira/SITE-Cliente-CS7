import styled from 'styled-components';

export const Resume = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #77838d;

    p {
        width: 40%;
        color: #FFF;
        font-size: 20px;
    }

    img {
        margin-top: -100px;
    }

    @media(max-width: 800px) {
        p {
            width: 80%;
            margin: 30px 0;
        }
        img {
            display: none;
        }
    }
`;

export const Values = styled.div`
    color:  #004aad;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            margin: 60px 8%;
        }
        span {
            background: #004aad;
            height: 1px;
            width: 20%;
        }
    }

    section {

        width: 80%;

        h1 {
            font-size: 25px;
            margin-bottom: 10px;

            & + p + h1 {
                margin-top: 30px;
            }
        }

        ul {
            margin-bottom: 70px;
        }

        li {
            margin-left: 20px;
        }
    }

`;

export const Text = styled.p`

    margin: 40px 10% 80px 10%;
    text-align: center;

    color: #004aad;
`;
