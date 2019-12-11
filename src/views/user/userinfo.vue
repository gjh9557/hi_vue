<template>
  <!--所有的元素不能直接在根节点下必须跟在一个div的里面-->
  <div>
    <h1>用户信息</h1>
    {{id}}
  </div>
</template>

<script>
    export default {
      props:['id'],
        name: "userinfo",
      beforeRouteEnter:(to,from,next)=>{
console.log("进入前")
        next();
    },
      beforeRouteLeave:(to,from,next)=>{
console.log("进入后");
        next();
      }

    }
</script>

<style scoped>

</style>
