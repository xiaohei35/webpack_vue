<template>
    <div id='login'>
       <el-row type='flex' justify='center'>
         <el-col :span="8">
            <el-form :model='formData' ref='loginBox'>
               <el-form-item label='用户名' prop='username' :rules='userRules'>
                 <el-input type='text' v-model='formData.username'></el-input>
               </el-form-item>

               <el-form-item label='密码' prop='password' :rules='psdRules'>
                 <el-input type='password' v-model='formData.password'></el-input>
               </el-form-item>

               <el-form-item>
                 <el-button type='primary' @click="login">登录</el-button>
               </el-form-item>
            </el-form>   
         </el-col>
       </el-row>
    </div>
</template>

<script>
import {login} from '../utils/request.js'
 export default {
    name:'login',
    data(){
        return {
            formData:{
                username:'',
                password:''
            },
            userRules:[
                {
                    required:true,
                    message:'请输入用户名'
                },{
                    type:'email',
                    message:'邮箱输入格式不正确'
                }
            ],
            psdRules:[
                {
                    required:true,
                    message:'请输入密码'
                }
            ]       
        }
    },
    methods:{
        login(){
            //对整个表单进行校验的方法，参数为一个回调函数。
            //该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。
            //若不传入回调函数，则会返回一个 promise
            this.$refs.loginBox.validate((isValid,options)=>{
               if(isValid){//如果校验成功
                  this.$store.dispatch('getToken',{
                      data:this.formData,
                      notify:this.$notify,
                      router:this.$router
                  })
                //  login(this.username,this.password,'123123').then(res=>{
                //    console.log(res)
                //  })      
               }else{
                  this.$notify({
                    title: '错误',
                    message: '用户名或密码输入错误',
                    type: 'warning'
                  });
               }
            })
            
        }
    }
 }
</script>

<style lang='less' scoped>
#login{
    width: 100%;
    height:100%;
    background:#fff;
    padding-top:60px;
    .el-input{
        margin-bottom:10px;
    }
}
</style>