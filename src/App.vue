<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();
const role = computed(() => store.state.user.loginUser.role);

router.beforeEach((to, from, next) => {
  //🈲管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (role = "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
