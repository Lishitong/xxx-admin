<template>
  <el-scrollbar v-if="!isMobile">
    <el-container class="container">
      <el-container>
        <el-header>
          <HeaderTemplate />
        </el-header>
        <el-main>
          <MainTemplate />
        </el-main>
      </el-container>
    </el-container>
  </el-scrollbar>

  <el-empty v-else description="移动端研发中..."></el-empty>
</template>

<script>
import MainTemplate from "components/Main/index.vue";
import HeaderTemplate from "components/Header/index.vue";
import { computed } from "vue";
export default {
  components: {
    MainTemplate,
    HeaderTemplate,
  },
  setup() {
    const isMobile = computed(() =>
      /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    );

    return {
      isMobile,
    };
  },
};
</script>

<style lang="less" >
.container {
  height: 100%;
}
</style>
