<template>
  <section class="todoapp">
    <header class="header">
      <input type="text" class="new-todo" v-model="newTodo" @keyup.enter="addTodo" placeholder="Ajoutez une tâche">
    </header>
    <section class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" :class="{'completed': todo.complete}" v-for="todo in filteredTodos">
          <div class="view">
            <input type="checkbox" v-model="todo.complete" class="toggle">
            <label>{{ todo.name }}</label>
            <button @click.prevent="removeTodo(todo)" class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer" v-if="todos.length > 0">
      <span class="todo-count">
        <strong> {{ remainingTodos }} </strong> tâches à faire
      </span>
      <ul class="filters">
        <li><a :class="{'selected': filter === 'all'}" @click.prevent="changeFilter('all')" href="#">Toutes</a></li>
        <li><a :class="{'selected': filter === 'todo'}" @click.prevent="changeFilter('todo')" href="#">A faire</a></li>
        <li><a :class="{'selected': filter === 'done'}" @click.prevent="changeFilter('done')" href="#">Faites</a></li>
      </ul>
      <button class="clear-completed" v-if="getDoneTodos.length > 0" @click.prevent="removeDoneTodos()">
        Sup. tâches faites
      </button>
    </footer>
  </section>

</template>
<style src="../assets/todos.css">


</style>
<script>

  export default{
    data () {
      return {
        newTodo: '',
        todos: [
          {name: 'Test', complete: false}, {name: 'Autre', complete: true}
        ],
        filter: 'all'
      }
    },
    computed: {
      remainingTodos () {
        return this.todos.filter(todo => !todo.complete).length
      },
      filteredTodos () {
        switch (this.filter) {
          case 'all':
            return this.todos.filter((todo, index, array) => array);
            break;
          case 'todo':
            return this.todos.filter(todo => !todo.complete);
            break;
          case 'done':
            return this.todos.filter(todo => todo.complete);
            break;
        }

      },
      getDoneTodos() {
        return this.todos.filter(todo => todo.complete);
      },
      allDone: {
        get () {
          return this.remainingTodos === 0
        },
        set (value) {
          this.todos.forEach(todo => {
            todo.complete = value
          })
        }
      }
    },
    methods: {
      addTodo() {
        this.todos.push({name: this.newTodo, complete: false});
        this.newTodo = '';
      },
      removeTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo)
      },
      removeDoneTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      changeFilter(filter) {
        this.filter = filter;
      }
    }
  }
</script>
