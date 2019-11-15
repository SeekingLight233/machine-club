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
            <mu-text-field v-model="ft1" label="蜗杆圆周力Ft1="  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="fr1" label="蜗杆径向力Fr1="  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="l" label="蜗轮的跨度L="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="e" label="弹性模量E="  label-float>MPa</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="i" label="惯性矩I="  label-float>mm^4</mu-text-field>
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
          <h3 class="myh3">蜗杆轴刚度y1=</h3>

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
      <img src="../assets/wg07.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、y1为蜗杆中央部分的挠度， yp为许用变形量，yp =（0.001~0.0025）d1 ，当y1 ≤yp 时，蜗杆轴刚度满足要求。 2、蜗杆齿根截面的惯性矩，I=πdf1²/64</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      ft1:"",
      fr1:"",
      l:"",
      e:"",
      i:"",
    
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let ft1 = parseFloat(this.ft1);
        let fr1 = parseFloat(this.fr1);
        let l = parseFloat(this.l);
        let e = parseFloat(this.e);
        let i = parseFloat(this.i);
        
        
       
      let result = (Math.sqrt(ft1*ft1+fr1*fr1)/(48*e*i))*l*l*l;
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.ft1 = "";
      this.fr1 = "";
      this.l = "";
      this.e = "";
      this.i = "";
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