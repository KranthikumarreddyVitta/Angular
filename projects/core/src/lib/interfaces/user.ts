export interface IUser {
  name: string;
  access_token: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  role: number;
  role_type: number;
  supplier_id: number;
  token_type: string;
  userId: number;
  company_id: number;
  company_name: string;
  mobile?:string;
}

/**
 * User details
 */
export class User {
  private _name: string = '';
  private _id: number = NaN;
  private _access_token: string = '';
  private _email: string = '';
  private _firstName: string = '';
  private _lastName: string = '';
  private _picture: string = '';
  private _role: number = NaN;
  private _role_type: number = NaN;
  private _supplier_id: number = NaN;
  private _token_type: string = '';
  private _company_id: number = NaN;
  private _companyName: string = '';
  private _mobile:string = ''

  constructor(user: IUser) {
    this._name = user.name;
    this._id = user.userId;
    this._access_token = user.access_token;
    this._email = user.email;
    this._firstName = user.firstName;
    this._lastName = user.lastName;
    this._picture = user.picture;
    this._role_type = user.role_type;
    this._role = user.role;
    this._supplier_id = user.supplier_id;
    this._company_id = user.company_id;
    this._companyName = user.company_name;
    this._mobile = user.mobile ? user.mobile : '';
  }
  getId(): number {
    return this._id;
  }
  getName(): string {
    return this._name;
  }
  getAccessToken(): string {
    return this._access_token;
  }

  getEmail(): string {
    return this._email;
  }

  getFirstName(): string {
    return this._firstName;
  }

  getLastName(): string {
    return this._lastName;
  }

  getPicture(): string {
    return this._picture;
  }

  getRole(): number {
    return this._role;
  }
  getRoleType(): number {
    return this._role_type;
  }

  getSupplierId(): number {
    return this._supplier_id;
  }
  getTokenType(): string {
    return this._token_type;
  }

  getCompanyId(): number {
    return this._company_id;
  }

  isInternalUser(): boolean {
    return this._role_type === 1;
  }

  getCompanyName() {
    return this._companyName;
  }

  getMobile() {
    return this._mobile;
  }
}
