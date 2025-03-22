import { getTasks } from '@/lib/task';
import TaskListClient from './TaskListClient';

export default async function TaskList() {
  const tasks = await getTasks(); // runs on server
  return <TaskListClient initialTasks={tasks} />;
}