<template>
  <div>
    <div class="musicinput">
      <el-input
        placeholder="请输入内容"
        v-model="musicname"
        prefix-icon="el-icon-search"
      >
      </el-input>
      <el-button round @click="dialogVisible = true" v-if="musicname"
        ><span><b>GO</b></span></el-button
      >
    </div>
    <!--    <div class="musicappselect">-->
    <!--      <el-checkbox-group-->
    <!--        v-model="targetsrcs"-->
    <!--        text-color="#FFFFFF"-->
    <!--        fill="#feba07"-->
    <!--      >-->
    <!--        <el-checkbox-button></el-checkbox-button>-->
    <!--        <el-checkbox-button label="netease">网易云</el-checkbox-button>-->
    <!--        <el-checkbox-button label="qq">QQ</el-checkbox-button>-->
    <!--        <el-checkbox-button label="xiami">虾米</el-checkbox-button>-->
    <!--        <el-checkbox-button label="baiduFlac">百度</el-checkbox-button>-->
    <!--        <el-checkbox-button label="kugou">酷狗</el-checkbox-button>-->
    <!--        <el-checkbox-button label="kuwo">酷我</el-checkbox-button>-->
    <!--        <el-checkbox-button label="migu">咪咕</el-checkbox-button>-->
    <!--      </el-checkbox-group>-->
    <!--    </div>-->
    <el-dialog title="请选择平台" :visible.sync="dialogVisible" center="true">
      <el-checkbox-group v-model="targetsrcs" size="mini" class="checkbox">
        <el-checkbox label="netease">网易云</el-checkbox>
        <el-checkbox label="qq">QQ</el-checkbox>
        <el-checkbox label="xiami">虾米</el-checkbox>
        <el-checkbox label="baiduFlac">百度</el-checkbox>
        <el-checkbox label="kugou">酷狗</el-checkbox>
        <el-checkbox label="kuwo">酷我</el-checkbox>
        <el-checkbox label="migu">咪咕</el-checkbox>
      </el-checkbox-group>
      <div class="sizeslide">
        <el-slider v-model="searchsize" max="50"></el-slider>
      </div>
      <span slot="footer">
        <el-button type="primary" @click="goSearch" v-if="targetsrcs.length>0">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "musicbox",
  data() {
    return {
      dialogVisible: false,
      loading: true,
      value1: [],
      musicname: "",
      targetsrcs: [],
      searchsize: 5,
    };
  },
  components: {},
  methods: {
    goSearch() {
      this.dialogVisible = false;
      var vm = this;
      // console.log(this.musicname);
      // console.log(this.targetsrcs);
      if (this.musicname !== "" && this.targetsrcs.length > 0) {
        var param = {
          musicname: this.musicname,
          targetsrcs: this.targetsrcs,
          searchsize: this.searchsize
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
