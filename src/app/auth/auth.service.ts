import { BehaviorSubject, Observable, of } from 'rxjs';
import { Role } from './auth.enum';
import { IName, IUser, User } from '../user/user/user';

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

export interface IAuthService {
  readonly authStatus$: BehaviorSubject<IAuthStatus>;
  readonly currentUser$: BehaviorSubject<IUser>;
  login(email: string, password: string): Observable<void>;
  logout(clearToken?: boolean): void;
  getToken(): string;
}

export abstract class AuthService implements IAuthService {
  readonly authStatus$: BehaviorSubject<IAuthStatus> = new BehaviorSubject<IAuthStatus>(
    defaultAuthStatus,
  );
  readonly currentUser$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(
    new User(
      '',
      '',
      { first: '', middle: '', last: '' } as IName,
      '',
      Role.None,
      false,
      null,
      0,
      { line1: '', city: '', state: '', zip: '' },
      [],
    ),
  );

  constructor() {}

  login(email: string, password: string): Observable<void> {
    throw new Error('Method not implemented');
  }

  logout(clearToken?: boolean): void {
    throw new Error('Method not implemented');
  }

  getToken(): string {
    throw new Error('Method not implemented');
  }
}
