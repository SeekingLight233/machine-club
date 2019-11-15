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
            <mu-text-field v-model="f" label="切向力Fcal="  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="khb" label="齿向载荷分配系数KHβ="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="kv" label="动载系数KV="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zb" label="螺旋角系数Zβ="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="ze" label="弹性系数ZE="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z" label="重合度系数Zε="  label-float></mu-text-field>
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
            <mu-text-field v-model="kha" label="齿间载荷分配系数KHα="  label-float></mu-text-field>
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
          <h3 class="myh3">最大齿面应力σHst=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">Mpa</h3>
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
      <img src="../assets/wc50.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、齿面静强度条件为 σHst ≤ σHPst 2、齿数比，大齿轮齿数比小齿轮， u=z2/z1</p>
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
      khb:"",
      kv:"",
      zb:"",
      ze:"",
      z:"",
      zh:"",
      u:"",
      d:"",
      b:"",
      kha:"",

      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let f = parseFloat(this.f);
        let khb = parseFloat(this.khb);
        let kv = parseFloat(this.kv);
        let zb = parseFloat(this.zb);
        let ze = parseFloat(this.ze);
        let z = parseFloat(this.z);
        let zh = parseFloat(this.zh);
        let u = parseFloat(this.u);
        let d = parseFloat(this.d);
        let b = parseFloat(this.b);
        let kha = parseFloat(this.kha);
        
      let result = Math.sqrt(kv*khb*kha)*zh*ze*z*zb*Math.sqrt((f/(d*b))*((u+1)/u))
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.f = "",
      this.khb = "",
      this.kv = "",
      this.zb = "",
      this.ze = "",
      this.z = "",
      this.zh = "",
      this.u = "",
      this.d = "",
      this.b = "",
      this.kha = "",
      
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