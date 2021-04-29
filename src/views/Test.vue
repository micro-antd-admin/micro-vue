<template>
  <div class="home">
    组件库测试：
    <a-date-picker />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted () {
    console.log('vue 微应用测试页面', this.$route)
  }
}
</script>
