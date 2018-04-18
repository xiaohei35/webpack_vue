<template>
    <div class="adplan">
       <h1>建立广告计划</h1>
            <el-row :span="12"  class='card'>
                <el-col :span="6">
                    <el-card shadow="always">
                    <em class='el-icon-circle-plus-outline' v-on:click='test'></em>
                    <p>
                        <span>已有广告</span>
                        <span>选择已有计划,直接创建广告</span>
                    </p>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="always">
                    <em class='el-icon-circle-plus-outline' v-on:click='test1'></em>
                    <p>
                        <span>新建广告</span>
                        <span>新建推广目标,计划设置</span>
                    </p>
                    </el-card>
                </el-col>
        </el-row>
        <div class="main1" ref='main1'>
            <p>推广目标:  网页</p>
            <p>计划名称:  DD-广告测试团队-20171102-04</p>
            <p>每日限额:  500/天</p>
            <br><hr>
            <button>下一步</button>
        </div> 
        <div class="main2" ref='main2'>
            <p>计划名称 : 
                <input type="text" placeholder='请设置广告名称'>
            </p>
            <p>每日限额 : 
                <input type="text" placeholder='请设置广告名称'>
            </p>
            <br><hr>
            <button>下一步</button>
            <button>保&nbsp;&nbsp;&nbsp;存</button>
        </div>
    </div>
</template>

<script>
 export default {
     name:'adplan',
     data(){
         return {
             
         }
     },
     methods:{
        test(){
            this.$refs.main2.style.display='none'
            this.$refs.main1.style.display='block'
        },
        test1(){
            this.$refs.main1.style.display='none'
            this.$refs.main2.style.display='block'
        }
     }
 }
</script>

<style lang='less' scoped>
*{
    margin:0;
    padding:0;
}
.adplan{
  
    h1{
        font-size:25px;
        font-weight:normal;
        margin-bottom:20px;
    }
    .el-col{
        width:300px;
        height:150px;
        padding:0;
        margin-right:20px;
        .el-card is-always-shadow{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }  
        .el-card__body{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
        }
        .el-col-6{
            width:100%;
            padding:0;
        }
        em{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:30px;
            float:left;
            color:#2873ff;
            margin-right:15px;
            position:relative;
            top:15px;
        }
        p{
            display:flex;
            flex-direction:column;
            span:first-child{
                font-size:22px;
                margin-bottom:10px;
            }
        }
    }
}
.main1{
    display:none;
    position:absolute;
    top:25%;
    left:20px;
    padding:30px 0 0 0;
    p{
        margin:10px;
        color:#666;
    }
    button{
        background:#2873ff;
        color:#fff;
        text-align:center;
        padding:10px 40px;
        border:none;
        margin:20px 0 0 20px;
    }
}
.main2{
    display:none;
    position:absolute;
    top:25%;
    left:20px;
    padding:30px 0 0 0;
    p{
        margin:10px 0;
        input{
            width:300px;
            height:35px;
            margin-left:20px;
        }
    }
    button{
        background:#fff;
        color:#666;
        text-align:center;
        padding:10px 40px;
        border:none;
        margin:20px 0 0 20px;
        border:1px solid #ccc;
    }
}
</style>