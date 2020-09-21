# 功能

>添加组件点击水波纹效果

# 用法

```
<template>
  <div class="app-container">
    <div class="btn" v-ware>click me</div>
  </div>
</template>

<script>
import ware from '@/directive/waves/index';

export default {
  name: 'Clipboard',
  directives: {
    ware,
  },
  data() {
    return {
      inputData: 'copy from leimon-project',
    };
  },
  methods: {
    clipboardSuccess() {
      console.log('复制成功');
    },
    clipboardError() {
      console.log('复制失败');
    },
  },
};
</script>

<style lang="less" scoped>
.btn{
  width: 100px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #333;
}
</style>
```