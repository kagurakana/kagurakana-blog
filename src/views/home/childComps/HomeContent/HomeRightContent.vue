<template>
  <div class="todo-list">
    <!-- <TodoList /> -->
  </div>
</template>

<script>
import TodoList from "./right/TodoList";
export default {
  name: "RightContent",
  components: {
    TodoList
  }
};
</script>

<style lang='scss' scoped>
.todo-list {
  position: sticky;
  top: $home-nav-height;
}
</style>