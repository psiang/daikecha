<template>
  <div id="person" class="trans-color" :style='note'>

      <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}" style="">

          <el-col :span="7" offset="1" style="height:600px;margin-top:30px;">
            <div class="grid-content back-block bg-trans-white" style="height:600px;">
              <div style="position:relative;font-size:40px;font-family:'Microsoft YaHei';height:100px;">
                <p style="position:absolute;bottom:0px;padding:0px;margin:0px;margin-left:20px;float:left;"><font color="#F7BA2A">PROFILE</font>
                  <font color="#000000" style="font-size:25px;font-family:'PingFang SC'">个人信息</font></p>
              </div>

               <div style="position:relative;margin-top:30px;">
                 <img src="../../assets/logo.png" class="head-image" style="float:left;margin-left:20px;margin-right:20px;">
                 <div style="">
                   <p style="font-size:15px; margin:0;font-family:'PingFang SC';">用户账号&nbsp{{u_Count}}</p>
                   <p style="font-size:15px; margin:0;font-family:'PingFang SC';color:#5e616d;">{{ user.u_PCount}}个项目</p>
                 </div>
               </div>

               <div id="person" style="position:relative;margin-top:30px;margin-left:20px;">
                  <!--<p style="margin:0;font-size:15px;font-family:'PingFang SC'">用户昵称&nbsp  <font>{{user.u_Nickname}}</font></p>-->
                  <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">公司名称&nbsp <font>{{user.c_Name}}</font></p>
                  <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">公司信用分数&nbsp <font>{{user.credit_Csource}}</font></p>
               </div>

                <el-button type="primary" style="margin-left:20px;margin-top:20px;" @click="">修改信息</el-button>
                <el-button style="margin-left:20px;margin-top:20px;" @click="addRoutes">退出登录</el-button>
               <!--<div>
               <el-button type="primary">修改信息</el-button>
               </div>
               <div style="position:relative;left:300px; top:-40px;">
                <el-button type="warning">退出账号</el-button>
              </div>-->
            </div>
          </el-col>


          <el-col :span="11" style="height:600px;margin-top:30px;">

            <div class="grid-content back-block bg-orange" style="height:600px;">
              <div style="position:relative;font-size:20px;font-family:'Microsoft YaHei';height:50px;">
                <p style="position:absolute;bottom:0px;padding:0px;margin:0px;margin-left:20px;float:left;">
                  <font color="#FFFFFF" style="font-size:20px;font-family:'PingFang SC'">请输入你的授权码</font></p>
              </div>

              <div id="person" style="position:relative;margin-top:10px;margin-left:20px;">
                <el-input
                  size="large"
                    placeholder="请输入授权码"
                  v-model="input.input6" style="width:60%;">
                 </el-input>
              </div>
              <!--<el-button type="primary" icon="search" style="margin-left:20px;margin-top:10px;">搜索</el-button>
              <div style="position:relative;margin-left:20px;">
                <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">根据您的授权码，我们为您找到以下项目</p>
                <p style="margin:0;margin-top:10px;font-size:15px;font-family:'Microsoft YaHei'">{{user.p_Name}}</p>
                <p style="margin:0;margin-top:10px;font-size:15px;font-family:'Microsoft YaHei'">{{user.p_Description}}</p>
                <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">参与的员工</p>
              </div>
                <el-card class="box-card">
                  <vue-scroll :ops="ops">
                  <div v-for="staff in items" :key="staff" class="text item">
                    {{staff.staff }}
                  </div>
                </vue-scroll>
                </el-card>
               <div style="position:relative;margin-left:20px;">
                 <p style="margin:0;margin-top:10px;font-size:15px;font-family:'PingFang SC'">参与的公司</p>
               </div>
                <el-card class="box-card">
                    <vue-scroll :ops="ops">
                       <div v-for="company in items1" :key="company" class="text item">
                         {{company.company }}
                       </div>
                     </vue-scroll>
                     </el-card>-->
                 <div class="block">
                       <div style="position:relative; margin-top:10px;margin-left:20px;">
                     <el-button type="success" native-type = "submit" @click="joinIn(input.input6)">加入</el-button>
                       </div>
                 </div>
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

      </el-row>

  </div>

