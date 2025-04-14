import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { User } from "../user/User";
import { BikeCategory } from "../bikecategory/Bikecaegory";

@Entity("bike")
export class Bike {
  @PrimaryColumn({ name: "Bid", type: "char", length: 36 })
  id: string;

  @Column({ name: "Uid", type: "char", length: 36 })
  userId: string;

  @Column({ name: "Bname", type: "varchar", length: 255 })
  name: string;

  @Column({ name: "Bprice", type: "float" })
  price: number;

  @Column({ name: "Bdescription", type: "text" })
  description: string;

  @Column({ name: "PCid", type: "char", length: 36 })
  categoryId: string;

  @Column({ name: "Bkilometer", type: "int" })
  kilometer: number;

  @Column({ name: "Byear", type: "year" })
  year: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: "Uid" })
  user: User;

  @ManyToOne(() => BikeCategory, { eager: true })
  @JoinColumn({ name: "PCid" })
  category: BikeCategory;

  /*@OneToMany(() => BikeImage, (image) => image.bike)
  images: BikeImage[];*/
}
