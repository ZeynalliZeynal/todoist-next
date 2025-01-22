export const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:8000/", { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
