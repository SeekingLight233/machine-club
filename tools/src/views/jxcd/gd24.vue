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
            <mu-text-field v-model="f" label="轴向载荷F="  label-float>N</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="dm" label="分布直径dm="  label-float>mm</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="ug" label="滚动摩擦因数μg="  label-float></mu-text-field>
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
          <h3 class="myh3">滚动摩擦转矩T2=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show">N*mm</h3>
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
      <img src="../assets/gd24.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;滑动螺旋传动支撑面的滚动摩擦转矩</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      f:"",
      dm:"",
      ug:"",
      res: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let f = parseFloat(this.f);
        let dm = parseFloat(this.dm);
        let ug = parseFloat(this.ug);
        
      let result = 0.5*ug*f*dm;
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.f = "";
      this.dm = "";
      this.ug = "";
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