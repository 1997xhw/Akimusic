<template>
  <div class="container-box">
    <div class="loading" v-if="loading"><timeLoading></timeLoading></div>
    <el-container direction="vertical">
      <el-header>
        <headerr></headerr>
      </el-header>
      <el-main>
        <musicbox class="musicbox" @load="load"></musicbox>
        <musiclist></musiclist>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import headerr from "./header.vue";
import musicbox from "./musicbox.vue";
import timeLoading from "./timeLoading";
import musiclist from "./musiclist";
export default {
  name: "Akimusic",
  components: {
    headerr,
    musicbox,
    timeLoading,
    musiclist
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    load(loading){
      this.loading = loading;
    }
  },
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
