<template>
  <div id="manage">
    <el-row :gutter="20"  type="flex" justify="center">
      <el-col :span="3"><div class="grid-content back-block bg-orange"></div></el-col>
      <el-col :span="15"><div class="grid-content bg-trans-white back-block">

        <vue-scroll :ops="ops">
          <el-row class="trans-color">
            <el-col class="trans-color card" :span="5" v-for="project in projectlist" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card class="trans-color" :body-style="{ padding: '0px'}">
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

      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
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
      ]
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
  .card{
    margin: 10px;
  }
  .trans-color {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
  .block-under-div{
    padding: 10px 0px;
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
  .back-block {
    height: 700px;
  }
  .el-row {
    margin-bottom: 20px;
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
    background-color: #f9fafc;
  }
</style>
