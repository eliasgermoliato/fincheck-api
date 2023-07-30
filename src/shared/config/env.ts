import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  NotEquals,
  validateSync,
} from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  @MinLength(30)
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  @NotEquals(
    'postgresql://username:password@host:port/databasename?schema=public',
  )
  databaseUrl: string;
}

export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length) {
  throw new Error(JSON.stringify(errors, null, 4));
}
