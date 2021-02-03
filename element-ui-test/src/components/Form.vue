<template>
  <div>
    <el-form ref="form" :model="user" label-width="80px" label-position="left">
      <el-form-item label="用户名">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item align="left" >
        <el-button type="primary">登入</el-button>
      </el-form-item>
    </el-form>

    <el-form ref="form" :model="user" label-width="80px" :inline="true" >
      <el-form-item label="用户名">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item align="left" >
        <el-button type="primary">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  }
}
</script>

<style scoped>

</style>
