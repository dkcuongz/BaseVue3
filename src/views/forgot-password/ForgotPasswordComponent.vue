<template src="./ForgotPasswordComponent.html"></template>
<style lang='scss' scoped src="./ForgotPasswordComponent.scss"></style>
<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      formReset: {
        password: '',
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
