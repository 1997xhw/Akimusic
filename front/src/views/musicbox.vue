<template>
  <div class="musicbox">
    <div class="musicinput" style="margin-top: 15px;">
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-select
          v-model="value1"
          multiple
          slot="prepend"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicbox",
  data() {
    return {
      value1: [],
      options: [
        {
          value: "qq音乐",
          label: "qq"
        },
        {
          value: "网易云",
          label: "netease"
        },
        {
          value: "虾米",
          label: "xiami"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
