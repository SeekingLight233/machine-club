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
            <mu-text-field v-model="t2" label="名义转矩T2="  label-float>N•m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="yfs" label="复合齿形系数YFS="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="yb" label="导程角系数Yβ="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="kb" label="载荷分布系数Kβ="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="kv" label="动载系数KV="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="ka" label="使用系数KA="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="m" label="模数m="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="d2" label="蜗轮分度圆直径d2="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="d1" label="蜗杆分度圆直径d1="  label-float>mm</mu-text-field>
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
          <h3 class="myh3">齿根弯曲应力σ=</h3>

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
      <img src="../assets/wg06.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、蜗杆传动齿面接触应力应满足σF≤σFP 。 2、 动载系数，V2 ≤3m/s时，取1~1.1，V2 >3m/s时，取1.1~1.3； 3、载荷分布系数，平稳时取1，一般取1.1~1.3； 4、导程角系数， Yβ=1-γ/120°；</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      t2:"",
      yfs:"",
      yb:"",
      kb:"",
      kv:"",
      ka:"",
      m:"",
      d2:"",
      d1:"",
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let t2 = parseFloat(this.t2);
        let yfs = parseFloat(this.yfs);
        let yb = parseFloat(this.yb);
        let kb = parseFloat(this.kb);
        let kv = parseFloat(this.kv);
        let ka = parseFloat(this.ka);
        let m = parseFloat(this.m);
        let d2 = parseFloat(this.d2);
        let d1 = parseFloat(this.d1);
       
      let result = ((666*t2*ka*kv*kb)/(d1*d2*m))*yfs*yb;
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.t2 = "";
      this.yfs = "";
      this.yb = "";
      this.kb = "";
      this.kv = "";
      this.ka = "";
      this.m = "";
      this.d2 = "";
      this.d1 = "";
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