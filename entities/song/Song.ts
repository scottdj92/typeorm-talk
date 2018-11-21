import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Artist } from "../";

@Entity()
class Song {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public genre: string;

    @Column()
    public duration: number;

    @ManyToOne((type) => Artist, (artist) => artist.songs)
    public artist: Artist;
}

export default Song;
