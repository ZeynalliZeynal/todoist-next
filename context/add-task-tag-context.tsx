"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AddTaskTagContext {
  tags: Set<string>;
  addTaskTag: (name: string) => void;
  removeTaskTag: (name: string) => void;
  clearTaskTags: () => void;
}

const AddTaskTagContext = createContext<AddTaskTagContext | null>(null);

export const useAddTaskTag = () => {
  const context = useContext(AddTaskTagContext);
  if (!context) throw new Error("Context is outside of the provider");
  return context;
};

const AddTaskTag = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<Set<string>>(new Set());

  const addTaskTag = (name: string) => {
    setTags((prev) => new Set(prev).add(name.trim()));
  };

  const removeTaskTag = (name: string) => {
    setTags((prev) => {
      const updatedTags = new Set(prev);
      updatedTags.delete(name);
      return updatedTags;
    });
  };

  const clearTaskTags = () => setTags(new Set());

  return (
    <AddTaskTagContext.Provider
      value={{ tags, addTaskTag, removeTaskTag, clearTaskTags }}
    >
      {children}
    </AddTaskTagContext.Provider>
  );
};

export default AddTaskTag;
