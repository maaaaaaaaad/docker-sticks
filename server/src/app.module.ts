import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import * as ormconfig from './typeorm.config'
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production').required(),
        APP_PORT: Joi.string().required(),
        APP_SERVER_URI: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
