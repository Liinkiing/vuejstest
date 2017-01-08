<template>
	<div class="input-tags">
		<div class="input-wrapper" @click="focusInput">
			<transition-group name="slide-left" tag="p">
				<span @dbclick="editTag(tag.index)" class="tag" v-for="tag in tags" :key="tag">#{{tag.name}}<i @click="removeTag(tag.index)">x</i></span>
			</transition-group>
			<input type="text" v-model="newTag" :value="newTag" @keyup.enter.space="addTag()" @keyup.escape="removeLastTag()" :style="style">
		</div>
		<transition name="fade-blur">
			<div v-if="errorMessage != null"><span style="color: red; margin-top: 10px; display: inline-block;">{{errorMessage}}</span></div>
		</transition>
	</div>
</template>
<style lang="scss" src="./tags.scss">
</style>
<script>
	export default {
		props: {
			max: {default: null}
		},
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
				messageErrorIntervalID: null
			}
		},
		watch: {
			newTag(val) {
				if (val.length >= 0 && val.length <= 4 ) this.inputSize = '50px';
				else this.inputSize = ((val.length + 1) * 10) + 'px';
			}
		},
		methods: {
			unsetSetError() {
				if(this.messageErrorIntervalID) window.clearInterval(this.messageErrorIntervalID);
					this.messageErrorIntervalID = setInterval(() => {
						console.log('call erreur');
						this.errorMessage = null;
						window.clearInterval(this.messageErrorIntervalID);
					}, 4000);
			},
			focusInput() {
				this.$el.querySelector('input').focus();
			},
			addTag() {
				console.log('add tag');
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
							this.unsetSetError();
							this.newTag = "";
							return false;
						}
						if(this.max && this.tags.length >= this.max) {
							this.errorMessage = `Vous pouvez entrer ${this.max} tags maximum !`;
							this.unsetSetError();
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
				console.log('bacj');
				if (this.newTag == "") {
					this.tags.pop();
				}
			}
		}
	}
</script>
