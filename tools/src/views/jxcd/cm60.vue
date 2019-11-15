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
            <mu-text-field v-model="h" label="接触疲劳极限σHlim="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zn" label="寿命系数ZNT="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zl" label="润滑油膜影响系数ZL="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zv" label="润滑油膜影响系数ZV="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zr" label="润滑油膜影响系数ZR="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zw" label="工作硬化系数ZW="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="zx" label="尺寸系数ZX="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="s" label="最小安全系数SHmin="  label-float></mu-text-field>
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
          <h3 class="myh3">接触许用应力σHP=</h3>
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
      <img src="../assets/cm60.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;强度条件为 σH≤σHP</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      h:"",
      zn:"",
      zl:"",
      zv:"",
      zr:"",
      zw:"",
      zx:"",
      s:"",
      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let h = parseFloat(this.h);
        let zn = parseFloat(this.zn);
        let zl = parseFloat(this.zl);
        let zv = parseFloat(this.zv);
        let zr = parseFloat(this.zr);
        let zw = parseFloat(this.zw);
        let zx = parseFloat(this.zx);
        let s = parseFloat(this.s);
        
      let result = (h*zn*zl*zv*zr*zw*zx)/s
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.h = "";
      this.zn = "";
      this.zl = "";
      this.zv = "";
      this.zr = "";
      this.zw = "";
      this.zx = "";
      this.s = "";
      
      
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