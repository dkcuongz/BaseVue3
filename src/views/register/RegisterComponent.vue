<template src="./RegisterComponent.html"></template>
<style lang='scss' scoped src="./RegisterComponent.scss"></style>
<script>
export default {
  name: 'Register',
  data() {
    return {
      formRegister: {
        email: '',
        password: '',
        name: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    async onSubmit() {
      console.log('aa')
    },
  },
};
</script>
