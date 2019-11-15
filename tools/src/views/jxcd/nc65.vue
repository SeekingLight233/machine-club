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
            <mu-text-field v-model="mn" label="法向模数mn="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="han" label="齿顶高系数han*="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="an" label="法向压力角αn="  label-float>°</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="z2" label="齿数Z2*="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="b" label="螺旋角β="  label-float>°</mu-text-field>
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
          <h3 class="myh3">齿顶高ha1=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">mm</h3>
          </div>
          <br>
          <h3 class="myh3">齿顶高ha2=</h3>
          <div id="res">
            <font color="#f44336">{{res1}}</font><h3 class="myh3" v-if="show"></h3>
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
      <img src="../assets/nc65.png" alt width="50%" /><br>
      <img src="../assets/nc651.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内啮合齿轮会产生过渡曲线干涉，适当减小内齿轮的齿顶高系数可以避免。</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      mn:"",
      han:"",
      an:"",
      z2:"",
      b:"",
      
      res: "",
      res1: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let mn = parseFloat(this.mn);
        let han = parseFloat(this.han);
        let an = parseFloat(this.an);
        let z2 = parseFloat(this.z2);
        let b = parseFloat(this.b);
        
      let result = han*mn;
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
      let result1 = (han-((han*han*Math.pow(Math.cos(b),3))/(z2*z2*Math.tan(an)*Math.tan(an))))*mn;
      console.log(result1.toFixed(3));
      this.res1 = result1.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.mn = "";
      this.han = "";
      this.an = "";
      this.z2 = "";
      this.b = "";
      
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