import { ReactNode, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import {
  refreshTokens,
  selectAccessTokenExpireAt,
  selectRefreshToken,
  selectRefreshTokenExpireAt,
  signOut,
} from '../store/core/core.slice';

interface AppContainerProps {
  children?: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  const dispatch = useAppDispatch();

  const refreshToken = useAppSelector(selectRefreshToken);
  const accessTokenExpireAt = useAppSelector(selectAccessTokenExpireAt);
  const refreshTokenExpireAt = useAppSelector(selectRefreshTokenExpireAt);

  useEffect(() => {
    if (refreshTokenExpireAt) {
      const expirationDate = new Date(refreshTokenExpireAt);

      const timeToLive = expirationDate.getTime() - Date.now();

      const timerId = setTimeout(
        () => {
          dispatch(signOut());
        },
        timeToLive > 0 ? timeToLive : 0
      );

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [dispatch, refreshTokenExpireAt]);

  useEffect(() => {
    if (accessTokenExpireAt) {
      const expirationDate = new Date(accessTokenExpireAt);

      const timeToLive = expirationDate.getTime() - Date.now();

      const timerId = setTimeout(
        () => {
          dispatch(refreshTokens({ refreshToken }));
        },
        timeToLive > 0 ? timeToLive : 0
      );

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [dispatch, refreshToken, accessTokenExpireAt]);

  return <div className="min-h-screen">{children}</div>;
};

export default AppContainer;
