<template>
<div class="form_style">
  <el-button @click="change1">银行授权码创建</el-button>
  <el-button @click="change2">公司权限码创建</el-button>

 <el-form size="small" :model="formObj" ref="formObj" :label-position="labelPosition" label-width="100px" @submit.native.prevent>
   <div class="CreatProject_left">
      <div>
        <h4>项目信息</h4>
      </div>
      <el-form-item label="项目名称"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'},{type: 'string', max: 50, message: '名称过长'}]"
                    prop="formObj.p_Name">
      <el-input class="about_input" v-model="formObj.p_Name" clearable/>
      </el-form-item>
      <el-form-item v-if="p_Creat" label="银行授权码"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'},{type: 'string', min: 30, max:30, message: '授权码有误'}]"
                    prop="formObj.u_PowerNum">
      <el-input class="about_input" v-model="formObj.u_PowerNum" clearable/>
      </el-form-item>
      <el-form-item v-if="p_inv" label="公司权限码"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'},{type: 'string', min: 23, max:23, message: '权限码有误'}]"
                    prop="formObj.u_PowerNum">
        <el-input class="about_input" v-model="formObj.u_PowerNum" @change="getPermission" clearable/>
      </el-form-item>
      <el-form-item label="项目说明"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'}]"
                    prop="formObj.p_Description">
      <el-input type="textarea" class="about_input" rows="2" v-model="formObj.p_Description" clearable/>
      </el-form-item>
      <el-form-item label="创建公司"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'},{type: 'string', max:20, message: '名称过长'}]"
                    prop="formObj.p_c_c_Name">
        <el-input class="about_input" v-model="formObj.p_c_c_Name" clearable/>
      </el-form-item>
      <el-form-item label="公司代码"
                    :rules="[{required: 'true', message: '不能为空',trigger: 'blur'},{type: 'string', min:10, max:10, message: '公司代码有误'}]"
                    prop="formObj.p_c_c_Num">
        <el-input class="about_input" v-model="formObj.p_c_c_Num" clearable/>
      </el-form-item>
      <el-form-item aria-disabled="p_Creat" label="业务范围"
                    prop="formObj.permission">
        <el-select v-model="formObj.permission">
          <el-option value="110011000000" label="资金"></el-option>
          <el-option value="001111000000" label="物流"></el-option>
          <el-option value="000011110000" label="仓储"></el-option>
          <el-option value="000011001100" label="采购"></el-option>
          <el-option value="000011000011" label="销售"></el-option>
        </el-select>
      </el-form-item>
    </div>
   <div v-if="p_inv" class="CreatProject_center">
      <div>
        <h4>邀请员工</h4>
      </div>
      <div>
      <vue-scroll ops="ops">
        <div v-for="(item1,index1) in formObj.employee" :key="index1">
          <el-form-item label="员工姓名"
                        :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min: 20, max: 20, message: '公司代码有误'}]"
                        :prop="'employee.' + index1 + '.u_Idname'">
            <el-input class="about_input" type="text" v-model="item1.u_Idname" clearable/>
          </el-form-item>
            <el-form-item label="员工账号"
                          :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min: 10, max: 10, message: '公司代码有误'}]"
                          :prop="'employee.' + index1 + '.u_Count'">
              <el-input class="about_input" type="text" v-model="item1.u_Count" clearable/>
            </el-form-item>
            <el-form-item label="权限"
                          :rules="[{required: 'true', message: '不能空选',trigger: 'change'}]"
                          :prop="'employee.' + index1 + '.permission'">
              <el-select v-model="item1.permission" @change="item1.c_Num = formObj.p_c_c_Num">

                <el-option v-show="tipOne" value="100010000000" label="资金只读"></el-option>
                <el-option v-show="tipOne" value="010010000000" label="资金只写"></el-option>
                <el-option v-show="tipOne" value="110010000000" label="资金可读可写"></el-option>

                <el-option v-show="tipTwo" value="001010000000" label="物流只读"></el-option>
                <el-option v-show="tipTwo" value="000110000000" label="物流只写"></el-option>
                <el-option v-show="tipTwo" value="001110000000" label="物流可读可写"></el-option>

                <el-option v-show="tipThree" value="000010100000" label="仓储只读"></el-option>
                <el-option v-show="tipThree" value="000010010000" label="仓储只写"></el-option>
                <el-option v-show="tipThree" value="000010110000" label="仓储可读可写"></el-option>

                <el-option v-show="tipFour" value="000010001000" label="采购只读"></el-option>
                <el-option v-show="tipFour" value="000010000100" label="采购只写"></el-option>
                <el-option v-show="tipFour" value="000010001100" label="采购可读可写"></el-option>

                <el-option v-show="tipFive" value="000010000010" label="销售只读"></el-option>
                <el-option v-show="tipFive" value="000010000001" label="销售只写"></el-option>
                <el-option v-show="tipFive" value="000010000011" label="销售可读可写"></el-option>
              </el-select>
            </el-form-item>
        </div>
        <hr>
      </vue-scroll>
      </div>
     <el-form-item>
      <el-button @click="add2">添加员工</el-button>
     </el-form-item>
    </div>
   <div v-if="p_Creat" class="CreatProject_right">
      <vue-scroll ops="ops">
      <div>
        <h4>其他参与公司</h4>
      </div>
        <div v-for="(item,index) in formObj.company" :key="index">
          <el-form-item :label="'公司'+index+'名称'"
                        :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', max: 20, message: '名称过长'}]"
                        :prop="'company.' + index + '.c_Name'">
          <el-input class="about_input" type="text" v-model="item.c_Name" clearable/>
          </el-form-item>
          <el-form-item :label="'公司'+index+'代码'"
                        :rules="[{required: 'true', message: '不能为空',trigger: 'change'},{type: 'string', min: 10, max: 10, message: '公司代码有误'}]"
                        :prop="'company.' + index + '.u_Count'">
          <el-input class="about_input" type="text" v-model="item.u_Count" clearable/>
          </el-form-item>
          <el-form-item label="业务范围"
                        :rules="[{required: 'true', message: '不能空选',trigger: 'change'}]"
                        :prop="'company.' + index + '.permission'">
            <el-select v-model="item.permission" >
              <el-option value="110010000000" label="资金"></el-option>
              <el-option value="001110000000" label="物流"></el-option>
              <el-option value="000010110000" label="仓储"></el-option>
              <el-option value="000010001100" label="采购"></el-option>
              <el-option value="000010000011" label="销售"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <hr/>
        <el-form-item>
        <el-button @click="add1">添加公司</el-button>
        </el-form-item>
      </vue-scroll>
    </div>
   <div>
   <el-form-item>
     <el-button @click="sub">确认创建</el-button>
   </el-form-item>
   </div>
 </el-form>

  <el-dialog title="贷可查" :visible.sync="dialogError1">
    <span>信息有误</span>
    <br><br>
    <span>创建失败</span>
    <br><br>
    <el-button @click="_back">返回</el-button>
  </el-dialog>

  <el-dialog title="贷可查" :visible.sync="dialogError2">
    <span>公司未加入项目</span>
    <br><br>
    <el-button @click="_back">返回</el-button>
  </el-dialog>

  <el-dialog title="贷可查" :visible.sync="dialogError3">
    <span>发生未知的错误</span>
    <br><br>
    <el-button @click="_back">返回</el-button>
  </el-dialog>

  <el-dialog title="公司权限码" :visible.sync="dialogVisible1">
    <div>
      <vue-scroll :ops="ops">
        <div v-for="(item3,index3) in back_company" :key="index3">
            <el-row>
            <el-col :span="8" label="公司名称">{{item3.c_Name}}</el-col>
            <el-col :span="8" label="公司代码">{{item3.u_Count}}</el-col>
            <el-col :span="8" label="公司权限码">{{item3.permission}}</el-col>
          </el-row>
        </div>
      </vue-scroll>
    </div>
    <el-button @click="_back">完成</el-button>
  </el-dialog>

  <el-dialog title="员工权限码" :visible.sync="dialogVisible2">
    <div>
      <vue-scroll :ops="ops">
        <div v-for="(item4,index4) in back_employee" :key="index4">
          <el-row>
            <el-col :span="8" label="员工姓名">{{item4.u_Idname}}</el-col>
            <el-col :span="8" label="员工账号">{{item4.u_Count}}</el-col>
            <el-col :span="8" label="员工权限码">{{item4.permission}}</el-col>
          </el-row>
        </div>
      </vue-scroll>
    </div>
    <el-button @click="_back">完成</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'project',
  data: function () {
    return {
      ops: {
        bar: {
          background: '#20894d',
          size: '6px'
        },
        vuescroll: {
          mode: 'slide',
          sizeStrategy: 'percent',
          detectResize: true,
          scroller: {
            minZoom: 1,
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
      p_Creat: true,
      p_inv: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogError1: false,
      dialogError2: false,
      dialogError3: false,
      tipOne: false,
      tipTwo: false,
      tipThree: false,
      tipFour: false,
      tipFive: false,
      formObj: {
        p_Name: '',
        p_Description: '',
        p_c_c_Num: '',
        p_c_c_Name: '',
        u_PowerNum: '',
        permission: '',
        employee: [{
          u_Idname: '',
          u_Count: '',
          c_Num: '',
          permission: ''
        }],
        company: [{
          c_Name: '',
          u_Count: '',
          permission: ''
        }]
      },
      back_employee: [{
        u_Idname: '',
        u_Count: '',
        c_Num: '',
        permission: ''
      }],
      back_company: [{
        c_Name: '',
        u_Count: '',
        permission: ''
      }]
    }
  },
  methods: {
    change1: function () {
      this.p_Creat = true
      this.p_inv = false
      this.$refs['formObj'].resetFields()
    },
    change2: function () {
      this.p_Creat = false
      this.p_inv = true
      this.$refs['formObj'].resetFields()
    },
    add2: function () {
      this.formObj.employee.push({
        u_Idname: '',
        u_Count: '',
        c_Num: '',
        permission: ''
      })
    },
    add1: function () {
      this.formObj.company.push({
        c_Name: '',
        u_Count: '',
        permission: ''
      })
    },
    sub () {
      let sendData = this.formObj
      let url = 'http://140.143.209.173:8080/api/creatproject'
      this.$axios.post(url, {params: sendData}).then(function (res) {
        if (res.data.errorCode === '0030') {
          this.dialogError1 = true
        } else if (res.data.errorCode === '0031') {
          this.dialogError2 = true
        } else if (res.data.errorCode === '0000') {
          this.back_employee = JSON.parse(JSON.stringify(res.data.employee))
          this.back_company = JSON.parse(JSON.stringify(res.data.company))
          this.dialogVisible1 = this.p_Creat
          this.dialogVisible2 = this.p_inv
        } else {
          this.dialogError3 = true
        }
      })
        .catch(function (error) { console.log(error) })
    },
    _back: function () {
      this.dialogError1 = false
      this.dialogError2 = false
      this.dialogError3 = false
      this.reload()
    },
    getPermission: function () {
      let permissionCode = this.formObj.u_PowerNum.substring(11, 23)
      this.formObj.permission = permissionCode
      if (permissionCode === '110001000000' || permissionCode === '110011000000') {
        this.tipOne = true
        this.tipTwo = false
        this.tipThree = false
        this.tipFour = false
        this.tipFive = false
      } else if (permissionCode === '001101000000' || permissionCode === '001111000000') {
        this.tipOne = false
        this.tipTwo = true
        this.tipThree = false
        this.tipFour = false
        this.tipFive = false
      } else if (permissionCode === '000001110000' || permissionCode === '000011110000') {
        this.tipOne = false
        this.tipTwo = false
        this.tipThree = true
        this.tipFour = false
        this.tipFive = false
      } else if (permissionCode === '000001001100' || permissionCode === '000011001100') {
        this.tipOne = false
        this.tipTwo = false
        this.tipThree = false
        this.tipFour = true
        this.tipFive = false
      } else if (permissionCode === '000001000011' || permissionCode === '000011000011') {
        this.tipOne = false
        this.tipTwo = false
        this.tipThree = false
        this.tipFour = false
        this.tipFive = true
      }
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
  background-color: rgba(255,255,255,0.5);
  text-align: center;
  width: 90%;
  hight: 85%;
  margin: 5% 5% 5%;
  font-family:'Avenir', Helvetica, Arial, sans-serif, "宋体";
}
.about_input{
  background-color:#FFFFFF;
  outline:none;
  border:0;
  width:70%;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
}
hr{
  border:0;
  background-color:#C0C0C0;
  width:90%;
  height:1px;align:center;
}
.CreatProject_left{
  float:left;
  width:42%;
  margin-left: 5%;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
}
.CreatProject_center{
  float:right;
  width:42%;
  margin-right: 5%;
}
.CreatProject_right{
  float:right;
  width:42%;
  margin-right: 5%;
}
</style>
