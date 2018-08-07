<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="content">
      <!-- 页面切换过度状态 -->
      <transition name="move" mode="out-in">
        <router-view>
        </router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import vHead from "./Header.vue";
export default {
  name: "Home",
  components: {
    vHead
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.content {
  border: 1px solid #409eff;
  width: 1200px;
  margin: auto;
  margin-top: 60px;
  padding: 20px 0;
  height: 600px;
}
</style>
