<template>
	<div class="input-tags">
		<div class="input-wrapper">
			<span class="tag" v-for="tag in tags">#{{tag.name}} </span>
			<input type="text" v-model="newTag" @keyup.enter="addTag(newTag)">
		</div>
		<div v-if="errorMessage != null"><span style="color: red;">{{errorMessage}}</span></div>
	</div>
</template>
<style lang="scss">

	.input-tags {
		& span.tag {
			float:left;
			  margin-right: 15px;
		background: rgba(0, 0, 0, 0.38);
			  border: 1px solid black;
		border-radius: 5px;
		  }
		& .input-wrapper {
			  width: 100%;
			  height: 40px;
			  padding: 10px 15px 10px 15px;
			  outline: none;
			  border: 1px solid rgba(0, 0, 0, 0.31);
			  border-radius: 5px;
			& input {
				  background: transparent;
					outline: none;
					border: none;
		float: left;
			  }
		  }
	}

	span.tag {

	}


</style>
<script>
	export default {
		props: {

		},
		computed: {

		},
		data() {
			return {
				tags: [{name: "Test", index: 0}, {name: "Test 2", index: 1}, {name: "Test 3", index: 2}, {name: "Test", index: 3}],
				newTag: '',
				errorMessage: null
			}
		},
		methods: {
			addTag(name) {
				this.errorMessage = null;
				if(name != "") {
					let alreadyPresent = this.tags.filter((tag) => tag.name == name).length > 0;
					if(alreadyPresent) {
						this.errorMessage = "Le tag est déjà présent !";
						return;
					}
					this.tags.push({name, index: this.tags.length});
					this.newTag = "";
				}
			},
			removeTag(i) {
				this.tags = this.tags.filter((tag) => tag.index != i );
			}
		}
	}
</script>
