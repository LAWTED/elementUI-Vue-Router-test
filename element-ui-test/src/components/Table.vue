<template>
  <div>
    <el-row :gutter="10">
     <el-col :span="6">
       <el-button type="primary" @click="handleSelect">获取选中的行</el-button>
     </el-col>
    </el-row>
    <el-table
      ref="table"
      :data="tableData"
      :stripe="true"
      height="300px"
      width="100px"
      style="width: 100%"
    @selection-change="handleSelectChange">
      <el-table-column
        header-align="center"
        align="center"
        type="selection"
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>

      <el-table-column
      header-align="center"
      align="center"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" size="mini">更新</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleRemove(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name:"Table",
  methods:{
    handleRemove(value){
      console.log(value);
    },
    handleSelectChange(value){
      //console.log(value);
      this.selections = value;
    },
    handleSelect(){
      console.log(this.selections);
    }
  },
  data() {
    return {
      selections:[],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
