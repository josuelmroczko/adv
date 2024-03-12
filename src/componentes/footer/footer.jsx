import { data } from "../data";
import { StyleFooter } from "./styledFooter";

export default function Footer(){
    return(
        <StyleFooter>
        <div>
            <h1>{data.fotter.titulo1}</h1>
            <p>{data.fotter.texto}</p>
            <div>
                <ul>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                </ul>
            </div>

            <div>
                <h2>{data.fotter.titulo2}</h2>
                <ul>
                    <li><a href=""> {data.fotter.semana}</a></li>
                    <li><a href="">{data.fotter.endereco}</a></li>
                    <li><a href="">{data.fotter.telefone}</a></li>
                    <li><a href="">{data.fotter.whatsapp}</a></li>
                    <li><a href="">{data.fotter.email}</a></li>
                </ul>
            </div>+

            <div>
                <h2>Areas de atuaçao</h2>
                <ul>
                    <li>{data.fotter.texto1}</li>
                    <li>{data.fotter.texto2}</li>
                    <li>{data.fotter.texto3}</li>
                    <li>{data.fotter.texto4}</li>
                    <li>{data.fotter.texto5}</li>
                    <li>{data.fotter.texto6}</li>
                    <li>{data.fotter.texto7}</li>
                    <li></li>
                </ul>
            </div>
        </div>
        </StyleFooter>
    )
}