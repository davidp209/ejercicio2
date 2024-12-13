import React,{ useReducer, useState }  from 'react';


const Contador3 = (props) => {

    function reducer(estado, accion){

        switch (accion.type){

            case "IncrementarContador":
                 return{ contador: estado.contador + 1, 
                         clicks: [...estado.clicks, "i"] }
                

            case "DecrementarContador":
                return{ contador: estado.contador - 1, 
                        clicks: [...estado.clicks, "d"] }
            

            case "ResetearContador":
                return{ contador: +props.contador, 
                    clicks: [...estado.clicks, "r"] }
               

            default:
                return estado;
        }
    }
  

    function incrementarContador() {
        setEstado({type: "IncrementarContador"});
    }
    function decrementarContador() {
        setEstado({type: "DecrementarContador"});
    }
    function ResetearContador() {
        setEstado({type: "ResetearContador"});
    }
    function filtroD(click){
        return click === "d";
    }
    function filtroI(click){
        return click === "i";
    }
    function filtroR(click){
        return click === "r";
    }



   const [estado, setEstado] = useReducer(reducer, {contador: +props.contador, 
                                                    clicks: [] });


   
    return (
        <div>                   

            <button className='rojo' onClick={incrementarContador}>Incrementar Contador</button>
            <button className='amarillo' onClick={decrementarContador}>Decrementar Contador</button>
            <button className='verde' onClick={ResetearContador}>Reset Contador</button>

         
            <p>Numero de d:  {estado.clicks.filter(filtroD).length }</p>
            <p>Numero de i: {estado.clicks.filter(filtroI).length }</p>
            <p>Numero de r: {estado.clicks.filter(filtroR).length }</p>


        </div>
    )

}
export default Contador3;