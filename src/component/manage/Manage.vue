<template>
  <div id="manage" :style='note'>
    <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}">
      <el-col class="el-col-radius" :span="3" style="margin-top:30px;"><div class="grid-content back-block bg-orange"></div></el-col>
      <el-col class="el-col-radius" :span="15" style="margin-top:30px;"><div class="grid-content bg-trans-white back-block">
        <!--请输入关键字：<input type="text" v-model="keyword" @keyup="sendJsonP(keyword)">
        <ul>
            <li v-for="r in result">{{r}}</li>
        </ul>-->
        <vue-scroll :ops="ops">
          <el-row class="trans-color">
            <el-col class="trans-color card el-col-radius" :span="5" v-for="project in projectlist" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card class="trans-color" :body-style="{ padding: '0px'}" @click.native="dialogFormVisible = true, clickDialog(project.p_Type,project.p_Num,project.p_Name)">
                <img :src="['static/project/'+ project.p_Type + '.png']" class="image">
                <div class="trans-color block-under-div">
                  <div class="bottom clearfix trans-color">
                    <span class="project-name">{{project.p_Name}}</span>
                      <span class="project-name" style="margin-top:5px;">ID:{{project.p_Num}}</span>
                    <el-button type="text" class="button">{{statulist[project.p_Num]}}</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </vue-scroll>
        <!--对话中的内容-->
        <el-dialog title="提示" :visible.sync="dialogFormVisible" size="full">
          <el-row :gutter="20"  type="flex" justify="center" :style="{width: '100%'}">
            <!--<el-col class="el-col-radius" :span="10"><div class="grid-content back-block-in bg-gray"></div></el-col>-->
            <el-col class="el-col-radius" :span="18"><div class="grid-content bg-gray back-block-in">

              <p class="large-title">动&nbsp&nbsp&nbsp态</p>
              <el-button type="primary" icon="edit" class="btn-edit" @click="openForm"><i class="el-icon-edit"></i></el-button>
              <vue-scroll :ops="ops" class="scroll-in">
                <el-row class="trans-color">
                  <!--物流表单-->
                  <el-col class="trans-color card-in el-col-radius" :style="editForm1" :span="24" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{timenow}}</p>
                      <div class="bg-white block-under-div-in" style="padding-bottom: 20px;">
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}" style="margin-bottom: 20px;">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">快递单号:<el-input v-model="form.expressBillCode" class="form-input"></el-input></p><br>
                              <p class="small-text">发件方:<el-input v-model="form.senderName" class="form-input"></el-input></p><br>
                              <p class="small-text">收件方:<el-input v-model="form.receiverName" class="form-input"></el-input></p><br>
                              <p class="small-text">件数:<el-input v-model="form.goodsQuantity" class="form-input"></el-input></p><br>
                              <p class="small-text">总质量:<el-input v-model="form.goodsQuality" class="form-input"></el-input></p><br>
                              <p class="small-text">运输公司:<el-input v-model="form.transportCompanyName" class="form-input"></el-input></p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">收件地址:<el-input v-model="form.receiverAddress" class="form-input"></el-input></p><br>
                              <p class="small-text">收件时间:<el-input v-model="form.receiveTime" class="form-input"></el-input></p><br>
                              <p class="small-text">收件员:<el-input v-model="form.transportReceiverName" class="form-input"></el-input></p><br>
                              <p class="small-text">派件员:<el-input v-model="form.transportDelivererName" class="form-input"></el-input></p><br>
                              <p class="small-text">快递状态:<el-input v-model="form.goodsStatus" class="form-input"></el-input></p><br>
                              <p class="small-text">补充信息:<el-input v-model="form.remark" class="form-input"></el-input></p><br>
                            </div></el-col>
                          </el-row>
                          <el-button type="primary" @click="confirmForm1">确认</el-button>
                          <el-button @click="cancelForm1">取消</el-button>
                      </div>
                    </el-card>
                  </el-col>

                  <!--资金流表单-->
                  <el-col class="trans-color card-in el-col-radius" :style="editForm2" :span="24" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{timenow}}</p>
                      <div class="bg-white block-under-div-in" style="padding-bottom: 20px;">
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}" style="margin-bottom: 20px;">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">资金时间:<el-input v-model="form.date" class="form-input"></el-input></p><br>
                              <p class="small-text">总进账:<el-input v-model="form.totalIn" class="form-input"></el-input></p><br>
                              <p class="small-text">账户余额:<el-input v-model="form.balance" class="form-input"></el-input></p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">流动金额:<el-input v-model="form.amount" class="form-input"></el-input></p><br>
                              <p class="small-text">总支出:<el-input v-model="form.totalOut" class="form-input"></el-input></p><br>
                              <p class="small-text">款项类型:<el-input v-model="form.cashFlowType" class="form-input"></el-input></p><br>
                            </div></el-col>
                          </el-row>
                          <el-button type="primary" @click="confirmForm2">确认</el-button>
                          <el-button @click="cancelForm2">取消</el-button>
                      </div>
                    </el-card>
                  </el-col>


                  <!--采购表单-->
                  <el-col class="trans-color card-in el-col-radius" :style="editForm3" :span="24" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{timenow}}</p>
                      <div class="bg-white block-under-div-in" style="padding-bottom: 20px;">
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}" style="margin-bottom: 20px;">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">库存量:<el-input v-model="form.inventory" class="form-input"></el-input></p><br>
                              <p class="small-text">购入价格:<el-input v-model="form.purchasePrice" class="form-input"></el-input></p><br>
                              <p class="small-text">原料代码:<el-input v-model="form.materialCode" class="form-input"></el-input></p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">采购量:<el-input v-model="form.purchaseVolume" class="form-input"></el-input></p><br>
                              <p class="small-text">额外成本:<el-input v-model="form.additionalCost" class="form-input"></el-input></p><br>
                            </div></el-col>
                          </el-row>
                          <el-button type="primary" @click="confirmForm3">确认</el-button>
                          <el-button @click="cancelForm3">取消</el-button>
                      </div>
                    </el-card>
                  </el-col>

                  <!--销售表单-->
                  <el-col class="trans-color card-in el-col-radius" :style="editForm4" :span="24" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{timenow}}</p>
                      <div class="bg-white block-under-div-in" style="padding-bottom: 20px;">
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}" style="margin-bottom: 20px;">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">产品名称:<el-input v-model="form.productName" class="form-input"></el-input></p><br>
                              <p class="small-text">库存量:<el-input v-model="form.inventory" class="form-input"></el-input></p><br>
                              <p class="small-text">销售额:<el-input v-model="form.salesAmount" class="form-input"></el-input></p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">产品代码:<el-input v-model="form.productCode" class="form-input"></el-input></p><br>
                              <p class="small-text">销售量:<el-input v-model="form.salesVolume" class="form-input"></el-input></p><br>
                              <p class="small-text">毛利润:<el-input v-model="form.grossProfit" class="form-input"></el-input></p><br>
                            </div></el-col>
                          </el-row>
                          <el-button type="primary" @click="confirmForm4">确认</el-button>
                          <el-button @click="cancelForm4">取消</el-button>
                      </div>
                    </el-card>
                  </el-col>

                  <!--仓储表单-->
                  <el-col class="trans-color card-in el-col-radius" :style="editForm5" :span="24" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{timenow}}</p>
                      <div class="bg-white block-under-div-in" style="padding-bottom: 20px;">
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}" style="margin-bottom: 20px;">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">仓储状态:<el-input v-model="form.warehouseStatus" class="form-input"></el-input></p><br>
                              <p class="small-text">实际到库时间:<el-input v-model="form.actualStoreTime" class="form-input"></el-input></p><br>
                              <p class="small-text">实际生产时间:<el-input v-model="form.actualProductTime" class="form-input"></el-input></p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:20px;"><div class="grid-content trans-color">
                              <p class="small-text">预计到库时间:<el-input v-model="form.estimatedStoreTime" class="form-input"></el-input></p><br>
                              <p class="small-text">预计生产时间:<el-input v-model="form.estimatedProductTime" class="form-input"></el-input></p><br>
                            </div></el-col>
                          </el-row>
                          <el-button type="primary" @click="confirmForm5">确认</el-button>
                          <el-button @click="cancelForm5">取消</el-button>
                      </div>
                    </el-card>
                  </el-col>

                  <!--物流信息-->
                  <el-col class="trans-color card-in el-col-radius" :span="24" v-for="stream in streamlist1" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <p class="small-title">{{stream.logisticsTime}}</p>
                      <div class="bg-white block-under-div-in">
                          <!--<p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>-->
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">快递单号:{{stream.expressBillCode}}</p><br>
                              <p class="small-text">发件方:{{stream.senderName}}</p><br>
                              <p class="small-text">收件方:{{stream.receiverName}}</p><br>
                              <p class="small-text">件数:{{stream.goodsQuantity}}&nbsp&nbsp总质量:{{stream.goodsQuality}}</p><br>
                              <p class="small-text">运输公司:{{stream.transportCompanyName}}</p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">收件地址:{{stream.receiverAddress}}</p><br>
                              <p class="small-text">收件时间:{{stream.receiveTime}}</p><br>
                              <p class="small-text">收件员:{{stream.transportReceiverName}}</p><br>
                              <p class="small-text">派件员:{{stream.transportDelivererName}}&nbsp&nbsp快递状态:{{stream.goodsStatus}}</p><br>
                              <p class="small-text">补充信息:{{stream.remark}}</p><br>
                            </div></el-col>
                          </el-row>
                      </div>
                    </el-card>
                  </el-col>

                  <!--资金流信息-->
                  <el-col class="trans-color card-in el-col-radius" :span="24" v-for="stream in streamlist2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <!--<p class="small-title">{{stream.logisticsTime}}</p>-->
                      <div class="bg-white block-under-div-in">
                          <!--<p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>-->
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">资金时间:{{stream.date}}</p><br>
                              <p class="small-text">总进账:{{stream.totalIn}}</p><br>
                              <p class="small-text">账户余额:{{stream.balance}}</p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">流动金额:{{stream.amount}}</p><br>
                              <p class="small-text">总支出:{{stream.totalOut}}</p><br>
                              <p class="small-text">款项类型:{{stream.cashFlowType}}</p><br>
                            </div></el-col>
                          </el-row>
                      </div>
                    </el-card>
                  </el-col>


                  <!--采购信息-->
                  <el-col class="trans-color card-in el-col-radius" :span="24" v-for="stream in streamlist3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <!--<p class="small-title">{{stream.logisticsTime}}</p>-->
                      <div class="bg-white block-under-div-in">
                          <!--<p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>-->
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">库存量:{{stream.inventory}}</p><br>
                              <p class="small-text">购入价格:{{stream.purchasePrice}}</p><br>
                              <p class="small-text">原料代码:{{stream.materialCode}}</p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">采购量:{{stream.purchaseVolume}}</p><br>
                              <p class="small-text">额外成本:{{stream.additionalCost}}</p><br>
                            </div></el-col>
                          </el-row>
                      </div>
                    </el-card>
                  </el-col>

                  <!--销售信息-->
                  <el-col class="trans-color card-in el-col-radius" :span="24" v-for="stream in streamlist4" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <!--<p class="small-title">{{stream.logisticsTime}}</p>-->
                      <div class="bg-white block-under-div-in">
                          <!--<p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>-->
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">产品名称:{{stream.productName}}</p><br>
                              <p class="small-text">库存量:{{stream.inventory}}</p><br>
                              <p class="small-text">销售额:{{stream.salesAmount}}</p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">产品代码:{{stream.productCode}}</p><br>
                              <p class="small-text">销售量:{{stream.salesVolume}}</p><br>
                              <p class="small-text">毛利润:{{stream.grossProfit}}</p><br>
                            </div></el-col>
                          </el-row>
                      </div>
                    </el-card>
                  </el-col>

                  <!--仓储信息-->
                  <el-col class="trans-color card-in el-col-radius" :span="24" v-for="stream in streamlist5" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card class="trans-color" :body-style="{ padding: '0px'}">
                      <!--<p class="small-title">{{stream.logisticsTime}}</p>-->
                      <div class="bg-white block-under-div-in">
                          <!--<p class="small-title" style="padding-top:20px;padding-bottom:10px;">货物状态</p>-->
                          <el-row :gutter="1"  type="flex" justify="center" :style="{width: '100%'}">
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">仓储状态:{{stream.warehouseStatus}}</p><br>
                              <p class="small-text">实际到库时间:{{stream.actualStoreTime}}</p><br>
                              <p class="small-text">实际生产时间:{{stream.actualProductTime}}</p><br>
                            </div></el-col>
                            <el-col  class="el-col-radius" :span="12" style="margin-top:10px;"><div class="grid-content trans-color">
                              <p class="small-text">预计到库时间:{{stream.estimatedStoreTime}}</p><br>
                              <p class="small-text">预计生产时间:{{stream.estimatedProductTime}}</p><br>
                            </div></el-col>
                          </el-row>
                      </div>
                    </el-card>
                  </el-col>

                </el-row>
              </vue-scroll>

            </div></el-col>

            <el-col  class="el-col-radius" :span="2"><div class="grid-content trans-color back-block-in">
              <i class="el-icon-close icon-close" @click="dialogFormVisible = false"></i>
            </div></el-col>
          </el-row>

        </el-dialog>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import global from '../../common.vue'
