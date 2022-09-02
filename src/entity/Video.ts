import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Room } from './Room'

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    url: string

    @ManyToOne(() => Room, room => room.videos) //primeiro, mapear quem é a entidade que vamos relacionar
    @JoinColumn({ name: 'room_id' }) // dizer qual e o nome da chama estrangeira
    room: Room
}