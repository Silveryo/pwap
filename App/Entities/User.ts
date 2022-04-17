import { Entity, BaseEntity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {
    Length,
    IsEmail,
} from "class-validator"
import { Task } from "./Task";

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]

    @Column({
        unique: true,
    })
    @Length(3)
    name: string;

    @Column({
        unique: true,
    })
    @IsEmail()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}