import { Role } from './auth.enum';

export interface IAuthStatus {
  isAuthenticated: boolean;
  userRole: string;
  userId: string;
}

export interface IServerAuthResponse {
  accessToken: string;
}

export const defaultAuthStatus: IAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: '',
};

export class AuthService {}
