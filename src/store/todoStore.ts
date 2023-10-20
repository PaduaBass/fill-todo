import { create } from 'zustand';

export type TodoType = {
  description: string;
  isDone: boolean;
  createdAt: Date;
}

type State = {
  todos: TodoType[];
  showDone: boolean;
  showGrid: boolean;
  changeShowGrid: () => void;
  changeShowDone: () => void;
  addTodo: (todo: TodoType) => void;
  changeStatus: (todo: TodoType) => void;
}

const useTodoStore = create<State>((set) => ({
  todos: [],
  showDone: false,
  showGrid: false,
  changeShowGrid: () => {
    set(state => ({ showGrid: !state.showGrid }));
  },
  changeShowDone: () => {
    set(state => ({ showDone: !state.showDone }))
  },
  addTodo: (todo: TodoType) => {
    set(state => ({ todos: [todo, ...state.todos] }))
  },
  changeStatus: (todo: TodoType) => {
    set(state => {
      const todoIndex = state.todos.findIndex(t => t.createdAt === todo.createdAt);
      if (todoIndex >= 0) {
        state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
        return { todos: state.todos };
      } else {
        return { todos: state.todos };
      }
    })
  }
}));

export default useTodoStore;