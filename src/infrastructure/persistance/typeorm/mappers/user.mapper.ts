import { UserEntity } from '../entities/user.entity';
import { User } from '../../../../domain/model/user';

export class UserMapper {
  public static toDomain(userEntity: UserEntity) {
    return new User(
      userEntity.id,
      userEntity.firstName,
      userEntity.lastName,
      userEntity.username,
      userEntity.email,
      userEntity.password,
      userEntity.isAdmin,
    );
  }

  public static toEntity(user: User) {
    const userEntity = new UserEntity();

    userEntity.id = user.id;
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.username = user.username;
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.isAdmin = user.isAdmin;

    return userEntity;
  }
}
