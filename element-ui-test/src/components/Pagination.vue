<template>
<div>
  <el-pagination
    :page-size.sync="pageSize"
    :page-sizes="pageSizes"
    :current-page.sync="currentPage"
    :pager-count="pageCount"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    layout="sizes, prev, pager, next, jumper, ->, total, slot"
    :total="50">
  </el-pagination>
</div>
</template>

<script>
export default {
name: "Pagination",
  methods:{
    handleSizeChange(size){
      alert(size);
    },
    handleCurrentChange(page){
      alert(page);
    }
  },
  data(){
  return  {
    pageSize:2,
    pageSizes:[2,5,10,20,30],
    currentPage:3,
    pageCount:9
    }
  }
}
</script>

<style scoped>

</style>
