import { THandler, TRequest, TResponse } from '~/server/types/apiTypes';
import { checkIsAuth } from '~/server/helpers/checkIsAuth';

export const withAuth = (handler: THandler) => async (req: TRequest, res: TResponse) => {
  const isAuth = await checkIsAuth(req);

  if (!isAuth) {
    return res.status(401).json({
      success: false,
      message: 'Please log in to get access',
    });
  }

  return handler(req, res);
};
