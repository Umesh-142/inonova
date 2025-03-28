import { CheckCircle, Clock, BarChart2 } from "lucide-react";
import { useTasks } from "../context/TaskContext";

const TaskStats = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const highPriorityPending = tasks.filter(
    (task) => task.priority === "high" && task.status === "pending"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="card bg-indigo-50 border border-indigo-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-indigo-100 mr-4">
            <BarChart2 className="text-indigo-600" size={24} />
          </div>
          <div>
            <p className="text-indigo-600 font-medium">Total Tasks</p>
            <p className="text-2xl font-bold text-indigo-700">{totalTasks}</p>
          </div>
        </div>
        <div className="mt-2 text-sm text-indigo-600">
          {completionRate}% completion rate
        </div>
      </div>

      <div className="card bg-emerald-50 border border-emerald-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-emerald-100 mr-4">
            <CheckCircle className="text-emerald-600" size={24} />
          </div>
          <div>
            <p className="text-emerald-600 font-medium">Completed</p>
            <p className="text-2xl font-bold text-emerald-700">
              {completedTasks}
            </p>
          </div>
        </div>
        <div className="mt-2 text-sm text-emerald-600">
          {totalTasks > 0
            ? `${Math.round((completedTasks / totalTasks) * 100)}% of all tasks`
            : "No tasks yet"}
        </div>
      </div>

      <div className="card bg-amber-50 border border-amber-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-amber-100 mr-4">
            <Clock className="text-amber-600" size={24} />
          </div>
          <div>
            <p className="text-amber-600 font-medium">Pending</p>
            <p className="text-2xl font-bold text-amber-700">{pendingTasks}</p>
          </div>
        </div>
        <div className="mt-2 text-sm text-amber-600">
          {highPriorityPending > 0
            ? `${highPriorityPending} high priority tasks pending`
            : "No high priority tasks pending"}
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
