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
            <mu-text-field v-model="x" label="变位系数X="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z" label="被加工齿轮的齿数Z="  label-float>个</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="a1" label="齿顶圆压力角αa="  label-float>°</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="a2" label="分度圆压力角α="  label-float>°</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="d" label="齿顶圆直径da="  label-float>mm</mu-text-field>
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
          <h3 class="myh3">齿顶不过薄的条件齿顶厚Sn=</h3>
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
      <img src="../assets/cd83.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正变位系数过大（特别是当齿数过少时），很可能导致齿顶过薄。此时必须满足条件： Sn≥0.25m，对于表面淬火的齿轮要求 Sn≥0.4m；</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      x:"",
      z:"",
      a1:"",
      a2:"",
      d:"",
      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let x = parseFloat(this.x);
        let z = parseFloat(this.z);
        let a1 = parseFloat(this.a1);
        let a2 = parseFloat(this.a2);
        let d = parseFloat(this.d);
        
      let result = d*((Math.PI/(2*z))+(2*x*Math.tan(a2))/z+(Math.tan(a2)-((a2/360)*2*Math.PI)-Math.tan(a1)+((a1/360)*2*Math.PI)))
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.x = "";
      this.z = "";
      this.a1 = "";
      this.a2 = "";
      this.d = "";
      
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