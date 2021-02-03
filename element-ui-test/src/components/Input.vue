<template>
  <div>
    <el-row :gutter="10">
      <el-input v-model="username" placeholder="请输入用户名"  type="text"></el-input>
      <el-input v-model="username" placeholder="请输入密码" show-password type="password"></el-input>
      <el-input v-model="username" placeholder="请输入备注"  type="textarea" :autosize="{minRows:4,maxRows:6}" :maxlength="100" show-word-limit></el-input>
    </el-row>

    <el-row :gutter="10" justify="space-around">
      <el-col :span="3">属性方式：</el-col>
      <el-col :span="6">
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="username">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="username">
        </el-input>
      </el-col>
    </el-row>
    <div>
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

  </div>
</template>

<script>
export default {
  name: "Input",
  data(){
    return{
      username:""
    }
  }
}
</script>

<style scoped>

</style>
