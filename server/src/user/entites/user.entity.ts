import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsOptional, IsString } from 'class-validator'
import { RequiredEntity } from 'src/common/entites/require.entity'
import { Column, Entity } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends RequiredEntity {
  @Column({ name: 'username' })
  @ApiProperty({ name: 'username' })
  @IsString()
  username: string

  @Column({ name: 'password' })
  @ApiProperty({ name: 'password' })
  @IsString()
  password: string

  @Column({ name: 'email' })
  @ApiProperty({ name: 'email' })
  @IsEmail()
  email: string

  @Column({ name: 'nickname' })
  @ApiProperty({ name: 'nickname' })
  @IsEmail()
  nickname: string

  @Column({ name: 'avatar-image', nullable: true })
  @ApiProperty({ name: 'avatarImage', nullable: true })
  @IsString({ always: false })
  @IsOptional({ message: 'avatar image has optional' })
  avatarImage?: string
}
