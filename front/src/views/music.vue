<template>
  <div class="music-player">
    <el-row>
      <el-col :span="4">
        <el-popover placement="top-start" trigger="hover">
          <div style="text-align: center">
            <el-progress
              color="#67C23A"
              type="circle"
              :percentage="music.volume"
            ></el-progress
            ><br />
            <el-button
              @click="changeVolume(-10)"
              icon="el-icon-minus"
              circle
            ></el-button>
            <el-button
              @click="changeVolume(10)"
              icon="el-icon-plus"
              circle
            ></el-button>
          </div>
          <el-button
            @click="play"
            id="play"
            slot="reference"
            :icon="music.isPlay ? 'el-icon-refresh' : 'el-icon-caret-right'"
            circle
          ></el-button>
        </el-popover>
      </el-col>
      <el-col :span="14" style="padding-left: 20px">
        <el-slider
          @change="changeTime"
          :format-tooltip="formatTime"
          :max="music.maxTime"
          v-model="music.currentTime"
          style="width: 100%;"
        ></el-slider>
      </el-col>
      <el-col
        :span="6"
        style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px"
      >
        {{ formatTime(music.currentTime) }}/{{ formatTime(music.maxTime) }}
      </el-col>
    </el-row>
    <!--      controls-->
    <!--      controlslist="download"-->
      <a :href="this.url" v-show="!controls.noDownload" target="_blank" class="download" download>下载</a>
    <audio
      ref="music"
      loop
      autoplay
      :src="this.url"

      @pause="onPause"
      @play="onPlay"
    >
      <source type="audio/mpeg" />
    </audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      controls: "",
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 0,
        volume: 100
      }
    };
  },
  props: ["musicData"],
  mounted() {
    this.$nextTick(() => {
      setInterval(this.listenMusic, 1000);
    });
  },
  watch: {
    musicData: {
      handler() {
        this.url = this.musicData.download_url;
        console.log(this.url);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    goplay() {
      this.$refs.audio.play();
    },
    // 暂停音频
    gopause() {
      this.$refs.audio.pause();
    },
    onPlay() {
      this.audio.playing = true;
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },

    listenMusic() {
      // console.log(this.$refs.music);
      if (!this.$refs.music) {
        return;
      }
      if (this.$refs.music.readyState) {
        this.music.maxTime = this.$refs.music.duration;
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.music.currentTime = this.$refs.music.currentTime;
    },
    play() {
      if (this.$refs.music.paused) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.$nextTick(() => {
        document.getElementById("play").blur();
      });
    },
    changeTime(time) {
      this.$refs.music.currentTime = time;
    },
    changeVolume(v) {
      this.music.volume += v;
      if (this.music.volume > 100) {
        this.music.volume = 100;
      }
      if (this.music.volume < 0) {
        this.music.volume = 0;
      }
      this.$refs.music.volume = this.music.volume / 100;
    },
    formatTime(time) {
      let it = parseInt(time);
      let m = parseInt(it / 60);
      let s = parseInt(it % 60);
      return (
        (m < 10 ? "0" : "") +
        parseInt(it / 60) +
        ":" +
        (s < 10 ? "0" : "") +
        parseInt(it % 60)
      );
    }
  }
};
</script>
