import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'card'
})
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'number' })
  number: string;

  @Column({ name: 'amount' })
  amount: number;

  @Column({ name: 'riding' })
  riding: boolean;
}
