import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
        font-size: 14px;
        color: #000;
        
        padding: 10px;
        margin-bottom: 15px;
        margin-top: 15px;

        border-bottom: 1px solid #eee;
        width: 720px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            padding: 10px 40px;

            h1 {
                font-size: 18px;
                max-width: 200px;
                padding: 5px;
            }

            img {
               max-width: 100px;
            }
        }


        a:-webkit-any-link {
            color: #fff;
            text-decoration: none;   
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

            a {
                text-decoration: none;
            }

            &:hover {
                background: ${darken(0.06, '#FFCC00')};
            }
        }
    }

`;