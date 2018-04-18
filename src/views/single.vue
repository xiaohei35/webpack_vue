<template>
    <div class="newAccount">
        <h1>广告创意</h1>
        <h2>落地页</h2>
        <p>着陆页地址 : 
            <input type="text" placeholder='请设置广告名称'>
            <span>预览</span>
        </p>
        <h3>上传创意</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="创意1" name="first"></el-tab-pane>
            <el-tab-pane label="创意2" name="second"></el-tab-pane>
            <el-button class='btn' type="text">+添加创意</el-button>
        </el-tabs>
        <div class="image">
            <el-upload
                class="avatar-uploader"
                action="http://localhost:9000/dsp-creative/creative/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" name='filedname'>
                <span v-else class="avatar-uploader-icon">点击上传</span>
            </el-upload>
        </div>
        <p>广告文案 : 
            <input type="text" placeholder='请设置广告名称'>&nbsp;&nbsp;<span>0/18</span>
        </p>
        <p>监控链接 : 
            <input type="text" placeholder='请设置广告名称'>
        </p>
        <br>
        <hr>
        <button>提交</button>
    </div>
</template>

<script>
 export default {
    name:'newAccount',
    data(){
        return {
             activeName: 'second',
             imageUrl: ''
         }
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = 'http://localhost:9000/'+res.data.value
        //this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = 1;
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
        margin-bottom:10px;
    }
    p{
        margin:20px 0;
        input{
            width:300px;
            height:27px;
            margin-left:20px;
        }
        span{
            color:#ccc;
            font-size:15px;
        }
    }
    h3{
        font-size:20px;
        margin:3/0px 0 20px 0;
    }
    
    .el-button{
        color:#2873ff;
        font-size:16px;
        background:#fff;
        border:none;
        margin:0;
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
    .avatar-uploader{
        border:1px solid #ccc;
        width:150px;
        height:150px;
        text-align:center;
    }    
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 16px;
    color: #2873ff;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .opera{
      color:#666;
      font-size:18px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }

}
</style>