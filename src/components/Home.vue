<template>


  <div class="home-content" v-bind:style="{height:windowHeight}">

    <div class="emptyData" v-if="emptyData">暂无数据</div>
    <vue-waterfall-easy :imgsArr="newsArr"
                        @scrollReachBottom="getNewsData(index+1)"
                        maxCols=4>
      <div class="img-info" slot-scope="props">
        <p class="some-info">{{props.value.info}}</p>
        <p class="some-info">来源：{{props.value.media}}</p>
      </div>
    </vue-waterfall-easy>

  </div>

</template>

<script>

import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'

      export default {
        name: "Home",
        data(){
          return {
            windowHeight: window.innerHeight + 'px',
            newsArr: [],
            index:1
          }
        },

        components:{
          vueWaterfallEasy
        },


        computed: {
          emptyData() {
            // return this.newsArr.length>0?false:true;
            return false
          }
        },

        methods: {
          clickContent:function (item) {
            console.log(item)
          },

          getNewsData:function(index, pageSize) {
            axios.post('/news/list.json', {
              index: index,
              pageSize: pageSize
            }).then(response=>{

              let _this = this;
              let result = response.data;
              var arr = [];

              let datas = result['data'];

              console.log(_this.index);
              console.log(datas);

              for(let value in datas){
                arr.push({src:datas[value]['image_url'], href:datas[value]['full_url'], info:datas[value]['title'], media:datas[value]['media']})
              }

              _this.newsArr = _this.newsArr.concat(arr);
              _this.index = _this.index + 1
            })
          }

        },

        created(){
          this.getNewsData(1, 20);
        },



    }


</script>

<style scoped>
  .home-content {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    /*background-color: antiquewhite;*/
    margin-top: 54px;


  }

  vue-waterfall-easy{
    overflow: hidden;
  }

  .some-info {
    line-height: 1.8;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
    color: black;

  }
</style>

