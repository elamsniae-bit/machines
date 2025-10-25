import mongoose, { Schema, model, models, Types } from 'mongoose';

export interface IOrderItem {
  product: Types.ObjectId;
  productName: string;
  price: number;
  type: 'buy' | 'rent';
  rentalPeriod?: {
    startDate: Date;
    endDate: Date;
    days: number;
  };
}

export interface IOrder {
  user: Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod?: 'bank_transfer' | 'crypto' | 'other';
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['buy', 'rent'], required: true },
  rentalPeriod: {
    startDate: Date,
    endDate: Date,
    days: Number,
  },
});

const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'
    },
    paymentMethod: { 
      type: String, 
      enum: ['bank_transfer', 'crypto', 'other']
    },
    paymentStatus: { 
      type: String, 
      enum: ['pending', 'paid', 'failed'],
      default: 'pending'
    },
    shippingAddress: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Order = models.Order || model<IOrder>('Order', OrderSchema);
