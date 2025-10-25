import { connectDB } from '../lib/mongodb';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import productsData from '../lib/data.json';

async function seed() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    const categories = productsData.categories.map(cat => ({
      name: cat.name.trim(),
      slug: cat.name.trim().toLowerCase().replace(/\s+/g, '-'),
    }));

    const insertedCategories = await Category.insertMany(categories);
    console.log(`Inserted ${insertedCategories.length} categories`);

    const products = productsData.products.map(p => ({
      name: p.name,
      brand: p.brand,
      category: p.categorie.trim(),
      price: parseFloat(p.price.replace(/[$,]/g, '')) || 50000,
      rentalPrice: parseFloat(p.price.replace(/[$,]/g, '')) * 0.1 || 5000,
      model: p.model,
      condition: p.condition === 'new' ? 'new' : p.condition === 'used/New' ? 'refurbished' : 'used',
      year: parseInt(p.year) || 2020,
      image: p.image,
      description: p.description,
      weight: p.weight,
      available: true,
      featured: Math.random() > 0.7,
    }));

    const insertedProducts = await Product.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products`);

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = await User.create({
      name: 'Admin',
      email: 'admin@heavyquips.com',
      password: hashedPassword,
      role: 'admin',
    });
    console.log(`Created admin user: ${adminUser.email}`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
