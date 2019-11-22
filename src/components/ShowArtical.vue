<template>

  <div class="artical-content" v-bind:style="{'min-height': windowHeight}">
    <h1>{{articalTitle}}</h1>
    <!--<div class="content" v-html="articalContent">-->
    <article class="markdown-body content" v-html="articalContent"></article>
    </div>
  </div>


</template>

<script>

  import axios from 'axios';
  import showdown from 'showdown';
  import 'github-markdown-css';
    export default {
        name: "ShowArtical",
      data() {

          return {
            windowHeight : window.innerHeight + 'px',
            articalContent : '',
            articalID : this.$route.params.id,
            articalTitle: '',
            defaultData: "preview"
          }

      },


      watch: {

          '$route'(to, from) {
            console.log(to.param);
            let param = to.param;
            this.articalID = param.id;
          }
      },

      components: {
          showdown
      },

      created(){
        // axios.post('/artical/find/by/id.json', {
        //   id: this.articalID
        // }).then(response=>{
        //
        //   this.articalContent = response.data.artical_content;
        // })

      },

      mounted(){
        axios.post('/artical/find/by/id.json', {
          id: this.articalID
        }).then(response=>{

          this.articalContent = response.data.detail;
          this.articalTitle = response.data.title
        })


      }
    }
</script>

<style scoped>

  .artical-content {
    width: 100%;
    height: 100%;
    margin-top: 54px;
    position: relative;
  }

  .artical-content .content{
    width: 60%;
    margin-left: 20%;
    /*background-color: #ff39fa;*/
    top: 40px;
    padding-top: 40px;
    padding-bottom: 50px;
    position: relative;
    text-align: left;


  }

  .artical-content>h1{
    top: 40px;
    position: relative;
  }
</style>
