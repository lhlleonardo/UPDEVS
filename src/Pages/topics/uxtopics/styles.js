import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 

        border-bottom: 1px solid #eee;
        max-width: 900px;

        a {
            text-decoration: none;
        }

        strong {
            font-size: 18px;
            font-weight: bold;
            color: #000;
            padding: 5px;

            margin-top: 25px;
        }

        span {
            font-size: 18px;
            font-weight: bold;
            color: #757373;
            padding: 5px;

            margin-top: 5px;
        }

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
            transition: background 0.5s;
            margin: 15px 0px 0px;
            height: 40px;
            text-decoration: none;

            margin-bottom: 20px;

            &:hover {
                background: ${darken(0.06, '#FFCC00')};
            }

        }

        button:last-child {
        margin-bottom: 50px;
    }
    }
`