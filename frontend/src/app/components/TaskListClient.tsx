'use client';

import { useState } from 'react';

type Props = {
  initialTasks: string[];
};

export default function TaskListClient({ initialTasks }: Props) {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
        className="border px-2 py-1 mr-2"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
      <ul className="list-disc pl-5 mt-4">
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  );
}