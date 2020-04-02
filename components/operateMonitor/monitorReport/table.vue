<template>
  <div class="monitor-report-table">
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'alarmAuto'"
    >
      <el-table-column align="center" label="设备ID" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="设施名称" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.deviceName || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="设施类型" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.deviceTypeName || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="设施位置" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.deviceAddress || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="运行状态" show-overflow-tooltip>
        <template slot-scope="scope">
        <span v-if="scope.row.onlineState!=='1'">--</span>
        <span v-else>
            <span v-if="scope.row.runState == '0'">正常</span>
            <span v-else-if="scope.row.runState == '1'">报警</span>
            <span v-else-if="scope.row.runState == '2'">故障</span>
            <span v-else-if="scope.row.runState == '5'">异常</span>
            <span v-else>其他</span>
        </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="主机回路点位" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.laMake || ''}}-{{scope.row.laLoop || ''}}-{{scope.row.laPoint || ''}}</template>
      </el-table-column>
      <el-table-column align="center" label="信号最后上传时间" show-overflow-tooltip>
        <template slot-scope="scope">
            <span v-if="scope.row.onlineState !== '0'">--</span>
            <span v-else>{{(scope.row.lastOnlineTime.substring(5,16).replace("-","/")) || '--'}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'userInfo'"
    >
      <el-table-column align="center" label="用户">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'uncomEle'"
    >
      <el-table-column align="center" label="独立电气">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'waterMonitor'"
    >
      <el-table-column align="center" label="水">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'uncomMonitor'"
    >
      <el-table-column align="center" label="独立监测">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'fireDoor'"
    >
      <el-table-column align="center" label="防火门">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'eleFire'"
    >
      <el-table-column align="center" label="电气">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      stripe
      border
      v-show="tableType === 'gasFire'"
    >
      <el-table-column align="center" label="气体">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
      <el-table-column align="center" label="火灾">
        <template slot-scope="scope">{{scope.row.deviceId || '--'}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    props: ["tableData","tableType"],
  data() {
    return {};
  },
  created() {},
  mounted() {
      console.log(this.tableType);
  },
  methods: {}
};
</script>
<style scoped lang="less">
</style>