import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 80px;

    h1 {
        padding: 5px;
    }

    input {
        margin: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        height: 135px;
        width: 700px;
        padding: 0 10px;
        font-size: 16px;
        background: #fff;
        color: #191920;
        font-weight: normal;
    }

    button {
            padding: 0 30px;
            font-size: 16px;
            background: #FFCC00;
            color: #fff;
            font-weight: 600;
            align-content: center;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.5s;
            margin: 15px 0px 0px;
            height: 45px;
            width: 120px;
            text-decoration: none;

            &:hover {
                background: ${darken(0.06, '#FFCC00')};
                border: 1px solid #c0c0c0;
            }

        }
`;