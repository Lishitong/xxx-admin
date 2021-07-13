<template>
  <div class="header">
    <div class="placehodler"></div>
    <UserInfoTempalte />
  </div>
</template>

<script>
import UserInfoTempalte from "./userInfo.vue";
export default {
  components: {
    UserInfoTempalte,
  },
};
</script>

<style lang="less" >
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  .placehodler {
    width: 95%;
  }
}
</style>