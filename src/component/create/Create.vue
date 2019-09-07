<template>
<div class="form_style" >
  <el-form size="small" :model="formObj" ref="formObj" :label-position="labelPosition" label-width="100px" @submit.native.prevent>
    <div class="CreatProject_left">
      <div>
        <h4>项目信息</h4>
      </div>
      <el-form-item label="项目名称"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', max: 50, message: '名称过长'}]"
                    prop="formObj.project_name">
      <el-input class="about_input" v-model="formObj.project_name" clearable/>
      </el-form-item>
      <el-form-item label="授权码"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min: 30, max:30, message: '授权码有误'}]"
                    prop="formObj.bank_num">
      <el-input class="about_input" v-model="formObj.bank_num" clearable/>
      </el-form-item>
      <el-form-item label="项目说明"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'change'}]"
                    prop="formObj.project_about">
      <el-input type="textarea" class="about_input" rows="1" cols="30%width" v-model="formObj.project_about" clearable/>
      </el-form-item>
      <el-form-item label="创建公司"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', max:20, message: '名称过长'}]"
                    prop="formObj.project_c_name">
        <el-input class="about_input" v-model="formObj.project_c_name" clearable/>
      </el-form-item>
      <el-form-item label="公司代码"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min:6, max:6, message: '公司代码有误'}]"
                    prop="formObj.project_c_num">
        <el-input class="about_input" v-model="formObj.project_c_num" clearable/>
      </el-form-item>
      <el-form-item label="业务范围"
                    :rules="[{required: 'true', message: '不能空选',trigger: 'change'}]"
                    prop="formObj.project_c_power">
        <el-select v-model="formObj.project_c_power">
          <el-option value="110011000000" label="资金"></el-option>
          <el-option value="001111000000" label="物流"></el-option>
          <el-option value="000011110000" label="仓储"></el-option>
          <el-option value="000011001100" label="采购"></el-option>
          <el-option value="000011000011" label="销售"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="CreatProject_right">
      <vue-scroll :ops="ops">
        <div v-for="(item,index) in formObj.c_in" :key="index">
          <div>
            <div>
              <h4>参与公司</h4>
            </div>
          <el-form-item :label="'公司'+index+'名称'"
                        :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', max: 20, message: '名称过长'}]"
                        :prop="'c_in.' + index + '.c_name'">
          <el-input class="about_input" type="text" v-model="item.c_name" clearable/>
          </el-form-item>
          <el-form-item :label="'公司'+index+'代码'"
                        :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min: 6, max: 6, message: '公司代码有误'}]"
                        :prop="'c_in.' + index + '.c_num'">
          <el-input class="about_input" type="text" v-model="item.c_num" clearable/>
          </el-form-item>
          <el-form-item label="业务范围"
                        :rules="[{required: 'true', message: '不能空选',trigger: 'change'}]"
                        :prop="'c_in.' + index + '.c_power'">
            <el-select v-model="item.c_power" >
              <el-option value="110010000000" label="资金"></el-option>
              <el-option value="001110000000" label="物流"></el-option>
              <el-option value="000010110000" label="仓储"></el-option>
              <el-option value="000010001100" label="采购"></el-option>
              <el-option value="000010000011" label="销售"></el-option>
            </el-select>
          </el-form-item>
          </div>
        </div>
      </vue-scroll>
        <el-button @click="add" >添加公司</el-button>
    </div>
    <el-button @click="sub">确认创建</el-button>
  </el-form>
</div>
</template>

<script>
import 'vuescroll'
export default {
  name: 'CreatProject',
  components: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'number'
    }
  },
  data: function () {
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
      labelPosition: 'left',
      formObj: {
        project_name: '',
        bank_num: '',
        project_about: '',
        project_c_name: '',
        project_c_num: '',
        project_c_power: '',
        c_in: [{
          c_name: '',
          c_num: '',
          c_power: ''
        }]
      }
    }
  },
  methods: {
    add: function () {
      this.formObj.c_in.push({
        c_name: '',
        c_num: '',
        c_power: ''
      })
    },
    sub: function () {
      console.log(JSON.stringify(this.formObj))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form_style{
  font-family:'Avenir', Helvetica, Arial, sans-serif, "宋体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgba(241, 240, 237, 0.7);
  text-align: center;
  width: 90%;
  hight: 300px;
  margin: 5% 5% 5%;
}
.about_input{
  background-color:#FFFFFF;
  outline:none;
  border:0;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
}
hr{
  border:0;
  background-color:#C0C0C0;
  width:90%;
  height:1px;align:center;
}
.CreatProject_left{
  width:40%;
  float:left;
  height: 300px;
  margin: 2% 5% 5%;
  font-family:'Avenir', Helvetica, Arial, sans-serif, "宋体";
}
.CreatProject_right{
  width:40%;
  float:right;
  height: 300px;
  margin: 2% 5% 5%;
  font-family:'Avenir', Helvetica, Arial, sans-serif, "宋体";
}
</style>
