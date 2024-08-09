import express from 'express';
import mongoose from 'mongoose';
import accountRoutes from './routes/accountRoutes';
import candidateRoutes from './routes/candidateRoutes';
import questionRoutes from './routes/questionRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/accounts', accountRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/questions', questionRoutes);

// Connect to MongoDB (Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual connection string)
mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));