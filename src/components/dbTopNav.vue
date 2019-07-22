<template>
  <div class="nav-content" v-if="show">
    <div class="logo">
      <a>狗脑发热</a>
    </div>
    <div class="channel-list">
      <ul class="list-container">
        <li v-for="item in navList" :key="item.id" @click="selectChannel(item)"><a>{{item.name}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

  import bus from '@/common/eventBus.js'
    export default {
        name: "dbTopNav",
      data(){
          let navList = [
            {
              'id': 1,
              'name': '推荐',
              'value': 'home'
            },
            {
              'id': 2,
              'name': '音乐',
              'value': 'music'
            },
            {
              'id': 3,
              'name': '读书',
              'value': 'reading'
            },
            {
              'id': 4,
              'name': 'IT技术文章',
              'value': 'it'
            }
          ];

          return {
            show: true,
            navList: navList
          }
      },
      methods:{
        selectChannel: function (item) {

          bus.$emit('selectChannel', item);
          this.$store.commit('changeChannel', item.name);
          this.$router.push({name: item.value, params:{channelName: item.name}});

        }
      }
    }
</script>

<style scoped>

  .nav-content{
    /*display: block;*/
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height: 54px;
    background-color: #f6f6f6;
    position: fixed;
    z-index: 1000;

  }

  .nav-content .logo{
    position: relative;
    float: left;
    top: 0;
    height: 54px;
    line-height: 54px;
    width: 120px;
    font-size: 20px;
    color: #777;
    text-align: center;
    font-weight: 500;
  }

  .nav-content .logo a{
    cursor: pointer;
  }


  .nav-content .logo a:hover{
    color: rgba(0, 0, 0, 0.7);
  }

  .nav-content .channel-list{
    position: relative;
    font-size: 14px;
    font-weight: bolder;
    margin-right: 40px;
    color: rgb(140,140,140);
    float: right;
  }

  .nav-content .channel-list .list-container li{
    position: relative;
    display: block;
    float: left;
    padding: 18px;
  }

  .nav-content .channel-list .list-container li a{
    cursor: pointer;
  }

  .nav-content .channel-list .list-container li a:hover{
    color: rgba(0, 0, 0, 0.7);
  }


</style>
