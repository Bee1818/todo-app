<template>
  <div class="text-center">
    <h1>TODOリスト</h1>
    <form @submit.prevent="addTodo" class="w-4/5 mx-auto flex gap-[10px]">
      <input v-model="newTodo" type="text" placeholder="新しいメモ入力" class="block w-4/5">
      <button type="submit" class="button add block">追加</button>
    </form>
    <ul class="w-4/5">
      <li
      v-for="(todo, index) in todos" 
      class="flex justify-between items-center">
        <p>{{ todo }}</p>
        <div class="flex gap-[10px] w-[100px]">
          <button class="button edit block">編集</button>
          <button class="button delete block">削除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const { todos, newTodo } = storeToRefs(todoStore)
const { addTodo } = todoStore
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