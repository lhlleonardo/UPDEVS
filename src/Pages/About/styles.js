import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px 10px;

    h1 {
        padding: 5px;
        margin-top: 10px;
    }

    h2 {
        padding: 10px;
        margin-top: 10px;
    }

    p {
        font-size: 16px;
        padding: 10px;
        max-width: 900px;
        margin-top: 10px;
        color: #5E5E5E;
    }

    img {
        max-height: 400px;
        border-radius: 50%;
    }
    
    span {
        margin-bottom: 60px;
        font-weight: bold;
        padding: 10px;
        margin-top: 25px;
        font-size: 16px;
    }

`;
