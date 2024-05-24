import prisma from '@/lib/prisma';
import { TodosGrid } from '@/todos';
import { NewTodo } from '../../../todos/components/NewTodo';

export const metadata = {
  title: 'Listado de TODOS',
  description: 'SEO Title',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: 'asc' },
  });

  return (
    <>
      <span className="text-3xl bold mb-20">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
