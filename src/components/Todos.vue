<template>
  <section class="todoapp">
    <header class="header">
      <input type="text" class="new-todo" v-model="newTodo" @keyup.enter="addTodo" placeholder="Ajoutez une tâche">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" :class="{'completed': todo.complete}" v-for="todo in todos">
          <div class="view">
            <input type="checkbox" v-model="todo.complete" class="toggle">
            <label>{{ todo.name }}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong> {{ remainingTodos }} </strong> tâches à faire
      </span>
      <ul class="filters">
        <li><a :class="{'selected': filter === 'all'}" @click.prevent="changeFilter('all')" href="#">Toutes</a></li>
        <li><a :class="{'selected': filter === 'todo'}" @click.prevent="changeFilter('todo')" href="#">A faire</a></li>
        <li><a :class="{'selected': filter === 'done'}" @click.prevent="changeFilter('done')" href="#">Faites</a></li>
      </ul>
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
        return this.todos.filter(todo => !todo.complete ).length
      }
    },
    methods: {
      addTodo() {
        this.todos.push({name: this.newTodo, complete: false});
        this.newTodo = '';
      },
      changeFilter(filter) {
        this.filter = filter;
        switch (filter){
          case 'all':
            this.todos.filter((todo, index, array) => {return array} )
            break;
          case 'todo':
            this.todos.filter(todo => {return !todo.complete} )

            break;
          case 'done':
            this.todos.filter(todo => {return todo.complete} )
            break;
        }
      }
    }
  }
</script>
