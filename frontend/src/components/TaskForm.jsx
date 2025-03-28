"use client";

import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { useTasks } from "../context/TaskContext";

const TaskForm = ({ editTask, setEditTask }) => {
  const { addTask, updateTask, categories } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [priority, setPriority] = useState("medium");
  const [showNewCategory, setShowNewCategory] = useState(false);

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setCategory(editTask.category);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("medium");
    setNewCategory("");
    setShowNewCategory(false);
    setEditTask(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCategory = showNewCategory ? newCategory : category;

    if (!title || !finalCategory) return;

    const taskData = {
      title,
      description,
      category: finalCategory,
      priority,
    };

    if (editTask) {
      updateTask(editTask._id, { ...taskData, status: editTask.status });
    } else {
      addTask(taskData);
    }

    resetForm();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-green-700">
        {editTask ? "Edit Task" : "Add New Task"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-green-800 mb-1"
          >
            Task Title*
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-green-800 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border border-green-300 rounded-md min-h-[80px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-green-800 mb-1">
            Category*
          </label>

          {!showNewCategory ? (
            <div className="flex gap-2">
              <select
                className="flex-1 w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required={!showNewCategory}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="flex items-center px-3 py-2 border border-green-500 text-green-700 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setShowNewCategory(true)}
              >
                <PlusCircle size={16} className="mr-1" /> New
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required={showNewCategory}
              />
              <button
                type="button"
                className="px-3 py-2 border border-green-500 text-green-700 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setShowNewCategory(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-green-800 mb-1">
            Priority
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={() => setPriority("low")}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-green-800">Low</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={priority === "medium"}
                onChange={() => setPriority("medium")}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-green-800">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={() => setPriority("high")}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-green-800">High</span>
            </label>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {editTask ? "Update Task" : "Add Task"}
          </button>
          {editTask && (
            <button
              type="button"
              className="w-full border border-green-600 text-green-700 py-2 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
