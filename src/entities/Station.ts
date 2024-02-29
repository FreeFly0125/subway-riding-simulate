import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ 
    name: 'station'
})
export class StationEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'name', unique: true})
  name: string;

  @Column({name: 'fare', type: 'float8'})
  fare: number;

  @Column({name: 'nbrstation', type: 'text', array: true})
  neighbors: string[];
}
