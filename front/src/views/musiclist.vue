<template>
  <div>
    <el-container>
      <el-main height="200px">
        <el-row v-if="this.musicList.length > 0">
          <el-col :span="24" v-for="(music, index) of musicList" :key="index">
            <div class="musicgrid">
              <el-card shadow="hover">
                <img :src="logo(music.source)" class="logo" />
                <span class="singer">{{ music.singers }}</span>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "musiclist",
  data() {
    return {
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
    logo(source) {
      return require("../assets/musicLogo/" + source + ".png");
    }
  },
  computed: {
    // logo(source) {
    //   return require(this.logoLib(source));
    // }
  },
  watch: {
    musicList(value) {
      this.musicList = value;
      console.log(this.musicList);
    }
  }
};
</script>

<style scoped></style>
