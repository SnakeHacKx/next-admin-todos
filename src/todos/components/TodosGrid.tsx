'use client';

import { useRouter } from 'next/navigation';

import { Todo } from '@prisma/client';

// import * as todosApi from '@/todos/helpers/todos';
import { TodoItem } from './TodoItem';
import { toggleTodo } from '../actions/todo-actions';

interface Props {
  todos?: Todo[]; //* El Todo aqui es de prisma, pero si se quiere, se puede crear una interfaz propia aparte
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   await todosApi.updateTodo(id, complete);
  //   router.refresh();
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
