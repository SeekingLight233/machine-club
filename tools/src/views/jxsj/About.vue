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
            <mu-text-field v-model="n" label="转速n"  label-float>rpm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="H" label="扬程H"  label-float>m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="Q" label="流量Q"  label-float>m^3/s</mu-text-field>
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
          <h3 class="myh3">比转速(Ns)=</h3>

          <div id="res">
            <font color="#f44336">{{res}}</font>
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
      <img src="http://39.107.97.170:3002/images/bzs.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比转速（数）是从相似理论中引出来的一个综合性参数，它说明着流量、扬程、转数之间的相互关系。同一台水泵，在不同的工况下具有不同的比转数。一般是取最高效率工况时的比转速（数）做为水泵的比转速（数）。在＝150~250的范围，泵的效率最好，当＜60时，泵的效率显著下降；采用单吸叶轮过大时，可考虑改用双吸，反之采用双吸过小时，可考虑改用单吸叶轮。</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      n: "",
      H: "",
      Q: "",
      res: ""
    };
  },
  name: "bzs",
  components: {},
  methods: {
    cal() {
      var result =
        (3.65 * this.n * Math.sqrt(this.Q)) / Math.pow(this.H, 3 / 4);
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
    },
    clear() {
      this.n = "";
      this.H = "";
      this.Q = "";
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