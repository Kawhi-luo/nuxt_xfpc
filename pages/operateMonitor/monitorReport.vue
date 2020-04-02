<template>
  <div class="monitor-report">
    <v-nav :propTitle="propTitle" />
    <el-tabs
      class="table-tabs"
      type="border-card"
      @tab-click="tabChange"
      v-model="deviceTypePId_active"
    >
      <el-tab-pane
        v-for="item in tabs"
        :key="item.deviceTypePKey"
        :label="item.deviceTypePName"
        :name="item.deviceTypePKey"
      >
        <div class="main-select flex-middle flex-between">
          <div>
            <span>{{item.deviceTypePName}}:</span>
            <span>{{totalNum}}</span>
          </div>
          <div class="flex-middle">
            <div class="select-label">设备类型：</div>
            <el-select v-model="deviceTypeId_active" placeholder="请选择类型" @change="secType_change">
              <el-option
                v-for="slip in typeOptions"
                :label="slip.label"
                :value="slip.value"
                :key="slip.value"
              ></el-option>
            </el-select>
            <div class="select-label">运行状态：</div>
            <el-select v-model="runState_active" placeholder="请选择状态" @change="runState_change">
              <el-option
                v-for="slip in runOptions"
                :label="slip.label"
                :value="slip.value"
                :key="slip.value"
              ></el-option>
            </el-select>
            <search propHolder="请输入设备ID" @getSearch="getSearch" class="main-search" />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="table-content-tabs">
      <v-table
        :tableData="tableData"
        :tableType="deviceTypePId_active"
        v-loading="isLoading"
        ref="mainTable"
        class="main-table"
      />
      <el-pagination
        class="main-paginate"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </div>
</template>
<script>
import deviceJSON from "~/assets/json/device.json";
import VNav from "~/components/common/nav.vue";
import search from "~/components/common/search.vue";
import VTable from "~/components/operateMonitor/monitorReport/table.vue";
export default {
  components: {
    VNav,
    search,
    VTable
  },
  data() {
    return {
      propTitle: ["运行监测", "监测报表"],
      tableData: [],
      total: 0,
      currentPage: 0,
      pageSize: 0,
      isLoading: Boolean,
      // 一类设备选项卡
      tabs: [
        {
          deviceTypePId: "02000000",
          deviceTypePName: "火灾自动报警装置",
          deviceTypePKey: "alarmAuto"
        },
        {
          deviceTypePId: "19000000",
          deviceTypePName: "用户信息传输装置",
          deviceTypePKey: "userInfo"
        },
        {
          deviceTypePId: "19000000",
          deviceTypePName: "独立式电气火灾监测",
          deviceTypePKey: "uncomEle"
        },
        {
          deviceTypePId: "19000000",
          deviceTypePName: "消防供水监测",
          deviceTypePKey: "waterMonitor"
        },
        {
          deviceTypePId: "19000000",
          deviceTypePName: "独立式监测设备",
          deviceTypePKey: "uncomMonitor"
        },
        {
          deviceTypePId: "19000000",
          deviceTypePName: "防火门监测",
          deviceTypePKey: "fireDoor"
        },
        {
          deviceTypePId: "03000000",
          deviceTypePName: "电气火灾监测系统",
          deviceTypePKey: "eleFire"
        },
        {
          deviceTypePId: "09000000",
          deviceTypePName: "气体灭火控制系统监测点位",
          deviceTypePKey: "gasFire"
        }
      ],
      // 总数
      totalNum: 0,
      // 一类框选中
      deviceTypePId_active: "",
      // 二类选择框
      typeOptions: [],
      // 二类框选中
      deviceTypeId_active: "",
      // 运行状态选中
      runState_active: "",
      // 运行状态选择
      runOptions: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "0",
          label: "正常"
        },
        {
          value: "98",
          label: "预警"
        },
        {
          value: "2",
          label: "故障"
        },
        {
          value: "5",
          label: "异常"
        },
        {
          value: "3",
          label: "其他"
        }
      ]
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
    // 一类切换
    tabChange(tab) {
      this.typeOptions = deviceJSON[tab.name];
      this.deviceTypeId_active = this.typeOptions[0].value;
      this.tableRead();
    },
    // 二类切换
    secType_change() {
      this.tableRead();
    },
    // 运行状态切换
    runState_change() {
      this.tableRead();
    },
    // 数据表格
    tableRead() {
      this.isLoading = true;
      let Pid;
      for (let i of this.tabs) {
        if (this.deviceTypePId_active === i.deviceTypePKey) {
          Pid = i.deviceTypePId;
        }
      }
      this.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/event/unit/monitor/getDevicePageByCondition",
          params: {
            pageNo: this.currentPage,
            pageSize: this.pageSize,
            unitId: "AHHF_QHHFY_20180408",
            subCenterCode: "340100YYZX201805230001",
            deviceTypePid: Pid,
            buildId: "",
            deviceTypeId: this.deviceTypeId_active,
            runState: this.runState_active,
            deviceAddress: this.searchContent
          }
        })
        .then(res => {
          if (res.data && res.data.code === "success") {
            this.totalNum = res.data.data.total;
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
    this.deviceTypePId_active = "alarmAuto";
    this.typeOptions = deviceJSON.alarmAuto;
    this.deviceTypeId_active = this.typeOptions[0].value;
    this.pageSize = parseInt(($(".main-table").height() - 40) / 50);
    this.tableRead();
  }
};
</script>
<style lang="less" scoped>
</style>
<style lang="less">
.monitor-report {
  .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }
}
</style>