import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

const authenticateRequest = (authHeader) => {
  return new Promise((resolve, reject) => {
    if (!authHeader) {
      return new AuthenticationError('no logged in user');
    }

    if (!authHeader.startsWith('Bearer ')) {
      return new AuthenticationError('no bearer token');
    }

    const token = authHeader.slice(7);
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        reject(err.message);
        return;
      }
      resolve(decoded);
    });
  });
};

export const authResolver = (resolver) => {
  return async (object, args, context) => {
    const user = await authenticateRequest(context.req.get('Authorization'));
    return resolver(object, args, { ...context, user });
  };
};

export const authToken = (username) => {
  return jwt.sign({ username }, 'secret', {
    expiresIn: '1d',
    issuer: 't4d.io',
  });
};
