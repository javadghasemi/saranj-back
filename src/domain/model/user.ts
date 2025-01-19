export class User {
  private readonly _id: string; // In domain, we typically use private fields and provide getters/setters
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _username: string;
  private readonly _email: string;
  private _password: string;
  private _isAdmin: boolean;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    isAdmin: boolean,
  ) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._username = username;
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
  }

  // Business logic
  public changePassword(newPassword: string): void {
    if (this._password === newPassword) {
      throw new Error('New password cannot be the same as the old password.');
    }
    this._password = newPassword;
  }

  public makeAdmin(): void {
    this._isAdmin = true;
  }

  public removeAdmin(): void {
    this._isAdmin = false;
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

  public get username(): string {
    return this._username;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public get isAdmin(): boolean {
    return this._isAdmin;
  }
}
