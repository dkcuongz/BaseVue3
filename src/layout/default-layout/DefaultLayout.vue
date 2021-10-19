<template src="./DefaultLayout.html"></template>
<style lang='scss' scoped src="./DefaultLayout.scss"></style>
<script>
import SideMenuComponent from "./side-menu/SideMenuComponent";
import {USER} from '../../mixins/index'

export default {
  components: {
    SideMenuComponent
  },
  data() {
    return {
      currentUser: {},
      dropdownIsOpen: false,
      isShowSideBar: false,
    }
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    showDropDown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    },
    hideDropDown() {
      this.dropdownIsOpen = false
    },
    showSideBar() {
      this.isShowSideBar = !this.isShowSideBar;
    },
    getCurrentUser() {
      this.currentUser = JSON.parse(USER.getCurrentUser());
    },
    logOut() {
      //TODO logout
      localStorage.removeItem('user');
      localStorage.removeItem('isLogin');
    }
  },

}
</script>
