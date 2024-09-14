<template>
  <Page>
    <Card title="筛选器">
      <Form :label-col="{ style: { width: '80px' }  }">
        <Row class="flex flex-row justify-between">
          <Col :span="11">
            <FormItem label="博客标题">
              <Input v-model:value="form.name" />
            </FormItem>
          </Col>
          <Col :span="11" class="ml-4">
            <FormItem label="创建日期">
              <Input v-model:value="form.date" />
            </FormItem></Col>
        </Row>
      </Form>

      <Space class="flex flex-row justify-center mt-2.5">      
        <Button type="primary" @click="newBlog">新增</Button>
        <Button type="primary" class="ml-5" @click="searchBlog">搜索</Button>
      </Space>
    </Card>

    <Card class="mt-3" title="搜索列表">
      <Table :columns="tableHead" :data-source="blogList" bordered>
        <template #action="{ record }">
          <Space>
            <Button type="primary" @click="modifyBlog(record)">修改</Button>
            <Button type="primary" danger @click="deleteBlog(record)">删除</Button>
          </Space>
        </template>
      </Table>
    </Card>

    <Modal
      title="Title"
      v-model:visible="modalVisible"
      :confirm-loading="confirmLoading"
      @ok="handleModalOk"
    >
      <p class="text-lg text-red-500 font-black">确认删除？</p>
    </Modal>
  </Page>
</template>

<script setup lang="ts">
import { Page } from '@vben/common-ui'
import { Button, Card, message, Space, Row, Col, Form, FormItem, Input, Table, Modal } from 'ant-design-vue';
import { ref, reactive } from 'vue'
import { useTips } from '#/hooks'
import { useRouter } from 'vue-router'

const router = useRouter()

const { showTips, showErrTips, showSuccTips } = useTips()

const form = ref({
  name: '测试',
  date: '2021-12-10'
})

const tableHead = reactive([
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '博客标题',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '创建日期',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
])
const blogList = reactive([
  {
    id: 1,
    key: '1',
    name: '测试',
    date: '2021-12-10',
  },
  {
    id: 2,
    key: '2',
    name: '测试',
    date: '2021-12-10',
  },
  {
    id: 3,
    key: '3',
    name: '测试',
    date: '2021-12-10',
  }
])

function newBlog () {
  console.log('newBlog')
  router.push({ path: '/blog/edit/new' })
}
function searchBlog () {
  console.log('searchBlog')
}
function modifyBlog (record) {
  console.log('modifyBlog')
  const { id } = record
  router.push({ path: '/blog/edit/modify/' + id })
}
function deleteBlog () {
  console.log('deleteBlog')
  modalVisible.value = true
}

const modalVisible = ref(false)
const confirmLoading = ref(false)

function handleModalOk () {
  confirmLoading.value = true
  setTimeout(() => {
    modalVisible.value = false
    confirmLoading.value = false
    showSuccTips('删除成功')
  }, 2000)
}

</script>

<style lang="scss" scoped>
</style>
