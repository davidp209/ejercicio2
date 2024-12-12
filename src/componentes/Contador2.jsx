import React from 'react';
import {useState} from 'react';

const Contador2 = (props) => {

const [contador, setContador] = useState({left : 0,
                                         right : 0});

function incrementarIzquierda(){
    setContador({...contador, left:contador.left + 1});
}
function incrementarDerecha(){
    setContador({...contador, right:contador.right + 1});
}   


return( 
    <>
    {contador.left}
    <button onClick={incrementarIzquierda}>left</button>
    <button onClick={incrementarDerecha}>right</button>
    {contador.right}

    </>

)

}
export default Contador2;