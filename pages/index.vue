<template>
  <div class="text-center">
    <h1>TODOリスト</h1>
    <!-- submitイベントで関数addTodoを呼び出す -->
     <!-- inputで入力された値をtodo.tsの変数newTodoにもv-modalで反映 -->
    <form @submit.prevent="addTodo" class="w-4/5 mx-auto flex gap-[10px]">
      <input v-model="newTodo" type="text" placeholder="新しいメモ入力" class="block w-4/5">
      <button type="submit" class="button add block">追加</button>
    </form>
    <ul class="w-4/5">
      <li
      v-for="(todo, index) in todos" 
      class="list-none">
        <template v-if="editStatus === index">
          <input v-model="editText" class="w-full my-[20px]">
        </template>
        <template v-else>
          <p class="w-5/6">{{ todo }}</p>
        </template>
        <div class="flex justify-end gap-[10px]">
          <template v-if="editStatus === index">
            <button @click="saveTodo" class="button save">保存</button>
            <button @click="cancelTodo" class="button cancel">キャンセル</button>
          </template>
          <template v-else>
            <button @click="editTodo(index)" class="button edit">編集</button>
            <button @click="deleteTodo(index)" class="button delete">削除</button>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// storeToRefs:todo.tsをvueでも使えるようにする
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'
import { onMounted, watch } from 'vue' 

const todoStore = useTodoStore()
const { todos, newTodo, editStatus, editText } = storeToRefs(todoStore)
const { addTodo, deleteTodo, editTodo, saveTodo, cancelTodo } = todoStore

onMounted(() => {
  watch(todos, (value) => {
    localStorage.setItem('todos', JSON.stringify(value))
  }, { deep: true })
})
</script>
<style scoped>
.button {
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
.add, .save {
  background-color: blue;
}
.edit {
  background-color: green;
}
.delete, .cancel {
  background-color: red;
}
</style>