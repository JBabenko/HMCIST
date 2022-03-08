import {
  Schema, model, models, Model,
} from 'mongoose';
import { object, string } from 'yup';
import { COLLECTION_USERS } from '~/server/constants/collections';

export interface IUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
}, { collection: COLLECTION_USERS });

export const userValidationSchema = object({
  email: string().required().email(),
  password: string().required().min(6),
  firstName: string().max(32),
  lastName: string().max(32),
});

export const User: Model<IUser> = models?.User || model('User', schema);
