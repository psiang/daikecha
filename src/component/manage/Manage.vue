<template>
  <div id="manage">
    <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}">
      <el-col :span="3"><div class="grid-content back-block bg-orange"></div></el-col>
      <el-col :span="15"><div class="grid-content bg-trans-white back-block">
        请输入关键字：<input type="text" v-model="keyword" @keyup="sendJsonP(keyword)">
        <ul>
            <li v-for="r in result">{{r}}</li>
        </ul>
        <vue-scroll :ops="ops">
          <el-row class="trans-color">
            <el-col class="trans-color card" :span="5" v-for="project in projectlist" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card class="trans-color" :body-style="{ padding: '0px'}" @click.native="dialogFormVisible = true">
                <img :src="['static/project/'+ project.imgsrc + '.jpg']" class="image">
                <div class="trans-color block-under-div">
                  <div class="bottom clearfix trans-color">
                    <span class="project-name">{{project.name}}</span>
                    <el-button type="text" class="button">未完成</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </vue-scroll>
        <!--对话中的内容-->
        <el-dialog title="提示" :visible.sync="dialogFormVisible" size="full">
          <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}">
            <el-col :span="10"><div class="grid-content back-block-in bg-gray"></div></el-col>
            <el-col :span="18"><div class="grid-content bg-gray back-block-in">

              <p class="large-title">动&nbsp&nbsp&nbsp态</p>
              <vue-scroll :ops="ops" class="scroll-in">
                <el-row class="trans-color">
                  <el-col class="trans-color card-in" :span="24" v-for="project in projectlist" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}" @click.native="dialogFormVisible = true">
                      <p class="small-title">2019年09月09日</p>
                      <div class="bg-white block-under-div-in">
                          <p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col :span="12"><div class="grid-content trans-color">
                              <p class="small-text">快递单号:123456789</p><br>
                              <p class="small-text">发件方:湖北省顺庆有限公司</p><br>
                              <p class="small-text">收件方:东风汽车物流管理部门</p><br>
                              <p class="small-text">件数:51件&nbsp&nbsp总质量:15吨</p><br>
                              <p class="small-text">运输公司:顺丰快递</p><br>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content trans-color">
                              <p class="small-text">收件地址:东风物流三号仓</p><br>
                              <p class="small-text">收件时间:2019年09月09日18:00</p><br>
                              <p class="small-text">收件员:张三</p><br>
                              <p class="small-text">派件员:李四&nbsp&nbsp快递状态:揽收</p><br>
                              <p class="small-text">补充信息:上次货物补发</p><br>
                            </div></el-col>
                          </el-row>
                          <img :src="['static/project/'+ project.imgsrc + '.jpg']" class="image-in">
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </vue-scroll>

            </div></el-col>

            <el-col :span="2"><div class="grid-content trans-color back-block-in">
              <i class="el-icon-close icon-close" @click="dialogFormVisible = false"></i>
            </div></el-col>
          </el-row>

        </el-dialog>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      keyword: '',
      result: '',
      ops: {
        bar: {
            background: '#20894d',
            size: '6px',
          },
        vuescroll: {
          mode: 'slide',
          sizeStrategy: 'percent',
          detectResize: true,
          scroller: {
            /** Minimum zoom level */
            minZoom: 1,
            /** Maximum zoom level */
            maxZoom: 1
          }
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: 'right'
        }
      },
      projectlist: [
        { imgsrc: '1', name: '项目A' },
        { imgsrc: '2', name: '项目B' },
        { imgsrc: '3', name: '项目C' },
        { imgsrc: '4', name: '项目D' },
        { imgsrc: '5', name: '项目E' },
        { imgsrc: '5', name: '项目F' },
        { imgsrc: '3', name: '项目G' },
        { imgsrc: '2', name: '项目H' },
        { imgsrc: '4', name: '项目I' },
        { imgsrc: '1', name: '项目J' },
        { imgsrc: '2', name: '项目K' },
        { imgsrc: '4', name: '项目L' },
        { imgsrc: '5', name: '项目M' },
        { imgsrc: '1', name: '项目N' },
        { imgsrc: '3', name: '项目O' },
        { imgsrc: '1', name: '项目A' },
        { imgsrc: '2', name: '项目B' },
        { imgsrc: '3', name: '项目C' },
        { imgsrc: '4', name: '项目D' },
        { imgsrc: '5', name: '项目E' },
        { imgsrc: '5', name: '项目F' },
        { imgsrc: '3', name: '项目G' },
        { imgsrc: '2', name: '项目H' },
        { imgsrc: '4', name: '项目I' },
        { imgsrc: '1', name: '项目J' },
        { imgsrc: '2', name: '项目K' },
        { imgsrc: '4', name: '项目L' },
        { imgsrc: '5', name: '项目M' },
        { imgsrc: '1', name: '项目N' },
        { imgsrc: '3', name: '项目O' },
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted: function() {
  },
  methods: {
    sendJsonP(keyword) {
      let url = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web';
      this.$http.jsonp(url, {
        params: {
          wd: keyword
        },
        jsonp: 'cb'//jsonp默认是callback,百度缩写成了cb，所以需要指定下                     }
      }).then(res => {
        if (res.data.g) {
          this.result = res.data.g.map(x => x['q']);
        } else {
          this.result = [];
        }
      });
    }
	}
}
</script>

<style>
  #manage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .scroll-in {
    margin-left: 20px;
    width: 95% !important;
    height: 90% !important;
  }
  .large-title {
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 17px;
    text-align: left;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .small-title {
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 14px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    color: #000000;
  }
  .small-text {
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 12px;
    text-align: left;
    margin: 0px;
    padding: 0px;
    color: #5e616d;
  }
  .icon-close {
    font-size: 30px;
    color: rgba(255,255,255,1);
    font-weight: 200;
  }
  .el-dialog__header {
    visibility: collapse;
    display: none;
  }
  .el-dialog, .el-pager
  li {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    -webkit-box-sizing: border-box;
  }
  .el-dialog {
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0);
    box-shadow: 0 1px 3px rgba(0,0,0,0);
    width: 90%;
    margin-top: 10px !important;
  }

  .card{
    margin: 10px;
  }
  .card-in{
    margin-bottom: 20px;
  }
  .trans-color {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
  .block-under-div{
    padding: 10px 0px;
  }
  .block-under-div-in{
    padding-left: 20px;
  }
  .project-name {
    padding: 0;
    float: left;
  }
  .bottom {
    margin-top: 5px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
    color: #7a7374;
  }
  .image {
    width: 100%;
    height: 130px;
    display: block;
  }
  .image-in {
    margin-bottom: 20px;
    width: auto;
    height: 130px;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .bg-orange {
    background: #f27635;
  }
  .bg-trans-white {
    background: rgba(241, 240, 237, 0.7);
  }
  .bg-gray {
    background: rgba(241, 240, 237, 1);
  }
  .bg-white {
    background: rgba(255, 255, 255, 1);
  }
  .back-block {
    height: 600px;
  }
  .back-block-in {
    height: 600px;
  }
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
