import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { Song } from "../";

@Entity()
class Artist {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany((type) => Song, (song) => song.artist, { cascade: true, eager: true })
    @JoinTable()
    public songs: Song[];
}

export default Artist;