</template>

<script>
import { Message } from 'element-ui';
import global from '../../common.vue'
export default {
  name: 'person',
  data () {
    return {
      ip: '',
      u_Count: "2345678901",
      user:{
      u_PCount: '13',
      c_Name: 'AA',
      /*u_Nickname: 'AA',
      p_Name: '东风第三次物流',
      p_Description:'XXXXXXX',*/
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
             ],
     note: {
           backgroundImage: "url(" + require("../../assets/images/background.jpg") + ")",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100% 100%",
           width: "100%",
           height: "800px",
           backgroundAttachment: "fixed",
         }
    }
  },
  mounted: function() {

    let _this = this;
    console.log(_this.getIPs());//获取内网ip
    console.log("bbbb");

    var that = this;
    let url = 'http://140.143.209.173:8000/api/myinfo/';
    this.$axios.post(url, {
      u_Count:this.u_Count
    })
    .then(function (res) {
      console.log(res);
      that.user.u_PCount = res.data.u_Pcount;
      that.user.c_Name = res.data.c_Name;
      that.user.credit_Csource = res.data.credit_CSource;
      console.log(that.user);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  created(){
      this.list.forEach(item => {
        item.text = this.get(item.n)
      })
    },
 methods: {
   addRoutes() {
     global.Authorized = false;
     global.currentid = '';
     global.AccountToken = '';
     this.$router.push('/login')  //此处为退出的跳转路径
   },
   joinIn(powercode) {
     console.log(this.ip);
     var that = this;
     let url = 'http://140.143.209.173:8000/api/joinproject/';
     this.$axios.post(url, {
       u_Count:this.u_Count,
       u_PowerNum:powercode
     })
     .then((res) => {
       var ans = res.data.errorCode.slice();
       if (ans == "0000") {
         that.$message({
           message: '加入成功',
           type: 'success'
         });
       }
       else if (ans == "0021") {
         that.$message({
           type:"error",
           duration: 1500,
           message: "权限码错误"
         });
       }
       else {
         that.$message({
          showClose: true,
          message: '加入失败',
          type: 'error'
        });
       }
     })
     .catch(function (error) {
       console.log(error);
     });

   },
   getIPs(){
       let _this = this;
       var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
       if (RTCPeerConnection) (function () {
           var rtc = new RTCPeerConnection({iceServers:[]});
           if (1 || window.mozRTCPeerConnection) {
               rtc.createDataChannel('', {reliable:false});
           };

           rtc.onicecandidate = function (evt) {
               if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
           };
           rtc.createOffer(function (offerDesc) {
               grepSDP(offerDesc.sdp);
               rtc.setLocalDescription(offerDesc);
           }, function (e) { console.warn("offer failed", e); });


           var addrs = Object.create(null);
           addrs["0.0.0.0"] = false;
           function updateDisplay(newAddr) {
               if (newAddr in addrs) return;
               else addrs[newAddr] = true;
               var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
               for(var i = 0; i < displayAddrs.length; i++){
                   if(displayAddrs[i].length > 16){
                       displayAddrs.splice(i, 1);
                       i--;
                   }
               }
               console.log('测试ip',addrs);      //打印出内网ip
               console.log('内网ip',displayAddrs[0]);      //打印出内网ip
               _this.user.ip_in = displayAddrs[0];//获取内网ip
           }

           function grepSDP(sdp) {
               var hosts = [];
               sdp.split('\r\n').forEach(function (line, index, arr) {
               if (~line.indexOf("a=candidate")) {
                       var parts = line.split(' '),
                           addr = parts[4],
                           type = parts[7];
                       if (type === 'host') updateDisplay(addr);
                   } else if (~line.indexOf("c=")) {
                       var parts = line.split(' '),
                           addr = parts[2];
                       updateDisplay(addr);
                   }
               });
           }
       })();
       else{
           console.log("请使用主流浏览器：chrome,firefox,opera,safari");
       }
           },
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
      padding: 2px 0;
      height: 10px;
    }

    .box-card {
      width: 70%;
      margin-left: 20px;
      height: 100px;
    }
</style>
