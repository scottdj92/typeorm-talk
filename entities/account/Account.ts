import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Playlist } from "../";

@Entity()
class Account {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public password: string;

    @ManyToOne((type) => Playlist, (playlist) => playlist.id, { eager: true })
    public playList: Playlist[];
}

export default Account;
