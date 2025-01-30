import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../ports/user.repository';
import { UserExistsException } from '../../../domain/exceptions/user-exists.exception';
import { EncryptPort } from '../../ports/encrypt.port';
import { User } from '../../../domain/model/user';

@Injectable()
export class RegisterUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptPort,
  ) {}

  public async execute(
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    password: string,
  ) {
    if (await this.uniqueIdentifierExists(email, mobileNumber)) {
      throw new UserExistsException();
    }

    const hashedPassword = await this.encryptService.hash(password);
    const user = this.createUserDomain(
      firstName,
      lastName,
      mobileNumber,
      email,
      hashedPassword,
    );

    await this.userRepository.insert(user);

    return { message: 'ثبت نام با موفقیت انجام شد' };
  }

  private async uniqueIdentifierExists(
    email: string,
    mobileNumber: string,
  ): Promise<boolean> {
    const result = await Promise.all([
      this.userRepository.checkEmailExists(email),
      this.userRepository.checkMobileNumberExists(mobileNumber),
    ]);

    return result.includes(true);
  }

  public createUserDomain(
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    password: string,
  ): User {
    const user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.mobileNumber = mobileNumber;
    user.password = password;

    return user;
  }
}
