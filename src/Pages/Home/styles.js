import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Web = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    background: #fff;
    padding: 70px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;

        padding: 40px;

        button {
            padding: 0 10px;
            font-size: 16px;
            background: #FFCC00;
            color: #fff;
            font-weight: 600;
            align-content: center;
            align-items: center;
            border: 0;
            border-radius: 5px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.4s;
            margin: 15px 0px 0px;

            &:hover {
                background: ${darken(0.08, '#FFCC00')};
            }
        }

        h1 {
            padding: 10px;
        }

        p {
            padding: 10px;
            margin: 0 50px 0 50px;
        }

    }

    img {
        max-height: 230px;
    }

`;

export const Ux = styled.div``;

export const Access = styled.div``;

export const Libs = styled.div``;