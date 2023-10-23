import { create } from 'zustand';
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import { MMKV } from 'react-native-mmkv';
export interface TodoType {
  description: string;
  isDone: boolean;
  createdAt: Date;
}

interface State {
  todos: TodoType[];
  showDone: boolean;
  showGrid: boolean;
  changeShowGrid: () => void;
  changeShowDone: () => void;
  addTodo: (todo: TodoType) => void;
  changeStatus: (todo: TodoType) => void;
}

export const appPersistStorage = new MMKV({ id: "todo-storage" });

const zustandMMKVStorage: StateStorage = {
  setItem: (name, value) => {
    appPersistStorage.set(name, value);
  },
  getItem: (name) => {
    const value = appPersistStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    appPersistStorage.delete(name);
  },
};

const useTodoStore = create<State, [["zustand/persist", State]]>(persist(
  (set) => ({
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
  }),
  {
    name: 'todo-storage',
    storage: createJSONStorage(() => zustandMMKVStorage),
  }
));

export default useTodoStore;