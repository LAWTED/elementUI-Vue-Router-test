<template>
<div>
  <el-form ref="form" :model="user" label-width="80px" :rules="formRules">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="user.age" placeholder="" type="number" class="age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="user.sex" prop="sex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="2">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="爱好">
      <el-checkbox-group v-model="favorite">
        <el-checkbox v-for="dos in dosList" :label="dos" :key="dos">{{dos}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="生日">
      <el-date-picker v-model="user.birthday" type="date" placeholder="请输入你的生日"></el-date-picker>
    </el-form-item>
    <el-form-item label="学历">
      <el-select v-model="user.education" placeholder="请输入你的学历">
        <el-option
          v-for="item in schools"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input v-model="user.description" placeholder="请输入自我介绍"></el-input>
    </el-form-item>
    <el-form-item align="left">
      <el-button type="primary" @click="handleClick">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
name: "testform",
  data(){
  return{
    user:{
      username:"",
      password:"",
      age:"",
      sex:"",
      birthday:"",
      education:"",
      description:""
    },
    dosList:["抽烟","喝酒","烫头"],
    favorite:[],
    schools:[{value:"1",label:"北京大学"},
             {value:"2",label:"清华大学"},
             {value:"3",label:"复旦大学"},
             {value:"4",label:"上海交通大学"},
      ],
    formRules:{
      username:[
        {required:true,message:"用户名不能为空",trigger:"blur"},
        {min:3,max:5,message: "用户名要在3-5之间",trigger: "blur"}
      ],
      password:[
        {required:true,message:"密码不能为空",trigger:"blur"}
      ],
      age:[
        {required:true,message:"年龄不能为空",trigger:"blur"}
      ],
      sex:[
        {required:true,message:"性别不能为空",trigger:"blur"}
      ],
   }
  }
},methods:{
    handleClick(){
      this.$refs["form"].validate((valid)=>{
        if(valid){
          alert("通过");
        }
        else {
          alert("错误");
        }
      })
    }
  }
  }
</script>

<style scoped>
.age{
  width: 80px;
  position: relative;
  text-align: left;
}
</style>
