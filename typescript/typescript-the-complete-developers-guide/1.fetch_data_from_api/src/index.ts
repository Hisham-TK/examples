import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface ITodo {
  // Interfaces are custom types
  id: number;
  //   userId: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(res => {
  const todo /* : ITodo */ = <ITodo>res.data /* as ITodo */;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
	The todo with id: ${id}
	Has a title of: ${title}
	Is it finished: ${completed}
	`);
}
