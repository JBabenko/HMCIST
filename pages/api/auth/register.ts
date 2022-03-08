import bcrypt from 'bcrypt';
import { IUser, User, userValidationSchema } from '~/models/User.model';
import { withValidate } from '~/server/middlewares/withValidate';
import { TResponse, TRequest } from '~/server/types/apiTypes';

export default withValidate(userValidationSchema, async (
  req: TRequest<IUser>,
  res: TResponse,
) => {
  switch (req.method) {
    case 'POST': {
      try {
        const { password, email, ...rest } = req.body;
        const existedUser = await User.findOne({ email });
        if (existedUser) {
          res.status(400).json({ error: { message: 'Такой пользователь уже есть' } });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ ...rest, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    }
    default: {
      res.status(405).json({ error: { message: 'Method not allowed' } });
    }
  }
});
