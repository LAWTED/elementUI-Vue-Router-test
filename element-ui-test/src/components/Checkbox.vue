<template>
  <div>
  <el-row :gutter="10">
    <el-checkbox v-model="favorites" :label="1">抽烟</el-checkbox>
    <el-checkbox v-model="favorites" :label="2">喝酒</el-checkbox>
    <el-checkbox v-model="favorites" :label="3">烫头</el-checkbox>
    <el-checkbox v-model="favorites" disabled>学习</el-checkbox>
  </el-row>
  <el-row :gutter="10">
    <el-checkbox-group v-model="favorite">
      <el-checkbox v-for="dos in dothings" :label="dos"  :disabled="dos === '学习'" :key="key">{{dos}}</el-checkbox>
    </el-checkbox-group>
  </el-row>

  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data(){
    return {
      favorites:[1,2,3],
      favorite:["喝酒","烫头"],
      dothings:["抽烟","喝酒","烫头","学习"]
    }
  }
}
</script>

<style scoped>

</style>
