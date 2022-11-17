import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        height: 100vh;
        width: 100vw;
        background-color: rgb(246,246,249);
        overflow-x: hidden;
        @media (min-width: 768px) {
            &::-webkit-scrollbar{
            width: 5px;
            
            }
            &::-webkit-scrollbar-thumb{
                background-color: #76798E;
                border-radius: 20px;
            } 
        }
        
    }


    body, input, select, textarea, button{
        font: 400 1rem;
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    .apexcharts-toolbar {
        position: absolute;
        right: auto;
        left: 10px;
    }
    .apexcharts-menu{
       width: min-content;
        position: absolute;
        right: auto;
        left: 10px ;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .apexcharts-menu-item{
        width: 100%;
    }
        
    `
export default GlobalStyle;