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
            <mu-text-field v-model="Pmi" label="平均指示压力Pmi=" label-float>Pa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="Vs" label="每缸的工作容积Vs=" label-float>L</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="n" label="转速n=" label-float>r/min</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="i" label="气缸数i=" label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="τ" label="冲程数τ=" label-float></mu-text-field>
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
          <h3 class="myh3">内燃机的指示功率pi=</h3>

          <div id="res">
            <font color="#f44336">{{res}}</font>
            <h3 class="myh3" v-if="show"></h3>
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
      <img src="../assets/nrj.png" alt width="50%" />
      <div class="center">
        <p class="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      Pmi:"",
      Vs:"",
      n:"",
      i:"",
      τ:"",
      res: "",
      show: false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
      let Pmi = parseFloat(this.Pmi);
      let Vs = parseFloat(this.Vs);
      let n = parseFloat(this.n);
      let i = parseFloat(this.i);
      let τ = parseFloat(this.τ);
      let result = Pmi*Vs*n*i/(30*τ);
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.Pmi = "";
      this.Vs = "";
      this.n = "";
      this.i = "";
      this.τ = "";
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