export default {
  name: 'manage',
  data () {
    return {
      timenow: '',
      projectIDnow: '',
      projectNamenow: '',
      projectTypenow: '',
      editForm1: {
        display: "none",
      },
      editForm2: {
        display: "none",
      },
      editForm3: {
        display: "none",
      },
      editForm4: {
        display: "none",
      },
      editForm5: {
        display: "none",
      },
      form_display: true,
      form: {
        expressBillCode:'',
        senderName: '',
        receiverName: '',
        goodsQuantity: '',
        goodsQuality: '',
        transportCompanyName: '',
        receiverAddress: '',
        receiveTime: '',
        transportReceiverName: '',
        transportDelivererName: '',
        goodsStatus:'',
        remark: '',
        date: '',
        amount: '',
        totalIn: '',
        totalOut: '',
        balance: '',
        cashFlowType: '',
        materialCode: '',
        projectCode: '',
        inventory: '',
        purchaseVolume: '',
        purchasePrice: '',
        additionalCost: '',
        productName: '',
        productCode: '',
        projectCode: '',
        inventory: '',
        salesVolume: '',
        salesAmount: '',
        grossProfit: '',
        projectIDnow: '',
        warehouseStatus: '',
        estimatedStoreTime: '',
        actualStoreTime: '',
        estimatedProductTime: '',
        actualProductTime: '',
      },
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
      ],
      streamlist1:[],
      streamlist2:[],
      streamlist3:[],
      streamlist4:[],
      streamlist5:[],
      statulist:{},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      u_Count: "2345678901",
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
    var that = this;
    that.u_Count = global.currentid;
    let url = 'http://140.143.209.173:8000/api/allprojects/';
    //console.log(global);
    this.$axios.post(url, {
      u_Count:this.u_Count
    })
    .then(function (res) {
      console.log(res);
      if (that.errorCheck(res.data.errorCode.slice(), that)) {
        that.projectlist = res.data.all_projects;
        for (let pro in that.projectlist) {
          console.log(that.projectlist[pro]);
          if (that.projectlist[pro].p_Statu == "0") {
            that.statulist[that.projectlist[pro].p_Num] = '未完成';
          }
          else {
            that.statulist[that.projectlist[pro].p_Num] = '已完成';
          }
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    timeNow () {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + "年" + month + "月" + strDate + "日";
      this.timenow = currentdate;
    },
    clickDialog(type, num, name) {
      /*console.log(window.ActiveXObject);
      var cmd = new ActiveXObject("WScript.Shell");
      cmd.run("cmd.exe /k cd C:/");*/
      this.projectIDnow = num;
      this.projectTypenow = type;
      this.projectNamenow = name;
      if (type == "0") {
        var that = this;
        let url = 'http://localhost:8080/block/query/logistics/all';
        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.streamlist1 = res.data.data.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else
      if (type == "2") {
        var that = this;
        let url = 'http://localhost:8080/block/query/cashflow/all';
        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.streamlist2 = res.data.data.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else
      if (type == "3") {
        var that = this;
        let url = 'http://localhost:8080/block/query/purchase/all';
        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.streamlist3 = res.data.data.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else
      if (type == "4") {
        var that = this;
        let url = 'http://localhost:8080/block/query/sell/all';
        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.streamlist4 = res.data.data.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else
      if (type == "1") {
        var that = this;
        let url = 'http://localhost:8080/block/query/warehouse/all';
        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.streamlist5 = res.data.data.reverse();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    openForm() {
        this.timeNow();
        if (this.projectTypenow == '0') {
          if (this.editForm1.display == 'none') {
           this.editForm1.display = 'inline';
          }
          else {
            this.editForm1.display = 'none';
          }
        }
        if (this.projectTypenow == '2') {
          if (this.editForm2.display == 'none') {
           this.editForm2.display = 'inline';
          }
          else {
            this.editForm2.display = 'none';
          }
        }
        if (this.projectTypenow == '3') {
          if (this.editForm3.display == 'none') {
           this.editForm3.display = 'inline';
          }
          else {
            this.editForm3.display = 'none';
          }
        }
        if (this.projectTypenow == '4') {
          if (this.editForm4.display == 'none') {
           this.editForm4.display = 'inline';
          }
          else {
            this.editForm4.display = 'none';
          }
        }
        if (this.projectTypenow == '1') {
          if (this.editForm5.display == 'none') {
           this.editForm5.display = 'inline';
          }
          else {
            this.editForm5.display = 'none';
          }
        }
    },
    confirmForm1() {
        var that = this;
        let url = 'http://localhost:8080//block/create/logistics?expressBillCode='+this.form.expressBillCode+
        '&projectCode='+this.projectIDnow+
        '&logisticsName=物流消息的名称'+
        '&logisticsCategory=物流项目的分类'+
        '&logisticsTime='+ this.timenow +
        '&transportCompanyName='+ this.form.transportCompanyName +
        '&transportDelivererName='+ this.form.transportDelivererName +
        '&transportReceiverName='+ this.form.transportReceiverName +
        '&goodsStatus='+ this.form.goodsStatus +
        '&goodsQuantity='+ this.form.goodsQuantity+
        '&goodsQuality='+ this.form.goodsQuality +
        '&senderName='+ this.form.senderName +
        '&receiverName='+ this.form.receiverName +
        '&receiverAddress='+ this.form.receiverAddress+
        '&receiveTime='+ this.form.receiveTime +
        '&remark=' + this.form.remark;

        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.editForm1.display = 'none';
          that.clickDialog(that.projectTypenow, that.projectIDnow, that.projectNamenow);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
           showClose: true,
           message: '添加失败',
           type: 'error'
         });
       });
    },
    confirmForm2() {
        var that = this;
        let url = 'http://localhost:8080/block/create/cashflow?date='+ this.form.date +
        '&amount='+ this.form.amount +
        '&totalIn='+ this.form.totalIn +
        '&totalOut='+ this.form.totalOut +
        '&balance='+ this.form.balance +
        '&cashFlowType='+ this.form.cashFlowType +
        '&classType=分类';

        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.editForm2.display = 'none';
          that.clickDialog(that.projectTypenow, that.projectIDnow, that.projectNamenow);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
           showClose: true,
           message: '添加失败',
           type: 'error'
         });
       });
    },
    confirmForm3() {
        var that = this;
        let url = 'http://localhost:8080/block/create/purchase?materialCode='+ this.form.materialCode +
        '&projectCode='+ this.projectIDnow +
        '&inventory='+ this.form.inventory +
        '&purchaseVolume='+ this.form.purchaseVolume +
        '&purchasePrice='+ this.form.purchasePrice +
        '&additionalCost='+ this.form.additionalCost;

        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.editForm3.display = 'none';
          that.clickDialog(that.projectTypenow, that.projectIDnow, that.projectNamenow);

          that.sendnew(that);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
           showClose: true,
           message: '添加失败',
           type: 'error'
         });
       });
    },
    confirmForm4() {
        var that = this;
        let url = 'http://localhost:8080/block/create/sell?productName=' + this.form.productName +
        '&productCode=' + this.form.productCode +
        '&projectCode=' + this.projectIDnow +
        '&inventory=' + this.form.inventory +
        '&salesVolume=' + this.form.salesVolume +
        '&salesAmount=' + this.form.salesAmount +
        '&grossProfit=' + this.form.grossProfit;

        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.editForm4.display = 'none';
          that.clickDialog(that.projectTypenow, that.projectIDnow, that.projectNamenow);

          that.sendnew(that);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
           showClose: true,
           message: '添加失败',
           type: 'error'
         });
       });
    },
    confirmForm5() {
        var that = this;
        let url = 'http://localhost:8080/block/create/warehouse?projectCode=' + this.projectIDnow +
        '&warehouseStatus=' + this.form.warehouseStatus +
        '&estimatedStoreTime=' + this.form.estimatedStoreTime +
        '&actualStoreTime=' + this.form.actualStoreTime +
        '&estimatedProductTime=' + this.form.estimatedProductTime +
        '&actualProductTime=' + this.form.actualProductTime +

        this.$axios.get(url)
        .then(function (res) {
          console.log(res);
          that.$message({
            message: '添加成功',
            type: 'success'
          });
          that.editForm5.display = 'none';
          that.clickDialog(that.projectTypenow, that.projectIDnow, that.projectNamenow);
        })
        .catch(function (error) {
          console.log(error);
          that.$message({
           showClose: true,
           message: '添加失败',
           type: 'error'
         });
       });
    },
    sendnew(that) {
      let url = 'http://localhost:8080/block/query/purchase/all';
      that.$axios.get(url)
      .then(function (res) {
        console.log(res);
        that.streamlist3 = res.data.data.reverse();
      })
      .catch(function (error) {
        console.log(error);
      });

      let url2 = 'http://localhost:8080/block/query/sell/all';
      that.$axios.get(url2)
      .then(function (res) {
        console.log(res);
        that.streamlist4 = res.data.data.reverse();
      })
      .catch(function (error) {
        console.log(error);
      });

      let url3 = 'http://140.143.209.173:8000/api/update/';
      that.$axios.post(url3, {
        u_Count:that.u_Count,
        p_Num:that.projectIDnow,
        sale: {
          data:that.streamlist4
        },
        purchase: {
          data:that.streamlist3
        }
      })
      .then(function (res) {
        if (that.errorCheck(res.data.errorCode.slice(), that)) {
          console.log(res);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    cancelForm1() {
        this.$data.editForm1.display = 'none';
    },
    cancelForm2() {
        this.$data.editForm2.display = 'none';
    },
    cancelForm3() {
        this.$data.editForm3.display = 'none';
    },
    cancelForm4() {
        this.$data.editForm4.display = 'none';
    },
    cancelForm5() {
        this.$data.editForm5.display = 'none';
    },
    errorCheck(ans, that) {
      if (ans == "0021") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "权限码错误"
        });
      }
      else if (ans == "0001") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "账号已存在"
        });
      }
      else if (ans == "0002") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "账号或密码错误"
        });
      }
      else if (ans == "0003") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "账号或身份证号错误"
        });
      }
      else if (ans == "0004") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "公司账号错误"
        });
      }
      else if (ans == "0010") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "项目信息显示失败"
        });
      }
      else if (ans == "0020") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "用户信息获取失败"
        });
      }
      else if (ans == "0022") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "加入项目失败"
        });
      }
      else if (ans == "0023") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "修改个人信息失败"
        });
      }
      else if (ans == "0030") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "创建项目失败"
        });
      }
      else if (ans == "0031") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "银行授权码错误"
        });
      }
      else if (ans == "0032") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "用户不存在"
        });
      }
      else if (ans == "0040") {
        that.$message({
          type:"error",
          duration: 1500,
          message: "更新信息失败"
        });
      }
      else {
        return 1;
      }
      return 0;
    },
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
  }
  .form-input {
    width:50%;
  }
  .btn-edit {
    position: absolute;
    z-index: 100;
    right: 10%;
    bottom: 100px;
  }
  .grid-content {
    border-radius: 4px !important;
    min-height: 36px;
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
  .el-col-radius {
    border-radius: 1px !important;
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
