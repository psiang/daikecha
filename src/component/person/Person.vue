<template>
  <div id="person">
  <form @submit.prevent="submit">
    <br>
    <h5>个人认证</h5>
       <br>
       <h3>实名认证</h3>
         <p style = "text-align:center">为了最受国家网络相关规定，并更好的为您提供服务，请如实填写</p>
    <br>
   <ul>
    <div class="">
      	<input type="text" style="width:900px;height:150px;" class="" placeholder="输入您的真实姓名" v-model="uidname" />
    </div>

    <div class="col-md-12">
    	<input type="text" style="width:900px;height:150px;"class="" placeholder="输入您的身份证号码" v-model="uidnum" />
    </div>
   </ul>
    <h3>个人信息</h3>
 <ul>
    <div class="col-md-12">
       <input type="text" style="width:900px;height:150px;"class="" placeholder="输入您的邮箱" v-model="umail" />
     </div>

    <div class="col-md-12">
    	<input type="text" style="width:900px;height:150px;"class="" placeholder="设置您的昵称（不超过16个字）" v-model="unickname" />
    </div>

    <div class="col-md-12">
       <input type="text" style="width:900px;height:150px;"class="" placeholder="请输入您的公司全称" v-model="cname" />
     </div>

     <p>以上信息仅用于优化服务，我们将为您严格保密</p>
 </ul>
     <input type="submit" style="width:900px;height:150px;" value="完成">
    <router-link id="FirstPart" to="/imgUpload">imgUpload</router-link>
  </form>
  </div>

</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      user:{
      uidname: '',
      uidnum: '',
      umail: '',
      unickname: '',
      cname: ''
    }
    }
  },
  methods: {
          submit(){

              /*var formData = JSON.stringify(this.student); // this指向这个VUE实例 data默认绑定在实例下的。所以直接this.student就是要提交的数据
              this.$http.post(url,formData).then(function(data){
                  if(data.json().state=="success")
                          console.log("success");
                  }
              }).catch(function(){
                console.log("服务器异常！");
              });*/

          }

    }

}
</script>
