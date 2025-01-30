import { UserEntity } from '../entities/user.entity';
import { User } from '../../../../domain/model/user';

export class UserMapper {
  public static toDomain(userEntity: UserEntity): User {
    const user = new User();

    user.id = userEntity.id;
    user.firstName = userEntity.firstName;
    user.lastName = userEntity.lastName;
    user.email = userEntity.email;
    user.mobileNumber = userEntity.mobileNumber;
    user.password = userEntity.password;
    user.isAdmin = userEntity.isAdmin;

    return user;
  }

  public static toEntity(user: User): UserEntity {
    const userEntity = new UserEntity();

    userEntity.id = user.id;
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.email = user.email;
    userEntity.mobileNumber = user.mobileNumber;
    userEntity.password = user.password;
    userEntity.isAdmin = user.isAdmin;

    return userEntity;
  }
}
