<template>
  <div class="info">
    <p class="name">{{label}}：</p>
    <p class="val">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: [String],
    text: [String]
  }
}
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  display: flex;
  padding: 5px 0;
  .name {
    color: #333;
  }
  .val {
    color: rgb(226, 60, 60);
  }
}
</style>