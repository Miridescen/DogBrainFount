<template>
  <div class="home-content" v-bind:style="{height:windowHeight}">
    <div class="left">
      <div class="content-list">
        <div class="emptyData" v-if="emptyData">暂无数据</div>
        <ul>
          <li v-for="item in datas" @click="clickContent(item)">
            <h1>{{item.title}}</h1>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>

    </div>
    <div class="right">



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



      export default {
        name: "Home",
      data(){
          return {
            windowHeight: window.innerHeight + 'px',
            datas: listDatas
          }
      },

        computed: {
          emptyData() {
            return this.datas.length>0?false:true;
          }
        },

        methods: {
          clickContent:function (item) {
            console.log(item)
          }
        }

    }


</script>

<style scoped>
  .home-content {
    width: 100%;
    height: 100%;
    /*background-color: antiquewhite;*/
    margin-top: 54px;
  }

  .home-content .left{
    width: 64%;
    margin-top: 40px;
    margin-left: 6%;
    position: relative;
    float: left;
  }

  .home-content .right {
    width: 20%;
    margin-top: 40px;
    margin-left: 6%;
    background-color: aliceblue;
    float: left;
  }

  .content-list{
    margin-left: 10%;
  }

  .content-list>ul>li{
    margin-top: 30px;
    cursor: pointer;

  }

  .content-list>ul>li>h1{
    text-align: left;

  }

  .content-list>ul>li>p{
    margin-top: 15px;
    text-align: left;
    color: #5e5e5e;

  }

</style>
