<template>
  <div>
    <v-nav :propTitle="propTitle" />
    <div class="main-select flex-middle flex-between">
      <div />
      <search propHolder="请输入消控室名称" @getSearch="getSearch" class="main-search" />
    </div>
    <div class="table-content-normal">
      <el-table
        :data="tableData"
        stripe
        ref="mainTable"
        class="main-table"
        v-loading="isLoading"
        border
      >
        <el-table-column align="center" label="消控室名称">
          <template slot-scope="scope">{{scope.row.roomName || '--'}}</template>
        </el-table-column>
        <el-table-column align="center" label="计划名称">
          <template slot-scope="scope">{{scope.row.planName || '--'}}</template>
        </el-table-column>
        <el-table-column align="center" label="班次1">
          <template slot-scope="scope">{{scope.row.firstDuty || '--'}}</template>
        </el-table-column>
        <el-table-column align="center" label="班次2">
          <template slot-scope="scope">{{scope.row.secondDuty || '--'}}</template>
        </el-table-column>
        <el-table-column align="center" label="班次3">
          <template slot-scope="scope">{{scope.row.thirdDuty || '--'}}</template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="main-paginate"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
      />
    </div>
    <el-dialog title="班次设置" :visible.sync="dialogVisible" class="medium-dialog">
      <editDialog  />
    </el-dialog>
  </div>
</template>
<script>
import VNav from "~/components/common/nav.vue";
import search from "~/components/common/search.vue";
import editDialog from "~/components/checkPlan/checkRoom/edit.vue";
export default {
  components: {
    VNav,
    search,
    editDialog
  },
  data() {
    return {
      propTitle: ["巡查计划", "消控室值班"],
      tableData: [],
      isLoading: Boolean,
      total: 0,
      currentPage: 0,
      pageSize: 0,
      dialogVisible: false,
      searchContent: "",
    };
  },
  methods: {
    handleCurrentChange() {
      this.tableRead();
    },
    // 搜索
    getSearch(val) {
      this.searchContent = val;
      this.tableRead();
    },
    // 编辑
    edit(id) {
      this.dialogVisible = true;
      console.log(id);
    },
    // 数据表格
    tableRead() {
      this.isLoading = true;
      this.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/v2/controlroom/plan/list",
          params: {
            pageNo: this.currentPage,
            pageSize: this.pageSize,
            orgId: "AHHF_QHHFY_99999997",
            roomName: this.searchContent
          }
        })
        .then(res => {
          if (res.data && res.data.code === "success") {
            this.tableData = res.data.data.rows;
            this.total = res.data.data.total;
          } else {
            this.$message.error(res.data.message);
          }
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.pageSize = parseInt(($(".main-table").height() - 40) / 50);
    this.tableRead();
  }
};
</script>
<style lang="less" scoped>
</style>