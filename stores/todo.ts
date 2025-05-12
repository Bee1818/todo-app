// stores/counter.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {

  const todos = ref<string[]>([])
  const newTodo = ref<string>('')

  function addTodo(): void {
    if (newTodo.value.trim()) {
      todos.value.push(newTodo.value.trim())
      newTodo.value=''
    }
  }

  function deleteTodo(index: number): void {
    todos.value.splice(index, 1)
  }

  return {
    todos,
    newTodo,
    addTodo,
    deleteTodo,
  }

})
