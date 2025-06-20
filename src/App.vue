<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  font-family: 'Helvetica Neue';
  font-feature-settings: 'tnum';
  .size;

  #app {
    .size;
  }
}

// 模版消息时间选择隐藏时分秒
.pickerDeleteMinutes {
  .el-time-spinner__wrapper:nth-of-type(2) {
    display: none !important;
  }

  .el-time-spinner__wrapper {
    width: 100%;
  }
}
</style>
