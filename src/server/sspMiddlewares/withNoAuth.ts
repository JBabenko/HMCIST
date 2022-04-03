import { GetServerSideProps } from 'next';
import { checkIsAuth } from '~/server/helpers/checkIsAuth';

export const withNoAuth: GetServerSideProps = async (ctx) => {
  const isAuth = await checkIsAuth(ctx.req);
  if (isAuth) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
