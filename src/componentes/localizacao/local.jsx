import { data } from "../data";
import { StyledLocal } from "./styledLocal";


export default function Local(){
    return(
        <StyledLocal>
        <iframe src={data.local.local}></iframe>
        </StyledLocal>
    )
}