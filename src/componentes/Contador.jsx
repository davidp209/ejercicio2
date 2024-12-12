import React,{ useState }  from 'react';


const Contador = (props) => {

   // let valorContador = props.contador;
    const [valorContador, setContador] = useState(+props.contador);
    
    const [clicks, setClicks] = useState([]); //array de clicks

    let parImar = valorContador %2 === 0 ? 'par' : 'impar';

    const filtroR = clicks.filter((click) => click === "r").length;
    const filtroI = clicks.filter((click) => click === "i").length;


   

    function incrementarContador() {

            console.log('pulsa boton');
            //valorContador++;
            setContador(valorContador + 1);//asi es como se incrementa el contador, no puede ser valorContador++
            //el estado no se puede modificar directamente, se debe usar el metodo setContador

        setClicks([...clicks, "i"]);
        //setClicks(clicks.concat("i")) //otra forma de hacerlo

    }
    function decrementarContador() {

        setContador(+props.contador);
        setClicks([...clicks, "r"]);


    }


    return (
        <div>                   
            <h1>{valorContador}</h1>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={decrementarContador}>Reset Contador</button>
            <p>{clicks}</p>
            <p>{parImar}</p>
            <p>Numero de r: {filtroR}</p>
            <p>Numero de i: {filtroI}</p>

        </div>
    )

}
export default Contador;