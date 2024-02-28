import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ 
    name: 'station'
})
export class Station {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @Column({name: 'name'})
  name: string;
}
