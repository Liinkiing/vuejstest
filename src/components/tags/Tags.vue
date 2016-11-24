<template>
	<div class="input-tags">
		<div class="input-wrapper">
			<transition-group name="slide-left" tag="p">
				<span class="tag" v-for="tag in tags" :key="tag">#{{tag.name}}<i @click="removeTag(tag.index)">x</i></span>
			</transition-group>
			<input type="text" v-model="newTag" :value="newTag" @keyup.enter.space="addTag()"
				   @keyup.backspace="removeLastTag()" :style="style">
		</div>
		<div v-if="errorMessage != null"><span style="color: red;">{{errorMessage}}</span></div>
	</div>
</template>
<style lang="scss" src="./tags.scss">
</style>
<script>
	export default {
		props: {},
		computed: {
			style() {
				return {
					width: this.inputSize
				}
			}
		},
		data() {
			return {
				tags: [],
				newTag: '',
				errorMessage: null,
				inputSize: '50px',
			}
		},
		watch: {
			newTag(val) {
				if (val.length >= 0 && val.length <= 5 ) this.inputSize = '50px';
				else this.inputSize = ((val.length + 1) * 9) + 'px';
			}
		},
		methods: {
			addTag() {
				if (this.newTag.startsWith(" ")) {
					this.newTag = "";
					return false;
				}
				this.errorMessage = null;
				if (this.newTag != "") {
					if (this.tags.length > 0) {
						let alreadyPresent = this.tags.filter((tag) => tag.name == this.newTag.trim()).length > 0;
						if (alreadyPresent) {
							this.errorMessage = "Le tag est déjà présent !";
							this.newTag = "";
							return false;
						}
					}
					this.tags.push({name: this.newTag.trim().split(' ').join('/'), index: this.tags.length});
					this.newTag = "";
				}
			},
			removeTag(i) {
				this.tags = this.tags.filter((tag) => tag.index != i);
			},
			removeLastTag() {
				if (this.newTag == "") {
					this.tags.pop();
				}
			}
		}
	}
</script>
