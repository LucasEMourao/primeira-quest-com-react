import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0%;
        box-sizing: border-box;
        border: none;       
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;
