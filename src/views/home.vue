<template>
    <div id="home">
        <el-row class='title'>
            <el-col :span="10">
                <div class="grid-content bg-purple"><h3>整体状况</h3></div>
            </el-col>
            <el-col :span=13 style='text-align:right;'>
                <div>
                    <!-- <span>近7天</span>
                    <span>近30天</span> -->
                    <el-date-picker
                        v-model="start"
                        format='yyyy/MM'
                        type="month">
                    </el-date-picker>

                    <el-date-picker
                        v-model="end"
                        disabledDate=""
                        format='yyyy/MM'
                        type="month">
                    </el-date-picker>               
                </div> 
            </el-col>
        </el-row>

        <el-row :span="12"  class='card'>
            <el-col :span="6">
                <el-card shadow="always" v-on:click.native='test'>
                <span>现金账户</span><br><br>
                <span>￥123,456,78</span>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always">
                <span>今日消费</span><br><br>
                <span>￥5,400</span>
                </el-card>
            </el-col>
        </el-row>
        <div class="select"> 
            <el-select v-model="value" placeholder="请选择" style="margin-left:30px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value" placeholder="请选择" style="margin-left:30px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-row>
            <div ref='cancvs' style="width: 90%;height:400px;"></div>
        </el-row>
    </div>
</template>

<script>
import Echarts,{init} from 'echarts'
import axios from 'axios'
 export default {
    name:'home',
    data(){
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
            value: '',
            option : {
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'line'
                }]
            },
            myEchart:null,
            start:'',
            end:''
        }
    },
    methods:{
       getAxiosDate(start,end){
           let arr=[]
           let startNum=start.getFullYear()*12+start.getMonth()*1+1;//把年、月拼接成数组 *1转成数值
           let endNum=end.getFullYear()*12+end.getMonth()*1+1;//2018/4

           //用月的单位计算出起始日期差值 遍历每个差值
           for(var i=startNum+1;i<endNum+1;i++){
               //如果是12月 转化为年 其他拼接
               arr.push(`${Math.floor(i/12)}/${i%12==0?12:i%12}`)
           }

           axios.post('/getAxisData',{len:arr.length}).then(response=>{
               this.myEchart.setOption({
                   xAxis: {//日期
                        type: 'category',
                        data: arr
                    },
                    series: [{
                        data: response.data,
                        type: 'line'
                    }]
               })
           })
       }
    },
    //监听事件
    watch:{
        start:function(){
            this.getAxiosDate(this.start,this.end)
        },
        end:function(){
            this.getAxiosDate(this.start,this.end)
        }
    },
    created(){
        //在渲染页面之前获取最新的日期 并传参
        this.start=new Date();
        this.end=new Date();
        this.start.setMonth(this.start.getMonth()-6);//开始日期为6个月前)
        this.getAxiosDate(this.start,this.end)
    },
    mounted(){
       this.myEchart=Echarts.init(this.$refs.cancvs) 
       this.myEchart.setOption(this.option)
    }
 }
</script>

<style lang='less' scoped>
#home{
    width:80%;
    height:85%;
    background:#fff;    
    margin:20px 0 0 30px;
    position:absolute;
}
.title{
    border-bottom:1px solid #ccc;
    height:60px;
    line-height:60px;
    h3{
        font-weight:normal;
        font-size:25px;
        padding-left:20px;
        margin:0 auto;
    }
}
.card{
    margin:20px 10px;
    .el-col{
        margin:0 20px;
        .el-card{
            width:300px;
            height:100px;
        }
    }
}
.select{
    width:90%;
    display:flex;
    justify-content:space-between;
    margin-top:20px;
}
</style>