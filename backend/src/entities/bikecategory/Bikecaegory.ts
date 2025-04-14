import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("bikecategory")
export class BikeCategory {
  @PrimaryColumn({ name: "BCid", type: "char", length: 36 })
  id: string;

  @Column({ name: "BCname", type: "varchar", length: 255 })
  name: string;

  @Column({ name: "BCparentId", type: "char", length: 36 })
  parentId: string;

  @ManyToOne(() => BikeCategory, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: "BCparentId" })
  parent: BikeCategory;
}
