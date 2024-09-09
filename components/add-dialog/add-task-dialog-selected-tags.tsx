"use client";

import { useAddTaskTag } from "@/context/add-task-tag-context";
import Badge from "../badge";

const AddTaskDialogSelectedTags = () => {
  const { tags, removeTaskTag } = useAddTaskTag();
  if (!tags.size) return null;
  return (
    <div className="flex gap-1.5">
      {[...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => removeTaskTag(tag)}
          className="hover:opacity-90"
        >
          <Badge style="purple-subtle" size="md">
            {tag}
          </Badge>
        </button>
      ))}
    </div>
  );
};

export default AddTaskDialogSelectedTags;
