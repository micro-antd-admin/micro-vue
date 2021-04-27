<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      模板项目已经集成了网络请求模块，并且支持使用Mock模拟API请求数据，当src/services/api.js 中配置的api路径能在 src/mock/api目录下面匹配到对应模拟API时，
      就不会发起真实的XHR请求, 而且匹配到对应<a target="_blank" href="https://github.com/nuysoft/Mock/wiki">MockJs</a>模拟api返回的模拟数据。
      api域名配置修改项目根目录对应环境变量.env 配置的VUE_APP_API_BASE_URL
    </p>
    <p>
      Mock模拟请求数据测试:
    </p>
    <p>手机列表</p>

    <a-table :columns="columns" :data-source="phoneList" :rowKey='record=>record.id' :loading="tableLoading">
      <template slot="price" slot-scope="price">
        <span>￥{{ price }}</span>
      </template>
      <span slot="action" slot-scope="phone">
        <a-button type="primary" @click="clickDetails(phone)">详情</a-button>
      </span>
    </a-table>

    <a-modal v-model="visible" title="手机详情" @ok="handleOk" @cancel="handleCancel">
      <div v-if="phoneDetails">
        <p>手机型号：{{phoneDetails.name}}</p>
        <p>价格：{{phoneDetails.price}}</p>
        <p>描述：{{phoneDetails.description}}</p>
      </div>
      <div v-else class="example">
        <a-spin />
      </div>
    </a-modal>

  </div>
</template>

<script>
import phoneAPI from '@/services/modules/phone'
import shoesAPI from '@/services/modules/shoes'

export default {
  data () {
    return {
      columns: [
        {
          title: '手机名称',
          dataIndex: 'name'
        },
        {
          title: '手机价格',
          dataIndex: 'price',
          scopedSlots: { customRender: 'price' }
        },
        {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ],
      phoneList: [],
      visible: false,
      phoneDetails: null
    }
  },
  computed: {
    tableLoading () {
      return this.phoneList.length <= 0
    }
  },
  mounted () {
    phoneAPI.getPhoneList().then(result => {
      console.log('手机列表数据', result.data.data)
      this.phoneList = result.data.data
    })

    shoesAPI.getShoesList().then(result => {
      console.log('鞋子列表数据', result.data.data)
    })

    shoesAPI.getShoesDetails().then(result => {
      console.log('鞋子随机详情数据', result.data.data)
    })
  },
  methods: {
    clickDetails (phone) {
      this.visible = true
      phoneAPI.getPhoneDetails(phone.id).then(result => {
        this.phoneDetails = result.data.data
      })
    },
    handleOk () {
      // this.phoneDetails = null
    },
    handleCancel () {
      this.phoneDetails = null
    }
  }
}
</script>

<style lang="less" scoped>
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>
