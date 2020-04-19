<template>
  <div class="container-box">
    <div class="loading" v-if="loading"><timeLoading></timeLoading></div>
    <el-container direction="vertical">
      <el-header>
        <headerr></headerr>
      </el-header>
      <el-main>
        <musicbox class="musicbox" @load="load" @pulldata="pulldata"></musicbox>
        <musiclist
          class="musiclist"
          @play="play"
          :musicList="musicList"
        ></musiclist>
      </el-main>
<!--      <el-footer height="20px" class="footer">-->
        <!--        <music :musicData="musicData"></music>-->
<!--      </el-footer>-->
    </el-container>
  </div>
</template>

<script>
import headerr from "./header.vue";
import musicbox from "./musicbox.vue";
import timeLoading from "./timeLoading";
import musiclist from "./musiclist";
// import music from "./music";
export default {
  name: "Akimusic",
  components: {
    // music,
    headerr,
    musicbox,
    timeLoading,
    musiclist
  },
  data() {
    return {
      loading: false,
      musicData: {},
      musicList: []
    };
  },
  methods: {
    load(loading) {
      this.loading = loading;
    },
    play(music) {
      this.musicData = music;
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
.html,
.body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
