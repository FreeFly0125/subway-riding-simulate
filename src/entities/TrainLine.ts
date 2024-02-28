import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'trainline' })
export class TrainLine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'stations', type: 'text', array: true })
  stations: string[];
}
