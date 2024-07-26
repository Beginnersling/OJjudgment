<template>
  <!--    栅格布局-->
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
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
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.LoginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

//钩子函数快速使用
const store = useStore();

const router = useRouter();
//默认主页
const selectedKey = ref(["/"]);

//当用户刷新时，将有同步到菜单项
//获取路由信息
router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path];
});

//测试vuex的action
setTimeout(() => {
  //todo 调用不了action
  store.dispatch("user/getLoginUser", {
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
