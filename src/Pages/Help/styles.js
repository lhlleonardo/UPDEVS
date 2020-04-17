import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 15px;

    h1 {
        font-size: 24px;
        margin-top: 25px;
        font-weight: bold;
    }

    h2 {
        font-weight: bold;
        color: #696969;
        padding: 5px;
        margin-top: 20px;
    }

    p {
        font-size: 16px;
        color: #696969;
        padding: 10px;
    }
`;