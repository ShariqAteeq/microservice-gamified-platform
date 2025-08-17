import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class GetUserDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  avatar_url?: string;
}

export class UpdateUserProgressDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  score_delta: number;

  @IsNotEmpty()
  xp_delta: number;
}

export class AddAchievementDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  achievement_id: string;
}

export class UserResponseDto {
  success: boolean;
  message: string;
  user?: {
    id: string;
    username: string;
    email: string;
    avatar_url?: string;
    total_score: number;
    total_xp: number;
    level: number;
    achievements: string[];
    created_at: string;
    updated_at: string;
  };
}
