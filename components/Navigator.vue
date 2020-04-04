<template>
  <nav>
    <div v-for="(item,key) in navList" @click="currentNav = item.route" :key="key" class="nav-item">
      <nuxt-link
        :class="{active:currentNav===item.route}"
        :to="{ name: item.route }"
        :title="item.text"
        v-text="item.text"
      />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          text: '个人主页',
          route: 'index'
        },
        {
          text: '学习笔记',
          route: 'study_note'
        },
        {
          text: '练习记录',
          route: 'practice'
        }
      ],
      currentNav: 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  .nav-item a {
    width: 100px;
    height: 30px;
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.active {
      color: #d7ab70;
      border-bottom: 1px solid #d7ab70;
    }
  }
}
</style>