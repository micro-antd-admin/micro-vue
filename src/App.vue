<template>
  <div id="app">
    <keep-alive>
      <router-view :key="this.$route.fullPath"/>
    </keep-alive>
  </div>
</template>
