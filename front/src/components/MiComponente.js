import React, { useState } from 'react';
import axios from 'axios';
import './MiComponente.css'; // Asegúrate de definir estilos adecuados en este archivo CSS

// Importar imágenes
import grupo1Img from './assets/numero-0.png';
import grupo2Img from './assets/numero-1.png';
import grupo3Img from './assets/numero-2.png';

function MiComponente() {
    const [formData, setFormData] = useState({
        Edad: '',
        IngresosAnuales: '',
        GastoMensual: '',
        PuntuacionDeCredito: '',
        ComportamientoEnLinea: '',
        ComprasEnElUltimoAno: ''
    });
    const [grupo, setGrupo] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const enviarDatos = async () => {
        const apiUrl = "http://127.0.0.1:8000/predict/"; 

        try {
            const response = await axios.post(apiUrl, formData);
            setGrupo(response.data.group);
        } catch (error) {
            console.error("Hubo un error al enviar los datos a la API:", error);
            setGrupo(null);
        }
    };

    const getOpacity = (imageGrupo) => {
        // Suma 1 al grupo para que coincida con el número de la imagen (los grupos van de 0 a 2, pero queremos imágenes 1 a 3)
        return grupo === imageGrupo - 1 ? 1 : 0.3;
    };
    

    return (
        <div className='contenedor-super-externo'>      
            <div className="contenedor-externo">
                <div className="contenido">
                    <div className="formulario">
                        {Object.keys(formData).map((key) => (
                            <div key={key} className="campo-formulario">
                                <label>{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
                                <input
                                    type="number"
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        
                        <button onClick={enviarDatos} className="btn-enviar">Enviar</button>
                    </div>
                    <div className="contenedor-imagenes">
                        <img src={grupo1Img} alt="Grupo 1" style={{ opacity: getOpacity(1) }} />
                        <img src={grupo2Img} alt="Grupo 2" style={{ opacity: getOpacity(2) }} />
                        <img src={grupo3Img} alt="Grupo 3" style={{ opacity: getOpacity(3) }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiComponente;
