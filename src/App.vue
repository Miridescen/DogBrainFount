<template>
  <!--<el-scrollbar style="height: 100%">-->
    <div id="app">
      <!--<img src="./assets/logo.png">-->
      <router-view/>
    </div>
  <!--</el-scrollbar>-->

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  @import "common/common.css";

#app {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0;
  min-height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
