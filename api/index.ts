import axios from "axios";

export const add = async (textArea: string) => {
  await axios.post("http://127.0.0.1:5000/save", {
    data: textArea,
  });
};

export const get = async () => {
  return await axios.get("http://127.0.0.1:5000/todo_list");
};
