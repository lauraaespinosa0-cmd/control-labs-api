import 'dotenv/config';
import app from './src/app.ts';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ControlLabs corriendo en http://localhost:${5000}`);
});