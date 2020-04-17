<template>
  <div class="header-box">
    <div class="header-title">🎵 <b>Akimusic</b></div>
    <div class="header-login">
      <el-button type="primary" round><b>Login</b></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped>
.el-button {
  background: #5b24b2;
  /*border-radius: 20px;*/
  color: white;
  border: 0;
  /*box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.52);*/
}
.el-button:focus {
  color: white;
  background-color: #5b24b2;
  border-color: #5b24b2;
  /*box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);*/
}
.el-button:hover {
  color: white;
  background-color: #5b24b2;
  border-color: #5b24b2;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);
}
</style>
