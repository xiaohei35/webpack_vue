<template>
    <div id="newAdvert">
    <el-aside width="11%" height="100%">
        <el-menu :default-openeds="['1', '3']"
          style="background-color: #eee"
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#eee"
          text-color="#666"
          active-text-color="#2873ff">
          <br>

          <el-submenu index="/newAdvert/adplan">
            <template slot="title">
              <span>建立广告计划</span>
            </template>
            <el-menu-item index="/newAdvert/newAccount">选择计划</el-menu-item>
          </el-submenu>

          <el-submenu index="1">
              <template slot="title">
                <span>广告单元</span>
              </template>
              <el-menu-item index="">基本信息</el-menu-item>
              <el-menu-item index="">定向</el-menu-item>
              <el-menu-item index="">广告位</el-menu-item>
              <el-menu-item index="">出价</el-menu-item>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title">
              <span>广告创意</span>
            </template>
              <el-menu-item index="">落地页</el-menu-item>
              <el-menu-item index="">上传创意</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>

        <div class="right">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
 export default {
     name:'newAdvert',
     data(){
         return {
             
        }
    },
    methods: {
      watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
    
 }
</script>

<style lang='less' scoped>
*{
    margin:0;
    padding:0;
}
#newAdvert{
    width:100%;
    height:100%;
    display:flex;
    .el-tree{
        width:12%;
        height:100%;
        padding:50px 20px;
        background:transparent;
        .el-tree-node is-expanded is-focusable{
           
        }
    }
    .right{
        position:relative;
        width:88%;
        height:100%;
        padding:30px 0 0 20px;
        background:#fff;
        
    }
}
</style>