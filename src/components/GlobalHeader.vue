<template>
  <!--    栅格布局-->
  <div id="globalHeader">
    <a-row style="margin-bottom: 16px" align="center">
      <a-col flex="auto">
        <div>
          <a-menu
            mode="horizontal"
            :selected-keys="selectedKey"
            @menu-item-click="doMenuClick"
          >
            <a-menu-item
              key="0"
              :style="{ padding: 0, marginRight: '38px' }"
              disabled
            >
              <div class="title-bar">
                <img class="logo" src="../assets/egg.jpg" />
                <div class="title">凌动OJ</div>
              </div>
            </a-menu-item>
            <a-menu-item v-for="item in visibleRoutes" :key="item.path">
              {{ item.name }}
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col flex="100px">
        <div>{{ username }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";

//钩子函数快速使用
const store = useStore();

const router = useRouter();
//默认主页
const selectedKey = ref(["/"]);

//展示的路由
const visibleRoutes = routes.filter((item, index) => {
  if (item.meta?.hideInMenu) {
    return false;
  }
  return true;
});

//当用户刷新时，将有同步到菜单项
//获取路由信息
router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path];
});

const username = computed(() => store.state.user.loginUser.userName);

//测试vuex的action
setTimeout(() => {
  //调用不了action 解决：通过钩子函数不能直接使用对应的state的值，添加computed后解决
  store.dispatch("getLoginUser", {
    username: "凌旭东",
    role: "admin",
  });
}, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

console.log();
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
//vue x
