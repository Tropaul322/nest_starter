import { CreateUserInput } from './inputs/create-user.input';
import { UserEntity } from './entities/user.entity';
import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UpdateUserInput } from './inputs/update-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') user: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.usersService.createUser(user);
  }

  @Query(() => [UserEntity])
  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Query(() => UserEntity)
  async findOne(@Args('id') id: number): Promise<UserEntity> {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => UserEntity)
  async updateUser(@Args('user') user: UpdateUserInput): Promise<UserEntity> {
    return await this.usersService.updateUser(user);
  }

  @Mutation(() => UserEntity)
  async deleteUser(@Args('id') id: number): Promise<void> {
    return await this.usersService.deleteUser(id);
  }
}
