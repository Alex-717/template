<template>
  <Page>
    <Card :title="title">
    </Card>
  </Page>
</template>

<script setup lang="ts">
import { Page } from '@vben/common-ui'
import { Card } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isModify = !!route.meta.isModify // 是否是修改。不是修改就是新增
let modifyId = 0
if (isModify) {
  modifyId = route.params.id
  console.log('modifyId: ', modifyId)
}

function initPage () {
  if (isModify) {
    // TODO: 获取修改数据
  }
}
const title = computed(() => {
  return isModify ? '修改博客' : '新增博客'
});

initPage()

</script>

<style scoped>

</style>