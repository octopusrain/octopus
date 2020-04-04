<template>
  <div class="card">
    <h3>个人信息</h3>
    <FormItem v-for="(item,key) in FormList" :label="item.label" :text="item.value" :key="key" />
  </div>
</template>

<script>
import FormItem from './FormItem'
export default {
  components: {
    FormItem
  },
  data() {
    return {
      FormList: [
        {
          label: '姓名',
          value: '张雨'
        },
        {
          label: '手机',
          value: '18618322994'
        },
        {
          label: '邮箱',
          value: '18604418448@163.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>