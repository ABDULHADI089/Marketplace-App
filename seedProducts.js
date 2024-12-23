const mongoose = require('mongoose');
const Product = require('./models/product'); // Assuming your product model is in 'models/product.js'

const products = [
  { name: 'Product 1', description: 'Description 1', price: 10, imageUrl: 'https://i5.walmartimages.com/seo/Fzm-Women-Shoes-Summer-Lightweight-Mesh-Casual-Travel-Shoes-Sneakers-Non-Slip-Running-Shoes-Black-Us-7_56a5b1e2-71b6-4072-9d03-046585af4414.6c23c61a916de76faf0eb9a9ffe75d2d.jpeg' },
  { name: 'Product 2', description: 'Description 2', price: 20, imageUrl: 'https://img.drz.lazcdn.com/static/pk/p/9a283ac05f0cf6875c0e278efb444e2f.jpg_960x960q80.jpg_.webp' },
  // ... more products
];

mongoose.connect('mongodb://localhost:27017/marketplace', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

Product.insertMany(products)
  .then(() => console.log('Sample products added'))
  .catch(err => console.error('Error adding sample products:', err));

mongoose.connection.close(); // Close the connection after seeding