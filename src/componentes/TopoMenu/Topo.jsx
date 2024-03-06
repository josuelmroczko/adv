import React, { useState, useEffect } from 'react';
import { StyledApresentacao, StyledTopo } from "./styleTopo";
import { data } from "../data";

export default function Topo() {
    const [topoVisible, setTopoVisible] = useState(false);
    const [apresentacaoVisible, setApresentacaoVisible] = useState(false);

    useEffect(() => {
        // Adiciona classe para tornar o topo visível com um pequeno atraso
        const topoTimer = setTimeout(() => {
            setTopoVisible(true);
        }, 200); // Ajuste o tempo conforme necessário

        // Adiciona classe para tornar a apresentação visível com um atraso maior
        const apresentacaoTimer = setTimeout(() => {
            setApresentacaoVisible(true);
        }, 200); // Ajuste o tempo conforme necessário

        return () => {
            clearTimeout(topoTimer);
            clearTimeout(apresentacaoTimer);
        };
    }, []);

    return (
        <>
            <StyledTopo className={topoVisible ? 'visible' : ''}>
                <ul>
                    <li><img src={data.topoMenu.imagemInsta} alt="logoinstagran" /></li>
                    <li><img src={data.topoMenu.imagemLinkedin} alt="logoLinkedin" /></li>
                    <li><img src={data.topoMenu.imagemYoutube} alt="logoYoutube" /></li>
                    <li><img src={data.topoMenu.imagemfacebook} alt="logoFacebook" /></li>
                </ul>
            
                <ul>
                    <li><a href={`mailto:${data.topoMenu.email}?subject=Assunto do Email&body=Corpo do Email`}>Email</a></li>
                    <li><a href={`tel:${data.topoMenu.telefone}`}>Ligar: {data.topoMenu.telefone}</a></li>
                </ul>
            </StyledTopo>
            <StyledApresentacao className={apresentacaoVisible ? 'visible' : ''} backgroundImage={data.topoMenu.imagemFundo}>
                <h1>{data.topoMenu.nome}</h1>
                <p>{data.topoMenu.texto}</p>
                <button>{data.topoMenu.botao}</button>
            </StyledApresentacao>
        </>
    );
}
