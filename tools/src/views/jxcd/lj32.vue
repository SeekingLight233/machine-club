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
            <mu-text-field v-model="d1" label="螺杆小径d1="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="u1" label="长度系数μ1="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="l" label="最大工作长度l="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="i" label="惯性半径i="  label-float>mm</mu-text-field>
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
          <h3 class="myh3">临界载荷Fcr=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">N</h3>
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
      <img src="../assets/lj32.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、长度系数，与螺杆的端部结构有关 2、螺杆临界载荷 Fcr用于校核螺杆的稳定性，防止失稳。稳定的条件为Fcr/F ≥2.5~4。不能满足此要求时，可增大螺杆中径 d1。Fcr 的求解分为三种情况，本公式适用于 μ1*l/i小于85。 3、i=sqrt(Ia/A)=d1/4</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      d1:"",
      u1:"",
      l:"",
      i:"",
      
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let d1 = parseFloat(this.d1);
        let u1 = parseFloat(this.u1);
        let l = parseFloat(this.l);
        let i = parseFloat(this.i);
        
      let result = (480/(1+2*0.0001*Math.pow((u1*l)/i,2)))*((Math.PI*d1*d1)/4)
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.d1 = "";
      this.u1 = "";
      this.l = "";
      this.i = "";
      
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