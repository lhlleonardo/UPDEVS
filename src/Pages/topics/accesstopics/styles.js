import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-width: 250px;
        margin-top: 90px;
    }

    h1 {
        margin-top: 80px;
    }

    h2 {
        margin-top: 50px;
        margin-bottom: 100px;
    }
`;