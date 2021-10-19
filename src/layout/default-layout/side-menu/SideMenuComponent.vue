<template src="./SideMenuComponent.html"></template>
<style lang='scss' scoped src="./SideMenuComponent.scss"></style>
<script>
import ItemsMenu from "./sidemenu"
import {ROLE} from '../../../constant/index'
import {USER} from '../../../mixins/index'

export default {
  name: "SideMenu",
  props: {
    isShowSideBar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: ItemsMenu,
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    checkRole(role) {
      const user = JSON.parse(USER.getCurrentUser());
      if (user.role === ROLE.ADMIN) return true
      return user.role === role;
    }
  }
}
</script>
