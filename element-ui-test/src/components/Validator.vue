<template>
<div>
  <el-form ref="form"
           :model="user"
           label-width="80px"
           label-position="left"
           :rules="formRules"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="user.username" placeholder="请输入用户名" ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" placeholder="请输入密码" ></el-input>
    </el-form-item>
    <el-form-item align="left" >
      <el-button type="primary" @click="handleSubmit">登入</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "Validator",
  methods:{
    handleSubmit(){
      this.$refs["form"].validate((valid)=>{
        if(valid){
          alert("通过");
        }
        else {
          alert("错误");
        }
      })
    }
  },
  data(){
    return {
      user:{
        username:"",
        password:""
      },
      formRules:{
        username:[
          {required:true,message:"用户名不能为空",trigger:"blur"},
          {min:3,max:5,message: "用户名要在3-5之间",trigger: "blur"}
        ],
        password:[
          {required:true,message:"密码不能为空",trigger:"blur"}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
