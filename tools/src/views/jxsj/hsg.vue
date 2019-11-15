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
            <mu-text-field v-model="d" label="活塞杆的直径d=" label-float>m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="w" label="末端条件系数ψ=" label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="f" label="活塞杆纵向容许载荷F=" label-float>MPa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="n" label="安全系数n" label-float></mu-text-field>
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
          <h3 class="myh3">活塞杆的最大允许长度计算=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font>
            <h3 class="myh3" v-if="show">m</h3>
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
      <img src="../assets/hsg.png" alt width="50%" />
      <div class="center">
        <p class="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当缸壁厚度δ>D/10时</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      d: "",
      w: "",
      f:"",
      n:"",
      res: "",
      show: false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
      let w = parseFloat(this.w);
      let d = parseFloat(this.d);
      let f = parseFloat(this.f);
      let n = parseFloat(this.n);
      let result = (315*d*d)*(Math.sqrt((w*w)/(n*f))*1000);
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.d = "";
      this.w = "";
      this.f = "";
      this.n = "";
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