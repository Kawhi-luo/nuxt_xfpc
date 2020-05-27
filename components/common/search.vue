<template>
  <div>
    <el-input
      clearable
      :placeholder="propHolder"
      v-model="searchContent"
      class="input-with-select"
      @keyup.native.enter="postSearch()"
    >
      <el-button slot="append" icon="el-icon-search" @click="postSearch()"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  props: {
    propHolder: String
  },
  data() {
    return {
      searchContent: ""
    };
  },
  methods: {
    postSearch() {
      this.$emit("getSearch", this.searchContent);
    }
  }
};
</script>