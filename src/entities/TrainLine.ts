import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'trainline' })
export class TrainLineEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: 'stations', type: 'text', array: true })
  stations: string[];
}
