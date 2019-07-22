<template>
    <div class="dogbrain-content-root">
      <db-top-nav></db-top-nav>
      <router-view/>
      <!--<db-footer></db-footer>-->
    </div>
</template>

<script>
  import dbTopNav from '@/components/dbTopNav';
  import  dbFooter from '@/components/dbFooter';

    export default {
        name: "app",
        components:{
          'dbTopNav': dbTopNav,
          'dbFooter': dbFooter
        },
      methods: {
      }
    }
</script>

<style scoped>

  .dogbrain-content-root {
    width: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
  }


</style>
