<template>
  <div class="job-detail">
    <div class="inner home-inner">
      <div class="po-relative">
        <div class="absolute1"></div>
        <div style="overflow: auto">
          <div class="absolute"></div>
        </div>
        
      </div>
      <div class="po-absolute">
        <div class="absolute"></div>
        <div class="absolute1"></div>
      </div>
      <div class="po-fixed">
        <div class="absolute"></div>
        <div class="absolute1"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JobDetail',
  components: {},
  setup() {
    // Object.prototype.sex ="male"
    var person = {
      age: 18
    }
    console.log(Object.keys(person))
    for(let key in person){
      if(person.hasOwnProperty(key)){
          console.log(key)
      }
    }
    
    return {}
  }
})
</script>
<style lang="less" scoped>
.job-detail{
  height: 2000px;
}
.po-relative{
  width: 100px;
  height: 200px;
  border: 1px solid #000;
  position: relative;
  top: 20px;
  left: 300px;
}
.po-absolute{
  width: 200px;
  height: 200px;
  border: 1px solid pink;
  position: absolute;
  overflow: auto;
}
.po-fixed{
  width: 300px;
  height: 150px;
  border: 1px solid red;
  position: fixed;
  right: 200px;
}
.absolute{
  width: 50px;
  height: 50px;
  border: 1px solid green;
  margin: 10px;
}
.absolute1{
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 1px solid green;
}
</style>
