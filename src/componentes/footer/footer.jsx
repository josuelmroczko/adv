import { data } from "../data";
import { Footersection, StyleFooter } from "./styledFooter";

export default function Footer(){
    return(
       <> <StyleFooter>
            <Footersection>
                <h1>{data.fotter.titulo1}</h1>
                <p>{data.fotter.texto}</p>
                <div className="redesSociaisFooter">
                    <ul>
                        <li><img src={data.topoMenu.imagemInsta} alt="img" /></li>
                        <li><img src={data.topoMenu.imagemLinkedin} alt="img" /></li>
                        <li><img src={data.topoMenu.imagemYoutube} alt="img" /></li>
                        <li><img src={data.topoMenu.imagemfacebook} alt="img" /></li>
                    </ul>
                </div>
            </Footersection>

            <Footersection>
                <h2>{data.fotter.titulo2}</h2>
                <ul>
                    <li><a href="#"> {data.fotter.semana}</a></li>
                    <li><a href="#">{data.fotter.endereco}</a></li>
                    <li><a href="#">{data.fotter.telefone}</a></li>
                    <li><a href="#">{data.fotter.whatsapp}</a></li>
                    <li><a href="#">{data.fotter.email}</a></li>
                </ul>
            </Footersection>

            <Footersection>
                <h2>Areas de atuação</h2>
                <ul>
                    <li>{data.fotter.texto1}</li>
                    <li>{data.fotter.texto2}</li>
                    <li>{data.fotter.texto3}</li>
                    <li>{data.fotter.texto4}</li>
                    <li>{data.fotter.texto5}</li>
                    <li>{data.fotter.texto6}</li>
                    <li>{data.fotter.texto7}</li>
                </ul>
            </Footersection>
        </StyleFooter>
        <span>{data.fotter.Copyrigh}</span>



        </>
    )
}
