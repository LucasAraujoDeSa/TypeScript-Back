import {  Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('posts')
export default class Post{

    @PrimaryGeneratedColumn()
        id: Number
    
    @Column()
        title: String

    @Column()
        description: String

    @Column()
        body: String
}