import express from "express";
import cors from "cors";

const app = express();

// Habilitar CORS para tu front
app.use(cors({
 origin: [
    "https://mi-pwafront.vercel.app",
    "https://mi-pwafront-ivan-soto-4kvr.vercel.app"
  ]
}));

app.use(express.json());

// Datos de ejemplo
const actividades = [
  { id: 1, nombre: "Aprender inglés", categoria: "Idiomas", nivel: "Intermedio" },
  { id: 2, nombre: "Tocar guitarra", categoria: "Música", nivel: "Básico" },
  { id: 3, nombre: "Programar en Angular", categoria: "Tecnología", nivel: "Avanzado" }
];

// Ruta raíz para test
app.get("/", (req, res) => res.send("🌐 API de Actividades funcionando correctamente"));

// Ruta de la API
app.get("/api/actividades", (req, res) => res.json(actividades));

// Puerto dinámico para Vercel o por defecto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ API corriendo en http://localhost:${PORT}`));
