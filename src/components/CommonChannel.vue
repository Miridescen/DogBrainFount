<template>
  <div class="common-content" v-bind:style="{'min-height':windowHeight}" >
    <div class="left">
      <div class="content-list">
        <div class="emptyData" v-if="isEmptyData">暂无数据</div>
        <ul v-if="!isEmptyData">
          <li v-for="item in articalDatas" @click="clickContent(item)">
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
          <li v-on:click="clickTotalCategory">全部</li>
          <li v-for="item in categoryDatas"
              v-on:click="clickCategory(item)">
            <a>{{item.name}}</a>
          </li>
        </ul>
        <h3 >狗脑发热</h3>
        <hr>
        <div class="right-code">
          <img src="../assets/GNfever.jpg"/>
        </div>
      </div>
    </div>

    <div class="block">
      <el-pagination layout="total, sizes, prev, pager, next, jumper"
                     :total="paginationData.articalTotalCount"
                     :current-page="paginationData.currentPage"
                     :page-size="10"
                     @current-change="current_page_change">

      </el-pagination>
    </div>



  </div>
</template>

<script>

  import axios from 'axios';
  import bus from '@/common/eventBus.js'

    export default {
      name: "CommonChannel",
      data(){
        return {
          windowHeight: (window.innerHeight) + 'px',
          isEmptyData: true,
          articalDatas: [],
          categoryDatas: [],
          currentChannel: this.$store.state.currentChannel,
          currentCategory: this.$store.state.currentCategory,


          paginationData: {
            currentPage: 1,
            articalTotalCount: 0,
            pageSize: 10
          }
        }
      },

      computed: {
        emptyData() {
          return this.datas.length>0?false:true;
        }
      },

      mounted(){

        console.log('currentChannel = ' + this.$store.state.currentChannel);

        bus.$on('selectChannel', val => {
          this.getCategoryList(val.name)
          this.getArticalList(val.name)
        })

        // this.currentChannel = this.$store.state.currentChannel;
        let channel = this.$store.state.currentChannel;
        this.getCategoryList(channel)
        this.getArticalList(channel)

      },

      watch: {

        '$route' (to, from) {

          let channelName = to.params.channelName;
          this.$store.commit('changeChannel', channelName);
          this.currentChannel = channelName;

          this.getCategoryList(channelName);
          this.getArticalList(channelName);
        }

      },

      methods: {
        current_page_change:function(currentPage){
          this.paginationData.currentPage = currentPage;
          let param = {
            module: this.currentChannel,
            index: currentPage,
            category: this.currentCategory
          }
          this.getArticalData(param);
        },

        clickTotalCategory:function(){
          this.getArticalList(this.$store.state.currentChannel);
        },

        clickContent:function (item) {
          this.$router.push({name: 'artical', params: {id: item._id}})
        },

        clickCategory:function(item) {

          this.currentCategory = item.name;
          let param = {category: item.name}

          this.getArticalData(param);

        },

        getCategoryList:function (channel) {
          axios.post('/admin/category/find.json', {module: channel}).then(response => {

            this.categoryDatas = response.data.data;

            // {
            //   "_id": "5d2be4894b57f02389671cd1",
            //   "name": "solidity",
            //   "module": "IT技术文章",
            //   "desc": "以太坊开发相关文章",
            //   "created_at": "2019-07-15",
            //   "__v": 0
            // }
          })
        },

        getArticalList:function (channel) {

          let param = {
            module: channel
          }
          this.getArticalData(param);
        },

        getArticalData: function (param) {
          axios.post('/artical/list.json', param).then(response=>{
            let data = response.data;
            console.log(data);
            if (parseInt(data.count) > 0){
              this.isEmptyData = false;
              this.articalDatas = data.data;
              this.paginationData.articalTotalCount = data.totalCount;
              this.paginationData.currentPage = data.index;
            } else {

              this.isEmptyData = true;
            }

            // {
            //   "module": [
            //   "IT技术文章"
            // ],
            //   "category": [
            //   "solidity"
            // ],
            //   "_id": "5d2be6914b57f02389671cda",
            //   "title": "solidity中的引用类型——数组、结构体",
            //   "created_at": "2019-07-15",
            //   "author": "MS",
            //   "content": "详细介绍了solidity中的引用类型",
            //   "file_name": "solidity中的引用类型——数组、结构体-1563158161445.md",
            //   "__v": 0
            // }

          })
        }


      }
    }
</script>

<style scoped>
  .common-content {
    width: 100%;
    /*min-height: calc(100vh - 70px);*/
    /*background-color: antiquewhite;*/
    margin-top: 54px;
    position: relative;

  }

  .common-content .left{
    width: 50%;
    margin-top: 30px;
    margin-left: 10%;
    position: relative;
    float: left;
  }

  .common-content .right {
    width: 20%;
    margin-top: 10px;
    margin-left: 15%;
    float: left;
    /*background-color: aliceblue;*/
  }

  .content-list{
    margin-left: 10%;
  }

  .content-list>ul>li{
    margin-top: 40px;
    cursor: pointer;

  }

  .content-list>ul>li>h2{
    text-align: left;
    font-weight: bolder;

  }

  .content-list>ul>li>p{
    margin-top: 10px;
    text-align: left;
    color: #5e5e5e;

  }

  .common-content .right .right-menu{

  }

  .common-content .right .right-menu>h3{
    text-align: left;
    margin-top: 30px;
    color: rgb(140,140,140);
  }

  .common-content .right .right-menu>hr{
    margin-top: 10px;
    color: rgb(140,140,140);
  }

  .common-content .right .right-menu>ul{

    margin-top: 30px;

  }

  .common-content .right .right-menu>ul>li{
    margin-top: 17px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bolder;
    text-align: left;
    color: rgb(140,140,140);
    cursor: pointer;
  }

  .common-content .right .right-menu>ul>li>a:hover{
    color: rgba(0, 0, 0, 0.7);
  }

  .common-content .block {
    width: 50%;
    margin-left: 13%;
    margin-top: 50px;
    margin-bottom: 30px;
    position: relative;
    float: left;
    /*background-color: aqua;*/
  }

</style>
