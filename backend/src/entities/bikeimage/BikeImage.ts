import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("bikeimage")
export class BikeImage {
  @PrimaryColumn({ name: "BIid", type: "char", length: 36 })
  id: string;

  @Column({ name: "BIimagePath", type: "varchar", length: 255 })
  imagePath: string;
}
