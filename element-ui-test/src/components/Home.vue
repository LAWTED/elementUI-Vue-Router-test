<template>
<div>
  <el-container>
    <el-header>2021年1月8日学习</el-header>
    <el-container>
      <el-aside>
        <ul>
          <li v-for="link in links" :key="link.path">
            <router-link :to="link.path">{{link.name}}</router-link>
          </li>
        </ul>

      </el-aside>
      <el-main>
      <router-view></router-view>
      </el-main>
    </el-container>

    <el-footer>footer</el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      links:[
        {name:"Layout",path:"/layout"},
        {name:"Button",path:"/button"},
        {name:"Icon",path:"/icon"},
        {name:"Input",path:"/input"},
        {name:"Form",path:"/form"},
        {name:"Radio",path:"/radio"},
        {name:"Checkbox",path:"/checkbox"},
        {name:"Switch",path:"/switch"},
        {name:"Select",path:"/select"},
        {name:"Cascader",path:"/cascader"},
        {name:"Datepicker",path:"/datepicker"},
        {name:"Validator",path:"/validator"},
        {name:"Testform",path:"/testform"},
        {name:"Table",path:"/table"},
        {name:"Pagination",path:"/pagination"},
        {name:"Dialog",path:"/dialog"}

      ]
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 30px 30px 0px 0px ;
}
.el-footer{
  border-radius: 0px 0px 30px 30px ;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;

  line-height: 50px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
