<template>
<div>
  <el-date-picker v-model="value" type="datetime"
                  placeholder="请选择日期时间" value-format="yyyy-MM-dd- HH:mm:ss"
                  @change="handleChange"></el-date-picker>
</div>
</template>

<script>
export default {
  name: "Datepicker",
  methods:{
    handleChange(value){
      //alert(value);
    }
  },
  data(){
    return {
      value:""
    }
  }
}
</script>

<style scoped>

</style>
