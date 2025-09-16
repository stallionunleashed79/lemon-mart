import {
  BehaviorSubject,
  catchError,
  filter,
  flatMap,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Role } from './auth.enum';
import { IName, IUser, User } from '../user/user/user';
import { transformError } from '../common/common';
import { CacheService } from '../common/cache.service';
import { inject } from '@angular/core';

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
  protected readonly cache = inject(CacheService);
  readonly authStatus$: BehaviorSubject<IAuthStatus> = new BehaviorSubject<IAuthStatus>(
    this.cache.getItem('authStatus') ?? defaultAuthStatus,
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

  constructor() {
    this.authStatus$.pipe(tap((authStatus) => this.cache.setItem('authStatus', authStatus)));
  }

  protected abstract authProvider(email: string, password: string): Observable<IServerAuthResponse>;
  protected abstract transformJwtToken(token: unknown): IAuthStatus;
  protected abstract getCurrentUser(): Observable<User>;

  login(email: string, password: string): Observable<void> {
    const loginResponse$ = this.authProvider(email, password).pipe(
      map((value: { accessToken: any }) => {
        const token = decode(value?.accessToken);
        return this.transformJwtToken(token);
      }),
      tap((status: IAuthStatus) => this.authStatus$.next(status)),
      filter((status: { isAuthenticated: any }) => status.isAuthenticated),
      flatMap(() => this.getCurrentUser()),
      map((user) => this.currentUser$.next(user)),
      catchError(transformError),
    );

    loginResponse$.subscribe({
      error: (err: any) => {
        this.logout();
        return throwError(err);
      },
    });
    return loginResponse$;
  }

  logout(clearToken?: boolean): void {
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0);
  }

  getToken(): string {
    throw new Error('Method not implemented');
  }
}
function decode(accessToken: any) {
  throw new Error('Function not implemented.');
}
