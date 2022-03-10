import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsNumber } from 'class-validator'
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'required' })
export abstract class RequiredEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'primary-key' })
  @ApiProperty({ name: 'pk' })
  @IsNumber()
  pk: number

  @CreateDateColumn({ name: 'create-date' })
  @ApiProperty({ name: 'createAt' })
  @IsDate()
  createAt: Date

  @UpdateDateColumn({ name: 'update-date' })
  @ApiProperty({ name: 'updateAt' })
  @IsDate()
  updateAt: Date
}
