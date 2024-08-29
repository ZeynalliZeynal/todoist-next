interface User {
  id: number;
  created_at?: Date;
  email: string;
  name: string;
  image?: string;
}

interface Task {
  id: string;
  createdAt?: Date;
  name: string;
  description: string | null;
  userId: string | null;
  isCompleted: boolean;
}
