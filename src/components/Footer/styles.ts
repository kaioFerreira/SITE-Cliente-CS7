import styled from 'styled-components';

export const  Container = styled.footer`
   div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 15px;

        color: #FFF;
        padding: 10px;
        background: #151516;
        img {
            margin-left: 15px;

            width: 25px;

            & + img + img {
                margin-right: 67px;
            }
        }
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;

        background: #000000;
        color: #FFF;

        font-size: 13px;
        height: 40px;
    }

    @media(max-width: 800px) {
        div {
            img {
                & + img + img {
                    margin-right: 10px;
                }
            }
        }
    }
`;
