import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

    :root{
        --pink: #FFBDBF;
        --pink1: #DAAAAE;
        --pink2: #FE858A;
        --pink3: #F16EA5;
        --salmao: #FA7F72;
        --grey: #D1C3C1;
        --black: #55484C;
    }    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        overflow-x: hidden;
        height: 100vh;

        /* width */
        ::-webkit-scrollbar {
            width: 10px;
            background-image: linear-gradient(to bottom, pink, pink, pink, red)
        }

        /* Track */
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px blue;
        
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.5); 
            height: 5px;
            border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0,0,0,0.7); 
        }
  
    }

    dl, ol, ul {
        margin-bottom: 0;
        /* background-color: #EED9D6; */
    }
`
export default GlobalStyle;