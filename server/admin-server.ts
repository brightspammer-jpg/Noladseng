import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import adminTestimonials from './routes/admin-testimonials.ts';
import adminServices from './routes/admin-services.ts';
import adminProducts from './routes/admin-products.ts';
import adminQuotes from './routes/admin-quotes.ts';
import adminBlog from './routes/admin-blog.ts';
import adminContacts from './routes/admin-contacts.ts';
import contactEmail from './routes/contact.ts';
import quotesEmail from './routes/quotes-email.ts';


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: process.env.UPLOAD_MAX_SIZE || '2mb' }));

// Mount admin routes
app.use('/api/admin/testimonials', adminTestimonials);
app.use('/api/admin/services', adminServices);
app.use('/api/admin/products', adminProducts);
app.use('/api/admin/quotes', adminQuotes);
app.use('/api/admin/blog', adminBlog);
app.use('/api/admin/contacts', adminContacts);
// Public email notify endpoints
app.use('/api/contact', contactEmail);
app.use('/api/quotes', quotesEmail);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Server error',
    details: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Admin API server running on port ${PORT}`);
});