import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    :root{
        --pink1: #DAAAAE;
        --pink2: #FE858A;
        --pink3: #F16EA5;
        --salmao: #FA7F72;
        --grey: #D1C3C1;
        --black: #55484C;
    }    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #EED9D6;
    }
`
export default GlobalStyle;