import styled from "styled-components";

export const StyleFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`;

export const Footersection = styled.div`
    flex: 1;
    margin-right: 20px;
    padding: 20px;
    max-width: 300px; /* Define a largura máxima */
    .redesSociaisFooter{
        ul{
           li{
            display: flex;
           }
        }
    }
    @media screen and (max-width: 768px) {
        flex-basis:  100%; /* Define a base flexível para ocupar toda a largura em telas menores */
        margin-right: 0;
    }

    li {
        list-style: none;
    }
`;
