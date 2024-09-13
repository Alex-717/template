<template>
  <Card class="mb-5 mt-5 ml-5 mr-5" title="筛选器">

    <Row>
      <Col :span="12">col-12</Col>
      <Col :span="12">col-12</Col>
    </Row>

    <Space class="flex flex-row justify-center">      
      <Button size="large">取消</Button>
      <Button type="primary" size="large" class="ml-5">搜索</Button>
    </Space>
  </Card>

  <Card class="mb-5 mt-5 ml-5 mr-5" title="搜索列表">

  </Card>
</template>

<script setup lang="ts">
import { Page } from '@vben/common-ui'
import { Button, Card, message, Space, Row, Col } from 'ant-design-vue';
</script>

<style lang="scss" scoped>

</style>