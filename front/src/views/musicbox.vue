<template>
  <div>
    <div class="musicinput">
      <el-input
        placeholder="请输入内容"
        v-model="musicname"
        prefix-icon="el-icon-search"
      >
        <!--        <el-button round slot="append" icon="el-icon-search"></el-button>-->
      </el-input>
      <el-button round @click="goSearch"><b>Search</b></el-button>
    </div>
    <div class="musicappselect">
      <el-checkbox-group
        v-model="targetsrcs"
        text-color="#FFFFFF"
        fill="#feba07"
      >
        <el-checkbox-button></el-checkbox-button>
        <el-checkbox-button label="netease">网易云</el-checkbox-button>
        <el-checkbox-button label="qq">QQ</el-checkbox-button>
        <el-checkbox-button label="xiami">虾米</el-checkbox-button>
        <el-checkbox-button label="baiduFlac">百度</el-checkbox-button>
        <el-checkbox-button label="kugou">酷狗</el-checkbox-button>
        <el-checkbox-button label="kuwo">酷我</el-checkbox-button>
        <el-checkbox-button label="migu">咪咕</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicbox",
  data() {
    return {
      loading: true,
      value1: [],
      musicname: "",
      targetsrcs: []
    };
  },
  components: {},
  methods: {
    goSearch() {
      var vm = this;
      // console.log(this.musicname);
      // console.log(this.targetsrcs);
      if (this.musicname !== "" && this.targetsrcs.length > 0) {
        var param = {
          musicname: this.musicname,
          targetsrcs: this.targetsrcs
        };
        vm.$emit("load", true);
        this.axios
          .post("music/", param)
          .then(response => {
            if (response.data.msg === "OK") {
              // console.log(response);
              vm.$emit("load", false);
              vm.$emit("pulldata", response.data.body.items);
            }
          })
          .catch(response => {
            vm.$emit("load", false);
            console.log(response);
          });
      }
    }
  }
};
</script>
<style scoped></style>
