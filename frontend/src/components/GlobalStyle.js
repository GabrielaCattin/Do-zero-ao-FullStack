import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        color: yellow;
        border: 3px solid #416CD5;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h2{
        font-weigth: lighter;
        font-size: 3rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weigth: bold;
        font-size: 1.2rem;
        color: lightgrey;
    }

    a{
        font-size: 1.1.rem;
    }

    span{
        font-weigth: lighter;
        color: #416CD5;
    }
    
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-heigth: 150%;
    }
`;

export default GlobalStyle;