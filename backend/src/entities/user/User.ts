import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryColumn({ name: "Uid", type: "char", length: 36 })
  id: string;

  @Column({ name: "Uusername", type: "varchar", length: 32 })
  username: string;

  @Column({ name: "Ufirstname", type: "varchar", length: 255 })
  firstName: string;

  @Column({ name: "Ulastname", type: "varchar", length: 255 })
  lastName: string;

  @Column({ name: "Upasswordhash", type: "varchar", length: 255 })
  passwordHash: string;
}
