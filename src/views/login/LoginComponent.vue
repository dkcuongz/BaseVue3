<template src="./LoginComponent.html"></template>
<style lang='scss' scoped src="./LoginComponent.scss"></style>
<script>
import {RepositoryFactory} from "../../repository/RepositoryFactory";

const loginRepository = RepositoryFactory.get('login')
export default {
  name: 'Login',
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
        remember: false,
      }
    }
  },
  methods: {
    async onSubmit() {
      const data = await this.login()
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('isLogin', true);
        await this.$router.push({name: 'home'})
      }
    },
    async login() {
      return await loginRepository.login().catch(() => ({}));
    }
  },
};
</script>
