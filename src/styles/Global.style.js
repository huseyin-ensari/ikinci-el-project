import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #F2F2F2;
        font-family: 'Nunito', sans-serif;
        font-size: 10px;
        /* min-height: 100vh; */
        a {
        text-decoration: none;
        }
    }
`;

export default GlobalStyle;
