import { Role } from '../../auth/auth.enum';

export interface IName {
  first: string;
  middle?: string;
  last: string;
}

export enum PhoneType {
  None = 'none',
  Mobile = 'mobile',
  Home = 'home',
  Work = 'work',
}

export interface IPhone {
  type: PhoneType;
  digits: string;
  id: number;
}

export interface IUser {
  _id: string;
  email: string;
  name: IName;
  picture: string;
  role: Role | string;
  userStatus: boolean;
  dateOfBirth: Date | null | string;
  level: number;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
  };
  phones: IPhone[];
  readonly fullName?: string;
}

interface IAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
}

export class User implements IUser {
  _id: string;
  email: string;
  name: IName;
  picture: string;
  role: string;
  userStatus: boolean;
  dateOfBirth: string | Date | null;
  level: number;
  address: IAddress;
  phones: IPhone[];

  constructor(
    _id: string,
    email: string,
    name: IName,
    picture: string,
    role: string,
    userStatus: boolean,
    dateOfBirth: string | Date | null,
    level: number,
    address: IAddress,
    phones: IPhone[],
  ) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.picture = picture;
    this.role = role;
    this.userStatus = userStatus;
    this.dateOfBirth = dateOfBirth;
    this.level = level;
    this.address = address;
    this.phones = phones;
  }

  static Build(user: IUser) {
    if (!user) {
      throw new Error('Please pass valid user objec with fields populated');
    }
    const { _id, email, name, picture, role, userStatus, dateOfBirth, level, address, phones } =
      user;
    return new User(
      _id,
      email,
      name,
      picture,
      role,
      userStatus,
      dateOfBirth,
      level,
      address,
      phones,
    );
  }

  get fullName(): string {
    if (!this.name) {
      return '';
    }
    if (this.name.middle) {
      return `${this.name.first} ${this.name.middle} ${this.name.last}`;
    }
    return `${this.name.first} ${this.name.last}`;
  }

  toJSON(): object {
    const serialized = Object.assign(this);
    delete serialized._id;
    delete serialized.fullName;
    return serialized;
  }
}
