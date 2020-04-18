<template>
  <div class="container-box">
    <div class="loading" v-if="loading"><timeLoading></timeLoading></div>
    <el-container direction="vertical">
      <el-header>
        <headerr></headerr>
      </el-header>
      <el-main>
        <musicbox class="musicbox" @load="load" @pulldata="pulldata"></musicbox>
        <musiclist class="musiclist" :musicList="musicList"></musiclist>
      </el-main>
      <el-footer height="40px" class="footer"></el-footer>
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
      loading: false,
      musicList: []
    };
  },
  methods: {
    load(loading) {
      this.loading = loading;
    },
    pulldata(data) {
      this.musicList = data;
      // console.log(data);
    }
  }
};
</script>

<style type="text/css">
/*#app,*/
/*html,*/
/*body,*/
/*.el-container {*/
/*  padding: 0px;*/
/*  margin: 0px;*/
/*  height: 100%;*/
/*  text-align: center;*/
/*}*/
</style>
