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
            <mu-text-field v-model="u" label="齿数比u="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="k" label="载荷系数K="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="t1" label="小齿轮传递的额定转矩T1="  label-float>N·m</mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="a" label="齿宽系数φa="  label-float></mu-text-field>
          </div>
          
          <div class="myinput">
            <mu-text-field v-model="d" label="齿宽系数φd="  label-float></mu-text-field>
          </div>
          <div class="myinput">
            <mu-text-field v-model="ahp" label="许用接触应力σHP="  label-float>MPa</mu-text-field>
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
          <h3 class="myh3">amin=</h3>
          <div id="res">
            <font color="#f44336">{{res}}</font><h3 class="myh3" v-if="show"> mm</h3>
          </div><br>
          <h3 class="myh3">d1min=</h3>
          <div id="res">
            <font color="#f44336">{{res1}}</font><h3 class="myh3" v-if="show"> mm</h3>
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
      <img src="../assets/wc41.png" alt width="50%" /><br>
      <img src="../assets/wc411.png" alt width="50%" />
      <div class="center">
        <p
          class="para"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、摘自GB/T 10063-1998。齿轮1为小齿轮，齿轮2为大齿轮。 2、齿数比，大齿轮齿数比小齿轮， u=Z2/Z1； 3、载荷系数，依据驱动、载荷、精度、速度、对称性取值，一般在1.2~2； 4、齿宽系数， φa=b/a， φa=0.1~1.2； 5、齿宽系数， φd=b/d1， d=0.5~2.4； 6、许用接触应力，应代入σHP1 与 σHP2中的小值</p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      u:"",
      k:"",
      t1:"",
      a:"",
      d:"",
      ahp:"",
      
      
      
      res: "",
      res1: "",
      show:false
    };
  },
  name: "sxgj1",
  components: {},
  methods: {
    cal() {
        let u = parseFloat(this.u);
        let k = parseFloat(this.k);
        let t1 = parseFloat(this.t1);
        let a = parseFloat(this.a);
        let d = parseFloat(this.d);
        let ahp = parseFloat(this.ahp);
        
      let result = 476*(u+1)*Math.pow((k*t1)/(a*ahp*ahp*u),1/3)
      console.log(result.toFixed(3));
      this.res = result.toFixed(3).toString();
      this.show = true;
      let result1 = 756*Math.pow(((k*t1)/(d*ahp*ahp))*((u+1)/u),1/3);
      console.log(result1.toFixed(3));
      this.res1 = result1.toFixed(3).toString();
      this.show = true;
    },
    clear() {
      this.u = "";
      this.k = "";
      this.t1 = "";
      this.a = "";
      this.d = "";
      this.ahp = "";
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