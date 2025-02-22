import React from "react";
import { trashIcon, checkIcon } from "../../shared/utils/icons";
function Task() {
  return (
    <li className="bg-foreground flex items-center justify-between rounded-md px-4 py-6">
      <p>Task</p>
      <div className="flex items-center gap-3">
        <button>{checkIcon}</button>
        <button>{trashIcon}</button>
      </div>
    </li>
  );
}

export default Task;
