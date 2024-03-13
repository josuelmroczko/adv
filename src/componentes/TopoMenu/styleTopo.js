import styled from 'styled-components';
import { data } from '../data';

export const StyledTopo = styled.div`
    display: flex;
    position: fixed;
    z-index: 4;
    width: 100%;
    justify-content: space-between;
    background-color: ${data.topoMenu.corFundoOpcoesTopo};
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease; /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    ul {
        list-style: none;
        display: flex; 
        flex-wrap: wrap;  
        align-items: center;
      
        li {
            margin-right:  10px;
            padding-left: 10px;
            color: ${data.topoMenu.corTexto};

            img{
                max-width: 15px;
                width: 100%;
            }
        }
    }
   

    @media screen and (max-width: 768px) {
        ul {
            align-items: flex-start;
        }
        a{
            font-size: 10px;
        }
       
      
    }

    &.visible {
        opacity: 1; /* Torna o topo visível quando a classe .visible é aplicada */
    }
 
   
`;

export const StyledApresentacao = styled.div`
    text-align: center;
    display: flex;
   padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${props => props.backgroundImage}) no-repeat center center;
    background-size: cover;
    position: relative;
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease;  /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    h1 {
        font-size: 4rem;
        margin-top: 0;
        z-index: 2;
        position: relative;
        left: 10px;
        font-family: "Cormorant", serif;
        font-weight: bolder;
        color: ${data.topoMenu.corTexto};
        transition: color 1s ease;
    }

    p {
        font-size: 16px;
        color: ${data.topoMenu.corTexto};
        margin-bottom: 20px;
        z-index: 2;
        position: relative;
    }

    button {
        padding: 10px 20px;
        background-color: ${data.topoMenu.corBotaoFundo};
        color: ${data.topoMenu.corTexto};
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        z-index: 2;
        position: relative;

        &:hover {
            background-color: ${data.topoMenu.corBotaoHover};
        }
    }

    &.visible {
        opacity: 1;
    }
`;
