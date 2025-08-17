import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(data: CreateUserDto) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
        name: data.name,
        avatarUrl: data.avatarUrl,
      },
    });
    const token = this.jwtService.sign({ id: user.id });
    return { user, token };
  }
}
