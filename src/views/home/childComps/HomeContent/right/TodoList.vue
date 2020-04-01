<template>
  <v-container>
    <v-card outlined>
      <v-list>
        <v-card-title>TODO22</v-card-title>
        <v-list-item-group class="todo-list" multiple v-model="activeTodos">
          <v-list-item v-for="(todo, index) in todos" :key="index">
            <template v-slot:default="{active, toggle}">
              <v-list-item-action>
                <v-checkbox :input-value="active" :true-value="todo.state" @click="toggle"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="todo.thing" :class="{'finished':active}"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: [
        {
          thing: "add link",
          date: "2020/2/23",
          state: true
        },
        {
          thing: "add link",
          date: "2020/2/23",
          state: false
        },
        {
          thing: "add link",
          date: "2020/2/23",
          state: false
        },
        {
          thing: "add link",
          date: "2020/2/23",
          state: false
        },
        {
          thing: "add link",
          date: "2020/2/23",
          state: false
        }
      ]
    };
  },
  computed: {
    activeTodos: {
      get() {
        let a = [];
        for (let index in this.todos) {
          this.todos[index].state && a.push(index * 1);
        }
        console.log(a);
        return a;
      },
      set(val) {
        this.todos.forEach(todo => {
          todo.state = false;
        });
        val.forEach(index => {
          this.todos[index].state = true;
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.finished {
  text-decoration: line-through;
  color: gray;
}
</style>