<template>
  <dlv class="container-box">
    <el-container direction="vertical">
      <el-header>
        <headerr></headerr>
      </el-header>
      <el-main><musicbox></musicbox></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </dlv>
</template>

<script>
import headerr from "./header.vue";
import musicbox from "./musicbox.vue";
export default {
  name: "Akimusic",
  components: {
    headerr,
    musicbox
  }
};
</script>

<style type="text/css">
#app,
html,
body,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
  text-align: center;
}
</style>
