<template>
  <div>
    <el-row>
      <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
        <el-col :span="12">
          <el-form-item label="班次1开始时间">
            <el-time-picker
              v-model="formLabelAlign.time1_s"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班次1结束时间">
            <el-time-picker
              v-model="formLabelAlign.time1_e"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班次2开始时间">
            <el-time-picker
              v-model="formLabelAlign.time2_s"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班次2结束时间">
            <el-time-picker
              v-model="formLabelAlign.time2_e"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班次3开始时间">
            <el-time-picker
              v-model="formLabelAlign.time3_s"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="班次3结束时间">
            <el-time-picker
              v-model="formLabelAlign.time3_e"
              :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
              placeholder="任意时间点"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "center",
      formLabelAlign: {
        time1_s: "",
        time1_e: "",
        time2_s: "",
        time2_e: "",
        time3_s: "",
        time3_e: ""
      }
    };
  }
};
</script>