<template>
  <div>

      <el-radio-group v-model="sex" @change="handleChange">
        <el-row :gutter="20" >
          <el-radio :label="1">男</el-radio>
        </el-row>
        <el-row :gutter="10">
          <el-radio :label="0">女</el-radio>
        </el-row>
      </el-radio-group>

  </div>
</template>

<script>
export default {
  name: "Radio",
  data(){
    return {
      sex:0
    }
  },
  methods:{
    handleChange(value){
      if(value===1){
        alert("是男孩");
      }
      else{
        alert("是女孩");
      }
    }
  }
}
</script>

<style scoped>
.el-row{
  margin: 20px;
}
</style>
