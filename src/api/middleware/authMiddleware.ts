import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SecretConfig } from '../../config/jwt';

interface TokenPayload {
  iat: string;
  exp: string;
  sub: string;
}

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const AuthHeader = req.headers.authorization;

  if (!AuthHeader) {
    throw new Error('no token provider');
  }

  const [, token] = AuthHeader.split(' ');

  try {
    const { secret } = SecretConfig;
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new Error('jwt invalid');
  }
};
