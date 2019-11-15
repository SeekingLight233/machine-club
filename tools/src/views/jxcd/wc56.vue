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
            <mu-text-field v-model="kh1" label="齿间载荷分配系数KHα="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="kv" label="动载系数KV="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="ka" label="使用系数KA="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z1" label="重合度与螺旋角系数Zεß="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z2" label="重合度系数Zε="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zh" label="节点区域系数ZH="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="u" label="齿数比u="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="d" label="分度圆直径d1="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="b" label="齿宽b="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="kh2" label="齿间向分配系数KHß="  label-float></mu-text-field>
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
          <h3 class="myh3">接触应力σH=</h3>
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
      <img src="../assets/wc56.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简化计算所用公式，区别于一般计算方法。强度条件为 σH≤ σHP</p>
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
      kh1:"",
      kv:"",
      ka:"",
      z1:"",
      z2:"",
      zh:"",
      u:"",
      d:"",
      b:"",
      kh2:"",

      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let f = parseFloat(this.f);
        let kh1 = parseFloat(this.kh1);
        let kv = parseFloat(this.kv);
        let ka = parseFloat(this.ka);
        let z1 = parseFloat(this.z1);
        let z2 = parseFloat(this.z2);
        let zh = parseFloat(this.zh);
        let u = parseFloat(this.u);
        let d = parseFloat(this.d);
        let b = parseFloat(this.b);
        let kh2 = parseFloat(this.kh2);
        
      let result = zh*z2*z1*(Math.sqrt((f/(b*d))*((u+1)/u)*ka*kv*kh2*kh1))
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.f = "",
      this.kh1 = "",
      this.kv = "",
      this.ka = "",
      this.z1 = "",
      this.z2 = "",
      this.zh = "",
      this.u = "",
      this.d = "",
      this.b = "",
      this.kh2 = "",
      
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