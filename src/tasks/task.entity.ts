import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  taskName: string;

  @Column({ nullable: true })
  assignee: string;

  @Column({ type: 'text', nullable: true })
  dueDate: string;

  @Column({ type: 'text', nullable: false })
  issueDate: string;

  @Column({ type: 'float', default: 0 })
  hoursSpent: number;

  @Column({ nullable: true })
  project: string;

  @Column({ nullable: true })
  difficulty: string;
}
