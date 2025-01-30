export class User {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _mobileNumber: string;
  private _password: string;
  private _isAdmin: boolean;

  public set id(id: string) {
    this._id = id;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set mobileNumber(mobileNumber: string) {
    this._mobileNumber = mobileNumber;
  }

  public set password(password: string) {
    this._password = password;
  }

  public set isAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }
  // Getters
  public get id(): string {
    return this._id;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get email(): string {
    return this._email;
  }

  public get mobileNumber(): string {
    return this._mobileNumber;
  }

  public get password(): string {
    return this._password;
  }

  public get isAdmin(): boolean {
    return this._isAdmin;
  }
}
