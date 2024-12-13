import { useEffect, useState } from "react";

const Contador4 = (props) => {

const [contador, setContador] = useState(+props.contador);


function incrementarContador() {

    setContador(contador => contador + 1);

}

function  iniciarcontador(){

    setInterval(incrementarContador, 1000);

}

useEffect( iniciarcontador, [] );

return (
    <div>
        <p>Contador</p>
        <h1>{contador}</h1>

    </div>
)

}
export default Contador4;