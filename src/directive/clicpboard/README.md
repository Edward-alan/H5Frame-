# 功能

>点击组件，复制文本到系统粘贴板

# 用法

```
<template>
  <div class="app-container">
    <input v-model="inputData" placeholder="Please input" />
    <button
      v-clipboard:copy="inputData"
      v-clipboard:success="clipboardSuccess"
      v-clipboard:error="clipboardError"
    >copy</button>
  </div>
</template>

<script>
import clipboard from '@/directive/clicpboard/index';

export default {
  name: 'Clipboard',
  directives: {
    clipboard,
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
```