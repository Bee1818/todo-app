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

  // メモ編集機能
  function editTodo(index:number): void {
    editStatus.value = index
    editText.value = todos.value[index]
  }

  // メモ編集後に保存
  function saveTodo():void {
    if (editStatus.value !== null && editText.value.trim()) {
      todos.value[editStatus.value] = editText.value.trim()
      editStatus.value = null
      editText.value = ''
    }
  }

  // メモ編集キャンセル
  function cancelTodo():void {
    editStatus.value = null
    editText.value = ''
  }

  return {
    todos,
    newTodo,
    editStatus,
    editText,
    addTodo,
    deleteTodo,
    editTodo,
    saveTodo,
    cancelTodo,
  }

})
