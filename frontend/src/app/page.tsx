import TaskList from './components/TaskList';

export default function HomePage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hybrid Task List</h1>
      <TaskList />
    </main>
  );
}