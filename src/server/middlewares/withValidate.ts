import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import { TRequest, TResponse } from '~/server/types/apiTypes';

export const withValidate = (
  schema: OptionalObjectSchema<ObjectShape>,
  handler: (req: TRequest, res: TResponse) => Promise<void>,
) => async (req: TRequest, res: TResponse) => {
  try {
    await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
  return handler(req, res);
};
