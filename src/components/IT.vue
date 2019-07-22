<template>
  <div class="it-content" v-bind:style="{height:windowHeight}">
    <div class="left">
      <div class="content-list">
        <div class="emptyData" v-if="emptyData">暂无数据</div>
        <ul>
          <li v-for="item in datas" @click="clickContent(item)">
            <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>

    </div>
    <div class="right">
      <div class="right-menu">
        <h3 >分类</h3>
        <hr>
        <ul>
          <li v-for="item in categoryDatas">{{item.name}}</li>
        </ul>
        <h3 >狗脑发热</h3>
        <hr>
        <div class="right-qrcode">
          <img src="../assets/GNfever.jpg"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let listDatas = [
    {
      "module": [],
      "category": [
        "iOS"
      ],
      "_id": "5b9b4ff3c998ac2cc95deb49",
      "title": "__has_feature详解",
      "created_at": "2018-09-14",
      "author": "Miridescent",
      "content": "大致的意思是通过给定的值，判断编译器是否支持该特性\r\n类似的特性检测宏还有`__has_builtin`、`__has_attribute`等，他们都属于Feature Checking Macros",
      "file_name": "__has_feature详解.md",
      "__v": 0
    },
    {
      "module": [],
      "category": [
        "iOS"
      ],
      "_id": "5b9b4ff3c998ac2cc95deb49",
      "title": "__has_feature详解",
      "created_at": "2018-09-14",
      "author": "Miridescent",
      "content": "大致的意思是通过给定的值，判断编译器是否支持该特性\r\n类似的特性检测宏还有`__has_builtin`、`__has_attribute`等，他们都属于Feature Checking Macros",
      "file_name": "__has_feature详解.md",
      "__v": 0
    }
  ]

  let categoryListDatas = [
    {
      "_id": "5d021d72b83a175cb441e049",
      "name": "qiqi",
      "module": "推荐",
      "desc": "gougou",
      "created_at": "2019-06-13",
      "__v": 0
    },
    {
      "_id": "5d0217284c82ac5b0719137f",
      "name": "xixi",
      "module": "推荐",
      "created_at": "2019-06-13",
      "__v": 0
    },
    {
      "_id": "5cf4d1abaa1ff45c2bb41a84",
      "name": "iOS",
      "module": "技术文章",
      "created_at": "19-06-03",
      "__v": 0
    },
    {
      "_id": "5cf4d18d2207ab5c2122ed22",
      "name": "攻略",
      "module": "旅行",
      "created_at": "19-06-03",
      "__v": 0
    },
    {
      "_id": "5cf4d16943faf35c1bd0ac59",
      "name": "音乐留言故事",
      "module": "音乐",
      "created_at": "19-06-03",
      "__v": 0
    }
  ]

  import axios from 'axios';

  export default {
    name: "IT",
    data(){
      return {
        windowHeight: window.innerHeight + 'px',
        // isEmptyData: true,
        datas: listDatas,
        categoryDatas: [],
        currentChannel: ''
      }
    },

    computed: {
      emptyData() {
        return this.datas.length>0?false:true;
      }
    },

    mounted(){

      this.currentChannel = this.$store.state.currentChannel;
      console.log('currentChannel = ' + this.currentChannel);
      let channel = this.$store.state.currentChannel;
      this.getCategoryList(channel)

    },

    methods: {
      clickContent:function (item) {
        console.log(item)
      },

      getCategoryList:function (channel) {
        axios.post('/admin/category/find.json', {module: channel}).then(response => {

          this.categoryDatas = response.data.data;
        })
      }
    }

  }
</script>

<style scoped>
  .it-content {
    width: 100%;
    height: 100%;
    /*background-color: antiquewhite;*/
    margin-top: 54px;
  }

  .it-content .left{
    width: 50%;
    margin-top: 50px;
    margin-left: 10%;
    position: relative;
    float: left;
  }

  .it-content .right {
    width: 20%;
    margin-top: 20px;
    margin-left: 10%;
    float: left;
  }

   .content-list{
    margin-left: 10%;
  }

  .content-list>ul>li{
    margin-top: 30px;
    cursor: pointer;

  }

  .content-list>ul>li>h2{
    text-align: left;
    font-weight: bolder;

  }

  .content-list>ul>li>p{
    margin-top: 15px;
    text-align: left;
    color: #5e5e5e;

  }

  .it-content .right .right-menu{

   }

  .it-content .right .right-menu>h3{
    text-align: left;
    margin-top: 30px;
    color: rgb(140,140,140);
  }

  .it-content .right .right-menu>hr{
    margin-top: 10px;
    color: rgb(140,140,140);
  }

  .it-content .right .right-menu>ul{

    margin-top: 30px;

  }

  .it-content .right .right-menu>ul>li{
    margin-top: 17px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bolder;
    text-align: left;
    color: rgb(140,140,140);
  }

</style>
