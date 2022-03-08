import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser, User, userValidationSchema } from '~/models/User.model';
import { withValidate } from '~/server/middlewares/withValidate';
import { TResponse, TRequest } from '~/server/types/apiTypes';

require('dotenv').config();

export default withValidate(userValidationSchema, async (
  req: TRequest<Pick<IUser, 'email' | 'password'>>,
  res: TResponse,
) => {
  switch (req.method) {
    case 'POST': {
      try {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: { message: 'Пользователь не найден' } });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
          return res.status(400).json({ error: { message: ' Неверный пароль' } });
        }

        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET || '',
          { expiresIn: '100d' },
        );

        res.status(200).json({ success: true, token });
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
