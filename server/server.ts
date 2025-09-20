import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import contactRoutes from './routes/contact';
import quotesEmailRoutes from './routes/quotes-email';
import analyticsRoutes from './routes/analyticsRoutes';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/quotes', quotesEmailRoutes);
app.use('/api', analyticsRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ success: false, error: 'Server error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
