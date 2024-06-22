import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/Users.js';
import authRoutes from './routes/auth.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
