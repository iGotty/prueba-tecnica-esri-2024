from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
from sklearn.preprocessing import MinMaxScaler
from sklearn.decomposition import PCA
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Lista de orígenes permitidos, ajusta según sea necesario
origins = [
    "http://localhost:3000",  # Asumiendo que React corre en el puerto 3000 por defecto
    "http://127.0.0.1:3000",
]

# Configurar CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permite a todos los orígenes en la lista
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos
    allow_headers=["*"],  # Permite todos los headers
)


# Cargar el modelo y los transformadores
birch_model = joblib.load('../back/birch_model.pkl')  
scaler = joblib.load('../back/scaler.pkl')  
pca = joblib.load('../back/pca.pkl')  

class Item(BaseModel):
    Edad: float
    IngresosAnuales: float
    GastoMensual: float
    PuntuacionDeCredito: float
    ComportamientoEnLinea: float
    ComprasEnElUltimoAno: float

@app.post("/predict/")
def predict(item: Item):
    try:
        # Convertir los datos de entrada a numpy array
        data = np.array([[item.Edad, item.IngresosAnuales, item.GastoMensual, item.PuntuacionDeCredito, item.ComportamientoEnLinea, item.ComprasEnElUltimoAno]])
        
        # Escalar y aplicar PCA a los datos de entrada
        data_scaled = scaler.transform(data)
        data_reduced = pca.transform(data_scaled)
        
        # Predecir el grupo
        group = birch_model.predict(data_reduced)
        
        return {"group": int(group[0])}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

