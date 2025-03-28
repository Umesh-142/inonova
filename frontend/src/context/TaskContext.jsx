"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([
    "Work",
    "Personal",
    "Shopping",
    "Health",
    "Education",
  ]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchTasks();
    } else {
      setTasks([]);
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/api/tasks");
      setTasks(response.data);

      // Update categories with unique categories from tasks
      const taskCategories = response.data.map((task) => task.category);
      const uniqueCategories = [...new Set([...categories, ...taskCategories])];
      setCategories(uniqueCategories);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await api.post("/api/tasks", taskData);
      setTasks([...tasks, response.data]);

      // Add new category if it doesn't exist
      if (!categories.includes(response.data.category)) {
        setCategories([...categories, response.data.category]);
      }

      toast.success("Task added successfully");
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const response = await api.put(`/api/tasks/${taskId}`, taskData);
      setTasks(
        tasks.map((task) => (task._id === taskId ? response.data : task))
      );

      // Add new category if it doesn't exist
      if (!categories.includes(response.data.category)) {
        setCategories([...categories, response.data.category]);
      }

      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  const toggleTaskStatus = async (taskId) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      const newStatus = task.status === "completed" ? "pending" : "completed";

      const response = await api.put(`/api/tasks/${taskId}`, {
        ...task,
        status: newStatus,
      });

      setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
    } catch (error) {
      toast.error("Failed to update task status");
    }
  };

  const value = {
    tasks,
    categories,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
