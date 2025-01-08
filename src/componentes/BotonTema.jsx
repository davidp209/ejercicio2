import React from "react";
import TemaContext from "../contexts/TemaContext";

const BotonTema = (props) => {

const tema = React.useContext(TemaContext);
    
return (

        <button style={{background : tema.background, 
        color : tema.foreground}}>{props.texto}</button>
    
)   

};
export default BotonTema;
