import '../css/Formulario.css';
import { useState, useEffect, useRef } from 'react';

    /*

    form className formulario
    campos del formulario
    div className campo
    label Moneda className label
    select (input) className select
    options:
    - Selecciones
    - Dolar USD
    - Peso Mexicano MXN
    - Euro EUR
    - Libra Esterlina GBP

    div className campo
    label Criptomoneda className label
    select (input) className select
    option:
    - seleccione

    button Cotizar className btn-cotizar
    Funcionalidad: Al dar clic al btn mostrar un "p" que diga "Formulario creado"
    */

const Formulario = ({ visible, setVisible }) => {
    const [nombre, setNombre] = useState('');
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertaTimeout = useRef(null);


        useEffect(() => {
        return () => {
            if (alertaTimeout.current !== null) {
                window.clearTimeout(alertaTimeout.current);
            }
        };
    }, []);

    const alerta = ()=> {
        setMostrarAlerta(true);
        if (alertaTimeout.current !== null) {
            window.clearTimeout(alertaTimeout.current);
        }
        alertaTimeout.current = window.setTimeout(() => {
            setMostrarAlerta(false);
            alertaTimeout.current = null;
        }, 5000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje('Formulario creado');
    }
    return (
        <form className="formulario" onSubmit={handleSubmit}>
            
            <div className="campo">
                <label className="label">Moneda</label>
                <select 
                    className="select" 
                    value={moneda} 
                    onChange={e => setMoneda(e.target.value)}
                >
                    <option value="">- Seleccione -</option>
                    <option value="USD">Dolar USD</option>
                    <option value="MXN">Peso Mexicano MXN</option>
                    <option value="EUR">Euro EUR</option>
                    <option value="GBP">Libra Esterlina GBP</option>
                </select>
            </div>

            <div className="campo">
                <label className="label">Criptomoneda</label>
                <select 
                    className="select"
                    value={criptomoneda} 
                    onChange={e => setCriptomoneda(e.target.value)}
                >
                    <option value="">- Seleccione -</option>
                    <option value="BTC">Bitcoin BTC</option>
                    <option value="ETH">Ethereum ETH</option>
                    <option value="BNB">Binance Coin BNB</option>
                </select>
            </div>

            <button type="submit" className="btn-cotizar">
                Cotizar
            </button>

            {mensaje && (
                <p>{mensaje}</p>
            )}

        </form>
    );
}

export default Formulario;

