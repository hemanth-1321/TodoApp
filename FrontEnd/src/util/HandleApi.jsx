import axios from "axios";

const baseUrl = "http://localhost:2000";

const getAllTodo = (setTodo) => {
  axios
    .get(baseUrl)
    .then((response) => {
      console.log("data --->", response.data);
      setTodo(response.data); // Updated to use response.data
    })
    .catch((error) => {
      // It's a good practice to handle potential errors.
      console.error("There was an error fetching the todos:", error);
    });
};
const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllTodo(setTodo);
  });
};

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};
export { getAllTodo, addTodo, updateTodo, deleteTodo };
