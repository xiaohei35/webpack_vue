<template>
  <div id='app'>
    <el-container style="width:100%;height: 100%; border: 1px solid #eee">
      <el-aside width="15%" height="100%">
        <h5>智能投放系统</h5>
        <el-menu :default-openeds="['1', '3']"
          style="background-color: #022050"
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#022050"
          text-color="#fff"
          active-text-color="#ffd04b">
          <br>
          <el-menu-item index="/newAdvert">
              <span style='font-size:20px; margin-left:30px;'>新建广告</span>
          </el-menu-item>

          <el-menu-item index="/home">
              <i class="el-icon-message"></i>
              <span>首页概览</span>
          </el-menu-item>

          <el-submenu index="/advert">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>广告管理</span>
              </template>
              <el-menu-item index="/advert/design">广告设计</el-menu-item>
              <el-menu-item index="/advert/unit">广告单元</el-menu-item>
              <el-menu-item index="/advert/idea">广告创意</el-menu-item>
          </el-submenu>

          <el-menu-item index="/data">
             <i class="el-icon-message"></i>
              <span>数据中心</span>
          </el-menu-item>

          <el-menu-item index="/setting">
             <i class="el-icon-message"></i>
              <span>工具箱</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-container style="width:85%;height: 100%;">
        <el-header style="text-align: right;">
          <el-dropdown>
            <i class="el-icon-info" style="margin-right: 15px"></i>
            <i class="el-icon-warning" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
          <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
        </el-header>
        
        <el-main>
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(['username']) 
  }
}
</script>

<style lang='less' scoped>
*{
  margin:0;
  padding:0;
}
body,html{
  width:100%;
  height:100%;
  background:#eee;
}
#app{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  bottom:0;
  background:#eee;
}
h5{
  font-size:25px;
  color:#fff;
  margin:30px 0 0 20px;
  font-weight:normal;
}
.el-aside{
    background:#022050;
    .el-menu{
      background:#022050;
    }
    .el-submenu__title {
      background:#022050;
      color:#fff;
      i{
        color:#fff;
      }
      span{
        color:#fff;
      }
    }
}
.el-header{
  width:100%;
  background:#fff;
  border-bottom:1px solid #ccc;
  line-height:60px;
  font-size:20px;
  i{
    font-size:20px;
  }
}
.el-main{
  width:100%;
  height:100%;
}
</style>
