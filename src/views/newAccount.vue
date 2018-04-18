<template>
    <div class="newAccount">
        <h1>广告创意</h1>
        <h2>落地页</h2>
        <p>着陆页地址 : 
            <input type="text" placeholder='请设置广告名称'>
            <span>预览</span>
        </p>
        <h3>上传创意</h3>
        <template>
            <el-button type="text" @click="open">+添加创意</el-button>
        </template>
        <br><br>
        <hr>
        <button>提交</button>
    </div>
</template>

<script>
 export default {
    name:'newAccount',
    data(){
        return {
             dialogVisible: false
         }
    },
    methods:{
        open() {
            this.$commit(<alert-single/>, 'HTML 片段', {
            dangerouslyUseHTMLString: true
            });
      }
    },
    components:{
        AlertSingle(){

        }
    }
 }
</script>

<style lang='less' scoped>
*{
    margin:0;
    padding:0;
}
.newAccount{
    h1{
        font-size:30px;
        font-weight:normal;
        margin-bottom:40px;
    }
    h2{
        font-size:20px;
        margin-bottom:20px;
    }
    p{
        margin:10px 0;
        input{
            width:300px;
            height:30px;
            margin-left:20px;
        }
        span{
            color:#ccc;
            font-size:15px;
        }
    }
    h3{
        font-size:20px;
        margin:40px 0 20px 0;
    }
    .btn{
        margin:0!important;
        padding:0;
    }
    .el-button{
        color:#2873ff;
        font-size:16px;
        background:#fff;
        border:none;
    }
    button{
        background:#eee;
        color:#666;
        text-align:center;
        padding:10px 40px;
        border:none;
        color:#666;
        margin:20px 0 0 20px;
        border:1px solid #ccc;
    }
    .alert{
        
        width:100px;
        text-align:center;
        height:100px;
        .mutilple,.single{
            display:inline-block;
            width:100px;
            height:100px;
            border:1px solid #ccc;
        }
        .single{
            display:inline-block;
            
        }
    }
}
</style>