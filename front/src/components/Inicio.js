import React from 'react';
import Plot from 'react-plotly.js';
import './Inicio.css';
import graficaImagen from './assets/output.png';
import puntos from './assets/puntos_clasificados.json'; 
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
  const navigate = useNavigate();
  const coloresGrupos = ['blue', 'orange', 'green'];

  // Agrupar los puntos por su grupo
  const datosPorGrupo = puntos.reduce((acc, punto) => {
    // Inicializar el grupo si aún no existe
    acc[punto.grupo] = acc[punto.grupo] || {x: [], y: [], z: [], grupo: punto.grupo};
    // Agregar las coordenadas del punto al grupo correspondiente
    acc[punto.grupo].x.push(punto.x);
    acc[punto.grupo].y.push(punto.y);
    acc[punto.grupo].z.push(punto.z);
    return acc;
  }, {});

  // Preparar los datos para el gráfico, creando una traza para cada grupo
  const datosGrafico = Object.values(datosPorGrupo).map(grupo => ({
    x: grupo.x,
    y: grupo.y,
    z: grupo.z,
    mode: 'markers',
    type: 'scatter3d',
    marker: {
      size: 4,
      color: coloresGrupos[grupo.grupo] // Asigna el color basado en el grupo
    },
    name: `Grupo ${grupo.grupo}`, // Nombre para la leyenda
  }));

  const redirectToPredecir = () => {
    navigate('/predecir');
  };



  
  return (
    <div className="inicio-container">
      
      <p>
        La técnica BIRCH (Balanced Iterative Reducing and Clustering using Hierarchies) 
        se ha elegido por su eficacia en el manejo de grandes conjuntos de datos y su capacidad 
        para generar una estructura de clustering jerárquica...
      </p>

      <div className="contenido-columnas">
        <div className="columna">

        <h1> Balanced Iterative Reducing and Clustering using Hierarchies </h1>
        <p>
        Se destaca en el clustering de grandes volúmenes de datos, ideal para aplicaciones con extensos conjuntos de información. A diferencia de métodos como K-Means, que presuponen clusters esféricos, BIRCH identifica clusters de formas irregulares, aumentando su flexibilidad. Su principal característica es el árbol CF (Clustering Feature Tree), que resume eficientemente los datos, permitiendo un procesamiento ágil y preciso. Esta técnica ajusta la precisión de la agrupación mediante parámetros configurables, equilibrando rendimiento y exactitud.        </p>
        <p>
        La preferencia por BIRCH sobre técnicas como Gaussian Mixture, DBSCAN y otras radica en su escalabilidad y eficiencia con grandes datasets. Mientras Gaussian Mixture y Spectral Clustering resultan computacionalmente intensivos para amplios volúmenes, BIRCH opera con alta eficacia. Su habilidad para incorporar nuevos datos de manera incremental lo hace idóneo para contextos dinámicos, contrastando con DBSCAN y Mean Shift que enfrentan retos ante variaciones de densidad o escalabilidad. Así, BIRCH emerge como una solución robusta y adaptable para el clustering en escenarios que demandan un manejo eficiente de grandes cantidades de datos.      </p>
          {/* Gráfico interactivo en 3D con Plotly */}
          <Plot
        data={datosGrafico}
        layout={{
          width: 700,
          height: 700,
          title: 'Gráfico 3D de Clustering',
          scene: { // Ajustes adicionales para los ejes
            xaxis: {title: 'X'},
            yaxis: {title: 'Y'},
            zaxis: {title: 'Z'}
          }
        }}
      />
        </div>

        <div className="columna">
          {/* Gráfica como imagen desde los assets */}
          <h2>Boxplots por característica según cluster</h2>
          <img src={graficaImagen} alt="Gráfica de Clustering" className="imagen-grafica" />
        </div>
      </div>

      {/* Botón Predecir */}
      <div className="botones-prada">
        <button className="btn2 btn-azul" onClick={redirectToPredecir}>Agrupar nuevo registro</button>
      </div>
    </div>
  );
}

export default Inicio;
