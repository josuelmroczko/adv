import styled from 'styled-components';
import { data } from '../data';

export const StyledTopo = styled.div`
    display: flex;
    position: fixed;
    z-index: 4;
    width: 100%;
    justify-content: space-between; /* Coloca as duas uls em lados opostos */
    
    ul {
        list-style: none;
        display: flex; 
        flex-wrap: wrap;  
        align-items: center; /* Centraliza os itens verticalmente */
      
        li {
            margin-right: 20px; /* Reduzi a margem para se ajustar melhor em telas menores */
            padding-left: 50px;
            color: ${data.topoMenu.corTexto};  /* Cor do texto */
        }
    }

    @media screen and (max-width: 768px) {
        ul {
             align-items: flex-start; /* Alinha os itens à esquerda em telas menores */
         }
          
          }
`;

export const StyledApresentacao = styled.div`
    text-align: center;
 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${props => props.backgroundImage}) no-repeat center center;
    background-size: cover;
    position: relative; /* Adiciona posição relativa para o elemento pai */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* Cor preta com 40% de transparência */
        z-index: 1; /* Coloca a sobreposição sobre a imagem de fundo */
    }
  

    h1 {
        font-size: 4rem;
        margin-top: 0; /* Adiciona margem superior 0 para evitar o deslocamento */
        z-index: 2; /* Coloca o texto sobre a sobreposição */
        position: relative; /* Adiciona posição relativa para permitir z-index */
        left: 10px;
        font-family: "Cormorant", serif;
         font-weight: bolder;
         color: ${data.topoMenu.corTexto}; /* Cor do texto */
         transition: color 0.5s ease; 
  
       &:hover{
        color: ${data.topoMenu.corBotaoHover}; /* Cor ao passar o mouse */
       }
    }

    p {
        font-size: 16px;
        color: ${data.topoMenu.corTexto}; /* Cor do texto */
        margin-bottom: 20px;
        z-index: 2; /* Coloca o texto sobre a sobreposição */
        position: relative; /* Adiciona posição relativa para permitir z-index */
    }

    button {
        padding: 10px 20px;
        background-color: ${data.topoMenu.corBotaoFundo}; /* Cor de fundo do botão */
        color: ${data.topoMenu.corTexto}; /* Cor do texto */
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        z-index: 2; /* Coloca o botão sobre a sobreposição */
        position: relative; /* Adiciona posição relativa para permitir z-index */

        &:hover {
            background-color: ${data.topoMenu.corBotaoHover}; /* Cor de fundo do botão ao passar o mouse */
        }
    }
`;
