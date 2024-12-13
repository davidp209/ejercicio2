import React from 'react';
import {useState} from 'react';

const Ejercicio3 = (props) => {

    const [rojo, setRojo] = useState(0);
    const [amarillo, setAmarillo] = useState(0);
    const [verde, setVerde] = useState(0);

    const total = rojo + amarillo + verde;

    const porcentajeRojo = (rojo / total) * 100;
    const porcentajeAmarillo = (amarillo / total) * 100;
    const porcentajeVerde = (verde / total) * 100;

    function incrementarRojo() {
        setRojo(rojo + 1);
    }
    function incrementarAmarillo() {    
        setAmarillo(amarillo + 1);
    }
    function incrementarVerde() {
        setVerde(verde + 1);
    }



    return (
        <div>
          <button className='rojo' onClick={incrementarRojo}>Rojo</button>
          <button className='amarillo' onClick={incrementarAmarillo}>Amarillo</button>
          <button className='verde' onClick={incrementarVerde}>Verde</button>

            <p>Pulsaciones rojo: {rojo}</p>
            <p>Pulsaciones amarillo: {amarillo}</p>
            <p>Pulsaciones verde: {verde}</p>

            <p>Total: {total} </p>

            <p>Porcentaje rojo: {isNaN(porcentajeRojo) ? 0 : Math.trunc(porcentajeRojo)}</p>       
            <p>Porcentaje rojo: {isNaN(porcentajeAmarillo) ? 0 : Math.trunc(porcentajeAmarillo)}</p>       
            <p>Porcentaje rojo: {isNaN(porcentajeVerde) ? 0 : Math.trunc(porcentajeVerde)}</p>       

        </div>
    );
};

export default Ejercicio3;