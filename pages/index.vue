<template>
  <section>
    <Card />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/index/Card'
export default {
  components: {
    Logo,
    Card
  },
  mounted() {
    console.log('axiso', this.$axios)
    this.$axios
      .get('//tuser.hundun.cn/get_user_info?phone=18618322994')
      .then(({ data: res }) => {
        console.log(res.data)
      })
  },
  data() {
    return {
      tab: 'home'
    }
  },
  methods: {
    name() {}
  },
  asyncData(ctx) {
    console.log('ctx', ctx)
  }
}
</script>

<style lang="scss">
</style>
