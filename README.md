# Modelo de Segmentación de Clientes con BIRCH

## Descripción
Se implementa un modelo de segmentación de clientes utilizando la técnica de clustering BIRCH (Balanced Iterative Reducing and Clustering using Hierarchies). Su propósito es agrupar clientes basándose en diversas características. El proyecto incluye análisis exploratorio, preprocesamiento de datos, modelización con BIRCH, evaluación del modelo y visualización de resultados. Además, se desarrolla una interfaz web para visualizar los clusters en 3D y clasificar nuevos registros.

## Interfaz de Usuario y Resultados
La interfaz web desarrollada proporciona una representación visual interactiva de los clusters identificados y permite la clasificación de nuevos registros mediante el modelo entrenado. A continuación, se muestran algunas capturas de pantalla destacadas de la interfaz:

#### Inicio
##### Visualización de Clusters en 3D
![image](https://github.com/iGotty/prueba-tecnica-esri-2024/assets/78111224/5ace2532-7133-45eb-8274-bb7e7004e2d0)


Esta captura muestra la visualización interactiva en 3D de los clusters generados por el modelo BIRCH, permitiendo una comprensión intuitiva de la segmentación de clientes.

##### Boxplots por Características de los Grupos
![image](https://github.com/iGotty/prueba-tecnica-esri-2024/assets/78111224/011a6f34-3010-454b-b42a-5d24c7952e51)



Los boxplots ofrecen una visión detallada de la distribución de las características dentro de cada grupo, facilitando la interpretación de los perfiles de clientes.

#### Clasificación de Nuevos Registros
![image](https://github.com/iGotty/prueba-tecnica-esri-2024/assets/78111224/c743cd34-245f-4103-8739-545d5c6967cb)


En esta sección, los usuarios pueden ingresar las características de un nuevo registro para clasificarlo y determinar a qué segmento de clientes pertenece.

## Video demostrativo
Para una visión más dinámica de la funcionalidad y características de la aplicación, mira el siguiente video demostrativo:

[![Ver Video](https://github.com/iGotty/prueba-tecnica-esri-2024/assets/78111224/b2077d52-8700-4759-95cf-33a121684785)](https://youtu.be/F-S8nPlPOh0)

Haz clic en la imagen para acceder al video y explorar la interactividad y las características de la aplicación.
## Estructura del Proyecto
El proyecto está organizado en tres carpetas principales:

- `notebooks/`: Contiene todos los Jupyter Notebooks que abarcan desde el análisis exploratorio hasta la visualización de los clusters.
    - `EDA&Preprocesamiento.ipynb`: Análisis exploratorio y preprocesamiento de datos.
    - `birch.ipynb`: Modelización y clustering con BIRCH.
    - `persistencia_modelos.ipynb`: Persistencia de los modelos entrenados.
    - `visualizaciones.ipynb`: Generación de visualizaciones 2D y 3D de los clusters.
- `back/`: Alberga el API desarrollado con FastAPI, que sirve los datos de clustering y maneja la clasificación de nuevos registros.
    - Para ejecutar el API: `uvicorn main:app --reload` (asegúrate de tener instalado `uvicorn`).
- `front/`: Contiene el proyecto de frontend desarrollado con React, que ofrece una interfaz interactiva para visualizar los clusters y clasificar nuevos registros.
    - Para iniciar el frontend: navega a la carpeta `front/` y ejecuta `npm start` (requiere tener instalado `npm`).

## Instrucciones de Ejecución

### Back-end (API)
1. Asegúrate de tener instalado `uvicorn`.
2. Navega a la carpeta `back/` desde la consola.
3. Ejecuta el siguiente comando para iniciar el API: uvicorn main:app --reload


### Front-end (Interfaz Web)
1. Asegúrate de tener Node.js y `npm` instalados en tu computador. Puedes descargar Node.js desde https://nodejs.org/, lo cual incluirá npm.
2. Navega a la carpeta `front/` desde otra consola.
3. Instala las dependencias (si es la primera vez) con: npm install
4. Inicia la interfaz web con: npm start


### Notebooks
Para explorar los notebooks, asegúrate de tener un entorno de Python con Jupyter instalado y las librerías necesarias como `pandas`, `numpy`, `matplotlib`, `plotly`, `scikit-learn`.

## Tecnologías Utilizadas
- Lenguajes de programación: Python, JavaScript
- Análisis y modelado de datos: Jupyter Notebook, pandas, numpy, scikit-learn, matplotlib, plotly
- API: FastAPI, uvicorn
- Frontend: React, npm

## Autor
- _Juan Esteban Cuellar Argotty_


