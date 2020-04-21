import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    iframe {
        margin-top: 45px;
    }

    a {
        text-decoration: none;
        color: #95389e;
        font-weight: bolder;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFD868;
        width: 100%;
        
        padding: 35px;

        h1 {
            margin-bottom: 5px;
            padding: 10px;
        }

        h2 {
            color: #191920;
            margin-bottom: 5px;
            padding: 10px;
        }

        h3 {
            color: #858383;
            margin-bottom: 5px;
            padding: 10px;
        }
    }

    strong {
        font-weight: bold;
        font-size: 18px;
        color: #000;
        padding: 10px;
        margin-bottom: 5px;
    }

    span {
        font-size: 16px;
        color: #000;
        padding: 10px;
        margin-bottom: 10px;

        max-width: 900px;
        line-height: 24px;
    }

    span:last-child {
        margin-bottom: 50px;
    }
`;