import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm";
import { Song } from "../";

@Entity()
class Playlist {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany((type) => Song, (song) => song.id, { eager: true })
    @JoinTable()
    public songs: Song[];
}

export default Playlist;
