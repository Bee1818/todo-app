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
        <p class="w-5/6">{{ todo }}</p>
        <div class="flex justify-end gap-[10px]">
          <button class="button edit block">編集</button>
          <button @click="deleteTodo(index)" class="button delete block">削除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// storeToRefs:todo.tsをvueでも使えるようにする
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const { todos, newTodo } = storeToRefs(todoStore)
const { addTodo, deleteTodo } = todoStore
</script>
<style scoped>
.button {
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
.add {
  background-color: blue;
}
.edit {
  background-color: green;
}
.delete {
  background-color: red;
}
</style>