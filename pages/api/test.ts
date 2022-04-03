import { IUser } from '~/modules/auth/models/User.model';
import { withAuth } from '~/server/middlewares/withAuth';
import { TResponse, TRequest } from '~/server/types/apiTypes';

export default withAuth((
  req: TRequest<IUser>,
  res: TResponse,
) => {
  switch (req.method) {
    case 'GET': {
      try {
        return res.status(200).json({ success: true });
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
    default: {
      return res.status(405).json({ error: { message: 'Method not allowed' } });
    }
  }
});
