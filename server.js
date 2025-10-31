import express from "express";
import cors from "cors";

const app = express();

// Permitir específicamente tu dominio del front
app.use(cors({
  origin: "https://mi-pwafront-ivan-soto.vercel.app"
}));

app.use(express.json());

const actividades = [
  { id: 1, nombre: "Aprender inglés", categoria: "Idiomas", nivel: "Intermedio" },
  { id: 2, nombre: "Tocar guitarra", categoria: "Música", nivel: "Básico" },
  { id: 3, nombre: "Programar en Angular", categoria: "Tecnología", nivel: "Avanzado" }
];

app.get("/", (req, res) => res.send("🌐 API funcionando correctamente"));
app.get("/api/actividades", (req, res) => res.json(actividades));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ API corriendo en puerto ${PORT}`));
