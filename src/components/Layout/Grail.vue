<template>
  <el-card class="grail-wrap">
    <div>{{ title }}</div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <p class="grail-item" @click="handleToPath(item.path)">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </el-card>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  name: "GrailTemplate",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    list: {
      type: [Array, Object],
      default() {
        return [
          {
            id: Math.random(),
            path: "/",
            name: "默认链接",
          },
        ];
      },
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const handleToPath = (path) => {
      router.push({
        to: path,
        query: {
          from: route.path,
          timestamp: new Date().getTime(),
        },
      });
    };

    return { handleToPath };
  },
};
</script>

<style lang="less">
.grail-item {
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #409eff;
  }
}
</style>