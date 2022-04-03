import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { User } from '~/modules/auth/models/User.model';

export const checkIsAuth = async (req: IncomingMessage & {
  cookies: NextApiRequestCookies;
}) => {
  const token = req.cookies?.token;

  if (!token) {
    return false;
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET || '') as { userId: string };
    if (!decodedToken) {
      return false;
    }
    const currentUser = await User.findById(decodedToken.userId);
    if (!currentUser) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};
