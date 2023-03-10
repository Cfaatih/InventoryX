import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({nullable: true})
    mobile: string;

    @Column({nullable: true})
    email: string;

    @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdDate: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    lastModifiedDate: Date;

    @Column({
        type: "boolean",
        default: true
    })
    isActive: boolean;

}
