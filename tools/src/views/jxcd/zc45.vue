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
            <mu-text-field v-model="k" label="载荷系数K="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="t" label="小齿轮传递的额定转矩T1="  label-float>N·m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="m" label="齿宽系数φm="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="y" label="复合齿形系数YFS="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="f" label="许用弯曲应力σFP="  label-float>MPa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z" label="小齿轮齿数Z1="  label-float></mu-text-field>
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
          <h3 class="myh3">mmin=</h3>
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
      <img src="../assets/zc45.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、摘自GB/T 10063-1998。 2、载荷系数，依据驱动、载荷、精度、速度、对称性取值，一般在1.2~2； 3、齿宽系数，φa ，φm =8~25；</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      k:"",
      t:"",
      m:"",
      y:"",
      f:"",
      z:"",

      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let k = parseFloat(this.k);
        let t = parseFloat(this.t);
        let m = parseFloat(this.m);
        let y = parseFloat(this.y);
        let f = parseFloat(this.f);
        let z = parseFloat(this.z);

        
      let result = 12.6*Math.pow(((k*t)/(m*z))*(y/f),1/3)
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.k = "",
      this.t = "",
      this.m = "",
      this.y = "",
      this.f = "",
      this.z = "",
      
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