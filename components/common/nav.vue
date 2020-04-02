<template>
  <div class="main-nav">
    <span>{{propTitle[0]}}</span>
    <span>&nbsp;>&nbsp;</span>
    <span>{{propTitle[1]}}</span>
  </div>
</template>
<script>
export default {
  props: ["propTitle"]
};
</script>