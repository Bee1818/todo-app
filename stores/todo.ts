// defineStore:storeを作成する関数
import { defineStore } from 'pinia'
// Vueがrefで変数を追えるようにする
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {

  const todos = ref<string[]>([])
  const newTodo = ref<string>('')
  const editStatus = ref<number | null>(null)
  const editText = ref<string>('')

  // メモ追加機能
  function addTodo(): void {
    // refでは.valueで値を取得する
    if (newTodo.value.trim()) {
      // todosリストに入れる
      todos.value.push(newTodo.value.trim())
      // inputの値をリセット
      newTodo.value=''
    }
  }

  // メモ削除機能
  function deleteTodo(index: number): void {
    // indexの位置から1つ削除
    todos.value.splice(index, 1)
  }

  function editTodo(index:number): void {
    editStatus.value = index
    editText.value = todos.value[index]
  }

  return {
    todos,
    newTodo,
    editStatus,
    editText,
    addTodo,
    deleteTodo,
    editTodo,
  }

})
