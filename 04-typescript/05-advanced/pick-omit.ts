{
  type Todo = {
    title: string,
    description: string,
    isDone: boolean,
  };

  type PickedTodo = Pick<Todo, 'title' | 'isDone'>;

  type OmittedTodo = Omit<Todo, 'description'>;

  const todo1: PickedTodo = {
    title: 'hoge',
    isDone: true,
  }

  const todo2: OmittedTodo = {
    title: 'fuga',
    isDone: false,
  }

  console.log(todo1, todo2);
}
