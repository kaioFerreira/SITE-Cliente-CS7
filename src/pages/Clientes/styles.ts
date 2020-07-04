import styled from 'styled-components';


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div {
        color: #004aad;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        width: 90%;
        p {
            margin-top: 50px;
            font-size: 20px;
        }
        h2 {
            margin-top: 60px;
            font-size: 30px;
            text-align: center;

        }
        h1 {
            font-size: 40px;
            text-align: center;

        }
    }

    section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    @media(max-width: 800px) {

        div {
            h2 {
                font-size: 130%;
            }
            h1 {
                margin-top: 10px;
                font-size: 200%;
            }
        }

    }
`;
