<template>
  <div class="user">
    <el-avatar size="small" :src="circleUrl"></el-avatar>
    <div>{{ userName }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const circleUrl = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    );
    let userName = ref("测试");

    return {
      circleUrl,
      userName,
    };
  },
};
</script>

<style lang="less" >
.user {
  display: flex;
  margin-top: 16px;
  height: 28px;
  line-height: 28px;

  div {
    margin-left: 10px;
  }
}
</style>