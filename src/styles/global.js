import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
        background: #fafafa;
    }

    #root {
        margin: 0 auto;
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }
`;
