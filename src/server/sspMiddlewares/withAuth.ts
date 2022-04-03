import { GetServerSideProps } from 'next';
import { checkIsAuth } from '~/server/helpers/checkIsAuth';

export const withAuth: GetServerSideProps = async (ctx) => {
  const isAuth = await checkIsAuth(ctx.req);
  if (!isAuth) {
    return {
      redirect: {
        destination: '/signIn',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
