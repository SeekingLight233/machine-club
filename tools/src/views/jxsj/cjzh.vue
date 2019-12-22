<template>
  <div class="root">
    <div class="mypaper"></div>

    <mu-paper class="demo-paper" :z-depth="4" id="mypaper">
      <div class="title">
        <div id="myicon">
          <img src="../assets/input.png" alt width="20px" />
        </div>
        <div class="text">输入条件</div>
        <div class="condition">
           <div class="myinput">
            <mu-text-field v-model="W" label="冲击力W"  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="A" label="作用面积A"  label-float>mm^2</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="E" label="弹性模量E(1000)"  label-float>Mpa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="h" label="冲击距离h"  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="L" label="物体长度L"  label-float>mm</mu-text-field>
          </div>
        </div>
        <div class="buttons">
          <mu-button small color="#7A7E83" @click="cal">计算</mu-button>

          <mu-paper class="demo-paper" :z-depth="5" id="mybutton">
            <mu-button small @click="clear">清空</mu-button>
          </mu-paper>
        </div>
      </div>
    </mu-paper>

    <mu-paper class="demo-paper" :z-depth="4" id="mypaper">
      <div class="title">
        <div id="myicon">
          <img src="../assets/result.png" alt width="20px" />
        </div>
        <div class="text">计算结果</div>
        <div class="padding10">
          <h3 class="myh3">冲击载荷产生的应力σ=</h3>

          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">MPa</h3>
          </div>
        </div>
      </div>
    </mu-paper>

    <mu-paper class="demo-paper" :z-depth="4" id="mypaper">
      <div id="inline">
        <div id="myicon">
          <img src="../assets/note.png" alt width="20px" />
        </div>
        <div class="text">备注</div>
      </div>
      <img src="https://www.jixieclub.com:3002/images/cjzh.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;塑料制品在使用或运输过程中，经常或偶然的撞击会使其变形或断裂。冲击失效是高速负载作用下发生的力学现象。瞬时施加的冲击载荷使塑料件具有很高的应变速率。塑料件的抗冲性能、冲击试验和抗冲保护。至今还是相当复杂的技术问题。</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      W:"",
      A:"",
      E:"",
      h:"",
      L:"",
      res:"",
      show:false
    };
  },
  name: "cjzh",
  components: {},
  methods: {
    cal() {
      var result = (this.W/this.A)*(1+Math.sqrt(1+((2*this.E*this.A*this.h)/(this.W*this.L))));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.W = "";
      this.A = "";
      this.E = "";
      this.h = "";
      this.L = "";
      this.res = "";
    }
  }
};
</script>
<style scoped>
.text {
  font-size: 22px;
  font-weight: bold;
  clear: both;
  display: inline-block;
  padding-bottom: 10px;
  /* border: 1px solid red; */
}
#myicon {
  padding-top: 10px;
  display: inline-block;
  /* border: 1px solid red; */
  margin-right: 5px;
}
.about {
  text-align: left;
  overflow: auto;
}
.title {
  margin: 10px 10px;
}
#mypaper {
  border-radius: 10px;
  width: 90%;
  margin: auto;
}
#mybutton {
  display: inline;
  margin-left: 10%;
}
.buttons {
  padding: 5%;
}
.myh3 {
  display: inline;
}
#res {
  font-size: 17px;
  font-weight: bold;
  clear: both;
  display: inline-block;
}
.padding10 {
  padding-bottom: 10px;
}
.para {
  text-align: justify;
  width: 90%;
}
.center {
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: -10px;
}
.myinput {
  margin-top: -30px;
  margin-bottom: -15px;
}
</style>