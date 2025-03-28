"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskStats from "../components/TaskStats";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.name || "User"}!
          </h1>
          <p className="text-gray-600">
            Manage your tasks efficiently with Tick&Tick
          </p>
        </div>

        <TaskStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TaskForm editTask={editTask} setEditTask={setEditTask} />
          </div>

          <div className="lg:col-span-2">
            <TaskList setEditTask={setEditTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
