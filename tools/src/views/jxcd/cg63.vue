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
            <mu-text-field v-model="f" label="圆周力Ft="  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="b" label="齿宽b="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="m" label="模数mn="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="k1" label="使用系数KA="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="k2" label="动载系数KV="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="x1" label="齿间载荷分配系数KFα="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="x2" label="齿向载荷分配系数KFß="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="y" label="复合齿形系数YFS="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z" label="重合度与螺旋角系数Yεß="  label-float></mu-text-field>
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
          <h3 class="myh3">弯曲应力σF=</h3>
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
      <img src="../assets/cg63.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简化计算所用公式，区别于一般计算方法。强度条件为 σF≤σFP</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      f:"",
      b:"",
      m:"",
      k1:"",
      k2:"",
      x1:"",
      x2:"",
      y:"",
      z:"",
      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let f = parseFloat(this.f);
        let b = parseFloat(this.b);
        let m = parseFloat(this.m);
        let k1 = parseFloat(this.k1);
        let k2 = parseFloat(this.k2);
        let x1 = parseFloat(this.x1);
        let x2 = parseFloat(this.x2);
        let y = parseFloat(this.y);
        let z = parseFloat(this.z);
        
      let result = (f/(b*m))*k1*k2*x1*x2*y*z
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.f = "";
      this.b = "";
      this.m = "";
      this.k1 = "";
      this.k2 = "";
      this.x1 = "";
      this.x2 = "";
      this.y = "";
      this.z = "";
      
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