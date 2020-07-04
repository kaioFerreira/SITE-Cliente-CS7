import styled from 'styled-components';

export const  Container = styled.div`
    div {
        margin-top: 80px;

        display: flex;
        justify-content: start;
        align-items: center;

        background: #004aad;
        height: 135px;

        h1 {
            margin-left: 50px;
            color: #FFF;
            font-size: 25px;
        }
    }

    @media(max-width: 800px) {
        div {
            margin-top: 0;
        }
    }
`;
