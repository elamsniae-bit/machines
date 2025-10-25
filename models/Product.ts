import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
  name: string;
  brand: string;
  category: string;
  price: number;
  rentalPrice?: number;
  model: string;
  condition: 'new' | 'used' | 'refurbished';
  year: number;
  image: string;
  images?: string[];
  description: string;
  weight: string;
  specifications?: Record<string, any>;
  available: boolean;
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true, index: true },
    price: { type: Number, required: true },
    rentalPrice: { type: Number },
    model: { type: String, required: true },
    condition: { 
      type: String, 
      enum: ['new', 'used', 'refurbished'],
      default: 'used'
    },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    images: [{ type: String }],
    description: { type: String, required: true },
    weight: { type: String },
    specifications: { type: Schema.Types.Mixed },
    available: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ name: 'text', description: 'text' });

export const Product = models.Product || model<IProduct>('Product', ProductSchema);
