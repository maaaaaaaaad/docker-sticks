import { RequiredEntity } from 'src/common/entites/require.entity'
import { Column, Entity } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends RequiredEntity {
  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string
}
