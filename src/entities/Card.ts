import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'card'
})
export class CardEntity {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @Column({ name: 'number' })
  number: string;

  @Column({ name: 'amount', type: 'float8' })
  amount: number;

  @Column({ name: 'riding' })
  riding: boolean;
}
