import AddTask from "../../../components/Tasks/AddTask";
import Task from "../../../components/Tasks/Task";
export default function MainPage() {
  return (
    <div className="mx-auto mt-5 flex flex-col px-6 py-12">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <AddTask />
        <ul>
          <Task />
        </ul>
      </div>
    </div>
  );
}
