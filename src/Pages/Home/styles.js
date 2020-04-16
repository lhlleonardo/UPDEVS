import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Web = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    width: 100%;
    
    padding: 50px;

    img {
        max-height: 240px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-decoration: none;

        a {
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

            &:hover {
                background: ${darken(0.06, '#FFCC00')};
            }

        }

        h1 {
            font-size: 36px;
            font-weight: bold;
        }

        p {
            padding: 10px;
            margin: 0 50px 0 50px;
            font-size: 16px;
        }

    }
`;

export const Ux = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFCC00;
    width: 100%;
    
    padding: 50px;

    img {
        max-height: 240px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-decoration: none;

        a {
            text-decoration: none;
        }

        button {
            padding: 0 10px;
            font-size: 16px;
            background: #fff;
            color: #000;
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

            &:hover {
                background: ${darken(0.06, '#fff')};
            }

        }

        h1 {
            font-size: 36px;
            font-weight: bold;
        }

        p {
            padding: 10px;
            margin: 0 50px 0 50px;
            font-size: 16px;
        }

    }
`;

export const Access = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    width: 100%;
    
    padding: 50px;

    img {
        max-height: 240px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-decoration: none;

        a {
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

            &:hover {
                background: ${darken(0.06, '#FFCC00')};
            }

        }

        h1 {
            font-size: 36px;
            font-weight: bold;
        }

        p {
            padding: 10px;
            margin: 0 50px 0 50px;
            font-size: 16px;
        }

    }
`;

export const Libs = styled.div`    display: flex;
justify-content: center;
align-items: center;

background: #FFCC00;
width: 100%;

padding: 50px;

img {
    max-height: 240px;
}

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-decoration: none;

    a {
        text-decoration: none;
    }

    button {
        padding: 0 10px;
        font-size: 16px;
        background: #fff;
        color: #000;
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

        &:hover {
            background: ${darken(0.06, '#fff')};
        }

    }

    h1 {
        font-size: 36px;
        font-weight: bold;
    }

    p {
        padding: 10px;
        margin: 0 50px 0 50px;
        font-size: 16px;
    }

}`;