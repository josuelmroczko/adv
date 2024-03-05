import { StyledApresentacao, StyledTopo } from "./styleTopo";
import { data } from "../data";

export default function Topo() {
    return (
        <>
            <StyledTopo>
                <ul>
                    <li>sdaa</li>
                    <li>sdssds</li>
                    <li>sdd</li>
                    <li>sdds</li>
                </ul>
                <ul>
                    <li>sd </li>
                    <li>sdds </li>
                </ul>
            </StyledTopo>
            <StyledApresentacao backgroundImage={data.topoMenu.imagemFundo}>
                <h1 style={{ color: data.topoMenu.corTexto }}>{data.topoMenu.nome}</h1>
                <p style={{ color: data.topoMenu.corTexto }}>{data.topoMenu.texto}</p>
                <button style={{ backgroundColor: data.topoMenu.corBotaoFundo, color: data.topoMenu.corTexto }}>{data.topoMenu.botao}</button>
            </StyledApresentacao>
        </>
    );
}
