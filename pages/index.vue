<template>
  <div>
    <h1 class="text-2xl font-bold">My Todo App</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()
</script>