<template>
<div id="design">
    <div class="head">
       <h1>账号管理</h1>
       <el-form style="width:100%;">
          <el-form-item>
            <el-button class='addUser' type='primary' @click='newAccount'>新建账号</el-button>
          </el-form-item>
       </el-form>
    </div>
    <div style="padding: 10px 0;width:100%;">
        <el-input placeholder="请输入关键字查询" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="账号名称" style='width:100px;'>
            <el-option label="小黑" value="1"></el-option>
            <el-option label="二黑" value="2"></el-option>
            <el-option label="黑子" value="3"></el-option>
            </el-select>
            <el-button slot="append" style='padding:8px 30px;background:#666;color:#fff; '>查询</el-button>
        </el-input>
    </div>
    <div class="main">
        <div class="select"> 
            <el-select v-model="value" placeholder="批量修改" style="padding-left:30px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value" placeholder="自定义列" style="padding-left:30px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
     <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%;"
        @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="province"
            label="创建人"
            width="120">
        </el-table-column>
        <el-table-column
            label="创建时间"
            width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        </template>
    </el-table-column>
    </el-table>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
 
</template>

<script>
 export default {
    name:'design',
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
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
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        currentPage4: 4
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      newAccount(){
          this.$router.push({
              name:'newAccount'
          })
      }
    }
 }
</script>

<style lang='less' scoped>
*{
    margin:0;
    padding:0;
}
#design{
    width:100%;
    height:100%;
    .head{
        width:100%;
        padding:5px 0;
        background:#fff;
        h1{
            font-size:25px;
            font-weight:normal;
            margin:20px ;
        }
        .addUser{
            padding:10px 20px;
            font-size:16px;
            margin-left:20px ;
        }
    }
    .el-input-group__prepend{
        background: #fff;
    }
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
    .input-with-select{
        width:500px;
        margin-left:20px;
    }
    .main{
        background:#fff;
        padding:20px 0;
        width:100%;
        .select{
            width:90%;
            display:flex;
            justify-content:space-between;
        }
        .el-table__body{
            width:90%;
        }
    }
    .block{
        width:100%;
        background:#fff;
        height:50px;
        line-height:50px;
        .el-pagination{
            float:right;
            margin:10px 50px 0 0;
        }
    }
}

</style>