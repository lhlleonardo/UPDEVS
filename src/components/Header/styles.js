import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;

    max-height: 100px;
    background: #FFCC00;
    border-bottom: 1px solid #000;
    
        div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 70px;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            padding: 5px;

            > strong {
                color: #805142;
                font-size: 36px;
                font-weight: bold;
            }

            > span {
                font-size: 18px;
                color: #fff;
                font-weight: bold;
            }
        }
    }

    aside {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 15px;

        a {
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            color: #fff;
            padding: 7px;
            margin-right: 7px;

            transition: opacity 0.2s;
        
            &:hover {
            opacity: 0.8;
            border-bottom: 1px solid #eee;
            }
        }
    }
`;
