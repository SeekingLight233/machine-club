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
            <mu-text-field v-model="z2" label="蜗轮齿数Z2="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="m" label="模数m="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="afp" label="许用齿根弯曲应力σFP="  label-float>MPa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="t2" label="名义转矩T2="  label-float>N•m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="k" label="载荷系数K="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="yfs" label="复合齿形系数YFS="  label-float></mu-text-field>
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
          <h3 class="myh3">分度圆直径 d1min=</h3>

          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">mm</h3>
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
      <img src="../assets/ac05.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、具体设计时，查表确定模数m和蜗杆分度圆直径 。 2、 载荷系数，一般取1~1.4；</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      z2:"",
      m:"",
      afp:"",
      t2:"",
      k:"",
      yfs:"",
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let z2 = parseFloat(this.z2);
        let m = parseFloat(this.m);
        let afp = parseFloat(this.afp);
        let t2 = parseFloat(this.t2);
        let k = parseFloat(this.k);
        let yfs = parseFloat(this.yfs);
       

      let result = (6000*k*t2*yfs)/(afp*m*m*z2);
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.z2 = "";
      this.m = "";
      this.afp = "";
      this.t2 = "";
      this.k = "";
      this.yfs = "";
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