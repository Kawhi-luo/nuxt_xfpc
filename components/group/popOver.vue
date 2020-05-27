<!--集团页弹窗 调试用a-->
<template>
  <div style="background:#f00" @click="to_detail()">
    <div>{{propComInfo.orgName}}</div>
    <div>{{propComInfo.subCenterCode}}</div>
    <div>{{propComInfo.dutyTel}}</div>
    <div>{{propComInfo.contacts}}</div>
    <div>{{propComInfo.address}}</div>
    <div>{{propComInfo.alarmCount}}</div>
    <div>{{propComInfo.warningCount}}</div>
    <div>{{propComInfo.troubleCount}}</div>
    <div>{{propComInfo.abnormalCount}}</div>
  </div>
</template>
<script>
export default {
  props: {
    propComInfo: Object
  },
  methods: {
      to_detail() {
          console.log(111)
      }
  }
};
</script>