<template>
  <div class="footer-content">
    <hr>
    <p>不要越过我的底线</p>
  </div>

</template>

<script>
    export default {
        name: "dbFooter"
    }
</script>

<style scoped>
  .footer-content {

    bottom: 0px;
    height: 50px;
    width: 100%;
    /*background-color: dimgrey;*/
    line-height: 50px;
    /*position: relative;*/
  }

  .footer-content>p {
    text-align: center;
  }

  .footer-content>hr {
    width: 80%;
    margin-left: 10%;
  }


</style>
