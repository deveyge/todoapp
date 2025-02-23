import React from "react";
import { trashIcon, checkIcon, editIcon } from "../../shared/utils/icons";
import { Todo } from "app/types/Todo";
interface TaskItemProps {
  todo: Todo;
  onToggleComplete: (id: string, completed: boolean) => void;
  onDeleteTodo: (id: string) => void;
}
function Task({ todo, onToggleComplete, onDeleteTodo }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between rounded-md bg-foreground px-4 py-6">
      <div className="flex items-center gap-3">
        <button
          className="rounded-md bg-primary p-1"
          onClick={() => onToggleComplete(todo.id, todo.completed)}
        >
          {todo.completed ? checkIcon : <div className="h-[22px] w-[22px]" />}
        </button>

        <p className={`${todo.completed ? "text-gray-600 line-through" : ""}`}>
          {todo.text}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-md bg-primary p-1">{editIcon}</button>
        <button
          className="rounded-md bg-primary p-1"
          onClick={() => onDeleteTodo(todo.id)}
        >
          {trashIcon}
        </button>
      </div>
    </li>
  );
}

export default Task;
