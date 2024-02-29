import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ 
    name: 'station'
})
export class StationEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'name', unique: true})
  name: string;
}
