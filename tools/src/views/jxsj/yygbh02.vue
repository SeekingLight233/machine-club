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
            <mu-text-field v-model="py" label="实验压力py=" label-float>MPa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="d" label="液压缸内径D=" label-float>m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="o" label="缸筒材料的许用应力σ=" label-float>MPa</mu-text-field>
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
          <h3 class="myh3">液压缸壁厚计算δ=</h3>
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
      <img src="../assets/yygbh02.png" alt width="50%" />
      <div class="center">
        <p class="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当缸壁厚度δ≤D/10时</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      py: "",
      d: "",
      o:"",
      res: "",
      show: false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
      let py = parseFloat(this.py);
      let d = parseFloat(this.d);
      let o = parseFloat(this.o);
      let result = (py*d)/(2*o);
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.d = "";
      this.py = "";
      this.o = "";
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