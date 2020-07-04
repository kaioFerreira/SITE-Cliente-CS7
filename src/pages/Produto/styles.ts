import styled from 'styled-components';

export const Content = styled.div`

    div {

        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        div {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30%;
            min-width: 400px;
            h1 {
                margin-top: 20px;
                color: #004aad;
            }

            a {
                margin: 30px 0;
                color: #FFF;
                text-decoration: none;
                padding: 20px;
                background: #004aad;
                border-radius: 10px;
            }
        }

    }
`;
