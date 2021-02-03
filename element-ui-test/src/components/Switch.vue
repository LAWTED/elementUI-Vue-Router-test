<template>
<div>
  <el-row :gutter="10">
   <el-col :span="6">
     <el-switch v-model="value" active-color="#13ce66" :active-value="100" :inactive-value="0" ></el-switch>
   </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Switch",
  data(){
    return {
      value: 100
    }
  },
  methods :{
    handleSwitch(value){
      alert(value);
    }
  }
}
</script>

<style scoped>

</style>
