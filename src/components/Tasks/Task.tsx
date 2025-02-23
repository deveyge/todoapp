import React from "react";
import { trashIcon, checkIcon } from "../../shared/utils/icons";
import { Todo } from "app/types/Todo";
interface TaskItemProps {
  todo: Todo;
}
function Task({ todo }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between rounded-md bg-foreground px-4 py-6">
      <p>{todo.text}</p>
      <div className="flex items-center gap-3">
        <button>{checkIcon}</button>
        <button>{trashIcon}</button>
      </div>
    </li>
  );
}

export default Task;
