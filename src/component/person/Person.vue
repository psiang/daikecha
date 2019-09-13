<template>
  <div id="person" class="trans-color">

      <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}">

          <el-col :span="7" offset="1" style="height:600px;">
            <div class="grid-content back-block bg-trans-white" style="height:600px;">
              <div style="position:relative;font-size:40px;font-family:'Microsoft YaHei';height:100px;">
                <p style="position:absolute;bottom:0px;padding:0px;margin:0px;margin-left:20px;float:left;"><font color="#F7BA2A">PROFILE</font>
                  <font color="#000000" style="font-size:25px;font-family:'PingFang SC'">个人信息</font></p>
              </div>

               <div id="person" style="position:relative;margin-top:30px;">
                 <img src="../../assets/logo.png" class="head-image" style="float:left;margin-left:20px;margin-right:20px;">
                 <div style="">
                   <p style="font-size:15px; margin:0;font-family:'PingFang SC';">用户账号&nbsp{{user.u_Count}}</p>
                   <p style="font-size:15px; margin:0;font-family:'PingFang SC';color:#5e616d;">{{ user.u_PCount}}个项目</p>
                 </div>
               </div>

               <div id="person" style="position:relative;margin-top:30px;margin-left:20px;">
                  <p style="margin:0;font-size:15px;font-family:'PingFang SC'">用户昵称&nbsp  <font>{{user.u_Nickname}}</font></p>
                  <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">公司名称&nbsp <font>{{user.c_Name}}</font></p>
                  <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">公司信用分数&nbsp <font>{{user.credit_Csource}}</font></p>
               </div>
               <!--<div>
               <el-button type="primary">修改信息</el-button>
               </div>
               <div style="position:relative;left:300px; top:-40px;">
                <el-button type="warning">退出账号</el-button>
              </div>-->
            </div>
          </el-col>

          <!--<el-col :span="4" class="bg-blue" style="height:600px;">
              <div style="position:relative;">
                  <p style="font-size:20px;font-family:'PingFang SC'">加入新项目&nbsp&nbsp&nbsp&nbsp&nbsp<i class="el-icon-arrow-right"></i></p>
                  <p>&nbsp</p>
                   <p>&nbsp</p>
                   <p>&nbsp</p>
                  <p style="font-size:20px;font-family:'PingFang SC'">
                  问题反馈&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="el-icon-arrow-right"></i>
                  <p>&nbsp</p>
              </div>
               <div v-for='item in list'>
                    <el-input
                      type="textarea"
                       :rows="24"
                       maxlength=100
                      placeholder="请输入内容"
                      v-model="item.text">
                    </el-input>
                  </div>
              </p>

              <p><el-button type="success ">提交问题<i class="el-icon-upload el-icon--right"></i></el-button></p>
                <p>&nbsp</p>
                 <p>&nbsp</p>
                   <p>&nbsp</p>
                    <p>&nbsp</p>

          </el-col>-->

          <el-col :span="11" offset="1" style="height:600px;">
            <div class="grid-content back-block bg-orange" style="height:600px;">
              <p style="padding:0px;margin:0px;margin-left:20px;margin-top:20px;margin-bottom:10px;"><font color="#FFFFFF">请输入你的授权码</font></p>
              <br>
                <el-input
                  size="large"
                    placeholder="请输入授权码"
                  v-model="input.input6" style="width:60%;">
                 </el-input>
                 <br>
              <el-button type="primary" icon="search">搜索</el-button>
              <div style="position:relative;left:10px; top:20px;">
                  <p style="font-size:20px;font-family:'PingFang SC'">根据您的授权码，我们为您找到以下项目</p>
               <div id="person">
                <p style="font-size:20px;font-family:'Microsoft YaHei'">{{user.p_Name}}</p>
                     <p style="font-size:20px;font-family:'Microsoft YaHei'">{{user.p_Description}}</p>
               </div>
                <p style="font-size:20px;font-family:'PingFang SC'">参与的员工</p>
                </div>
                <el-card class="box-card">
                  <div v-for="staff in items" :key="staff" class="text item">
                    {{staff.staff }}
                  </div>
                </el-card>
                 <div style="position:relative;left:10px; top:20px;">
               <p style="font-size:20px;font-family:'PingFang SC'">参与的公司</p>
                 </div>
                <el-card class="box-card">
                       <div v-for="company in items1" :key="company" class="text item">
                         {{company.company }}
                       </div>
                     </el-card>
                 <div class="block">
                     <span class="wrapper">
                       <div style="position:relative;left:750px; top:00px;">
                     <el-button type="success" native-type = "submit">加入</el-button>
                       </div>
                       </span>
                 </div>
            </div>
          </el-col>

      </el-row>

  </div>

</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      user:{
      u_Count: 'aa',
      u_PCount: '13',
      c_Name: 'AA',
      u_Nickname: 'AA',
      p_Name: '东风第三次物流',
      p_Description:'XXXXXXX',
      credit_Csource:'99'
    },
    text:{
    textarea: ''
    },
    input:{
          input6: '',
          input7: '',
          input8: '',
          input9: '',
    },

    items: [
          { staff: 'Foo' },
          { staff: 'Bar' },
          { staff: 'ZAR' },
          { staff: 'HKU' },
        ],
    items1: [
             { company: 'C1' },
             { company: 'C2' },
             { company: 'C3' },
             { company: 'C4' },
         ],
     list: [
               {
                 n: 1,
                 text: ''
               }
             ]
    }
  },
  created(){
      this.list.forEach(item => {
        item.text = this.get(item.n)
      })
    },
 methods: {
   get(n){
     // 根据n的值去请求接口获取显示的内容
  }
    }

}

</script>
<style>
  .head-image {
    height: 50px;
    width: auto;
  }
  .trans-color {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
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
  .bg-orange{
  background: #DC863C;
  }
   .bg-blue{
    background: #409EFF;
    }

    .bg-white{
        background: rgba(255, 255, 255, 0.5);
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
    border-radius: 50px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
  .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

    .box-card {
      width: 480px;
    }
</style>
