<!--suppress HtmlUnknownAttribute, CheckTagEmptyBody, CheckTagEmptyBody -->
<template>
	<section class="todoapp">
		<header class="header">
			<input type="text" class="new-todo" v-model="newTodo" @keyup.enter="addTodo"
				   placeholder="Ajoutez une tâche">
		</header>
		<section class="main">
			<input type="checkbox" class="toggle-all" v-model="allDone">
			<ul class="todo-list">
				<li class="todo" v-for="todo in filteredTodos"
					:class="{'completed': todo.complete, 'editing': editing === todo}">
						<div class="view">
							<input type="checkbox" v-model="todo.complete" class="toggle">
							<label @dblclick="editTodo(todo)">{{ todo.name }}</label>
							<button @click.prevent="removeTodo(todo)" class="destroy"></button>
						</div>
						<input type="text" class="edit" v-model="todo.name" @blur="doneEditing()"
							   @keyup.esc="cancelEditing()" @keyup.enter="doneEditing()" v-focus="editing === todo">
				</li>
			</ul>
		</section>
		<transition name="slide">
			<footer class="footer" v-if="todos.length > 0">
      <span class="todo-count">
        <strong> {{ remainingTodos }} </strong> tâches à faire
      </span>
				<ul class="filters">
					<li><a :class="{'selected': filter === 'all'}" @click.prevent="changeFilter('all')" href="#">Toutes</a>
					</li>
					<li><a :class="{'selected': filter === 'todo'}" @click.prevent="changeFilter('todo')" href="#">A
						faire</a></li>
					<li><a :class="{'selected': filter === 'done'}" @click.prevent="changeFilter('done')"
						   href="#">Faites</a></li>
				</ul>
				<button class="clear-completed" v-if="getDoneTodos.length > 0" @click.prevent="removeDoneTodos()">
					Sup. tâches faites
				</button>
			</footer>
		</transition>
	</section>

</template>
<style src="../assets/todos.css"></style>
<script>

	import Vue from 'vue';

	export default{
		data () {
			return {
				newTodo: '',
				todos: [],
				filter: 'all',
				oldTodoText: '',
				editing: null
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
			editTodo (todo) {
				this.oldTodoText = todo.name;
				this.editing = todo;
			},
			doneEditing() {
				this.editing = null
			},
			cancelEditing() {
				this.editing.name = this.oldTodoText;
				this.doneEditing()
			},
			removeDoneTodos () {
				this.todos = this.todos.filter(todo => !todo.complete)
			},
			changeFilter(filter) {
				this.filter = filter;
			}
		},
		mounted () {
			this.todos = this.$localStorage.get('todos');
		},
		updated () {
			this.$localStorage.set('todos', this.todos);
		},
		directives: {
			focus (el, value) {
				if (value) {
					Vue.nextTick(() => {
						el.focus()
					})
				}
			}
		}
	}
</script>
