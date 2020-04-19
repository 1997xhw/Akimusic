<template>
  <div>
    <el-container>
      <el-scrollbar>
        <el-main height="200px">
          <!--        <el-scrollbar style="overflow:auto">-->
          <el-row v-if="this.musicList.length > 0">
            <el-col :span="24" v-for="(music, index) of musicList" :key="index">
              <div class="musicgrid">
                <el-card
                  shadow="hover"
                  @mouseenter.native="enter(index)"
                  @mouseleave.native="leave"
                >
                  <span class="logo"
                    ><img :src="logo(music.source)" style="width: 15%;"
                  /></span>
                  <span class="songname">{{ music.songname }}</span>
                  <span class="singer">{{ music.singers }}</span>
                  <span class="album" v-if="music.album">{{
                    music.album
                  }}</span>
                  <span class="album" v-else>无</span>
                  <span class="ext">{{ music.ext }}</span>
                  <span class="filesize">{{ music.filesize }}</span>
                  <div class="tool" v-show="toolVisible && toolIndex === index">
                    <a
                      :href="music.download_url"
                      download="adasd.mp3"
                      target="_blank"
                    >
                      <el-button type="text" class="download"
                        ><img
                          src="../assets/toolLogo/下载2.png"
                          style="width: 32%"
                      /></el-button>
                    </a>
                    <el-button
                      type="text"
                      class="play"
                      @click.native="play(music)"
                      ><img
                        src="../assets/toolLogo/播放2.png"
                        style="width: 32%"
                    /></el-button>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
          <!--        </el-scrollbar>-->
        </el-main>
      </el-scrollbar>
    </el-container>
  </div>
</template>

<script>
import saveAs from "file-saver";
// import music from "./music";
export default {
  name: "musiclist",
  data() {
    return {
      toolVisible: false,
      toolIndex: 0,
      logoLib: {
        xiami: "../assets/musicLogo/xiami.png",
        baiduFlac: "../assets/musicLogo/baiduFlac.png",
        kugou: "../assets/musicLogo/kugou.png",
        kuwo: "../assets/musicLogo/kuwo.png",
        qq: "../assets/musicLogo/qq.png",
        netease: "../assets/musicLogo/netease.png"
      }
    };
  },
  props: ["musicList"],
  methods: {
    handleDownload(music) {
      // var FileSaver = require("file-saver");
      this.getBlob(music.download_url).then(blob => {
        saveAs(blob, music.songname);
      });
      return false;
    },
    getBlob(url) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }
        };
        xhr.send();
      });
    },
    play(music) {
      this.$emit("play", music);
    },
    down(url) {
      console.log(url);
      var FileSaver = require("file-saver");
      FileSaver.saveAs(url);
      // window.open(url);
    },
    enter(index) {
      this.toolVisible = true;
      this.toolIndex = index;
    },
    leave() {
      this.toolVisible = false;
    },
    logo(source) {
      return require("../assets/musicLogo/" + source + ".png");
    }
  },
  computed: {
    // logo(source) {
    //   return require(this.logoLib(source));
    // }
  },
  components: {
    // music
  },
  watch: {
    // toolVisible(value){
    //   // console.log(value);
    // },
    musicList(value) {
      this.musicList = value;
      console.log(this.musicList);
    }
  }
};
</script>

<style scoped></style>
