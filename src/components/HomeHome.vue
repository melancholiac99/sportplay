<template>
  <el-container class="home-container"><!--引入container布局-->
    <el-header>
      <div>
        <img src="../assets/health.png" alt class="img" />
        <span>个人运动管理平台</span>
      </div>
      <el-button type="info" @click="logout">安全退出</el-button>
    </el-header>
    <!--主体-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapase">|||</div>
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff" unique-opened
          :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="activePath">
          <!--一级菜单-->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObject[item.id]"></i>
              <span>{{ item.title }}</span>
            </template> 
            <!--二级菜单-->
            <el-menu-item :index="it.path + ''" v-for="it in item.sList" :key="it.id" @clock="saveNavState(it.path + '')">
              <template slot="title">
                <i :class="iconsObject[it.id]"></i>
                <span>{{ it.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--主体内容-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      //菜单列表
      menuList: [],
      isCollapse: false,//伸缩
      iconsObject: {
        '101': "iconfont icon-guanliyuan",
        '102': "iconfont icon-yonghu",
        '103': 'iconfont icon-quanxian',
        '104': 'iconfont icon-yundong-',
        '105': 'iconfont icon-31quanbushangpin',
        '201': 'iconfont icon-yundong-',
        '202': "iconfont icon-shu",
        '203': 'iconfont icon-qialuli',
        '204': 'iconfont icon-shiwu',
        '205': 'iconfont icon-denglu',
      },
      activePath:'/welcome',//默认路径
    }
  },
  created() {//onload事件
    //查询menuList
    setTimeout(() => {
      this.getMenuList();
    }, 1000);
    this.activePath=window.sessionStorage.getItem('activePath');//取出session里的path 动态修改activePath
  },
  
  methods: {
    logout() {//安全退出
      window.sessionStorage.clear();//清除session
      this.$router.push("/login");//回到首页
    },
  // 获取所有的导航菜单
  async getMenuList() {
  const { data: res } = await this.$http.get("menus");
  var parsedres = res.data; // 不需要使用JSON.parse

  console.log(JSON.parse(JSON.stringify(parsedres))); // 打印真实数据部分

  if (res.status != 200) return this.$message.error("获取列表失败！");
  this.menuList = parsedres;
  console.log(JSON.parse(JSON.stringify(this.menuList)));
},

  //控制伸缩
  toggleCollapase() {
    this.isCollapse = !this.isCollapse;
  },
  //保存路径
  saveNavState(activePath){
    window.sessionStorage.setItem('activePath',activePath);//存放在session里
    this.activePath = activePath;
  }
},
}
</script>
<style lang="less" scoped>
.home-container {
  //布局样式
  height: 100%;
}

.el-header {
  //头部样式
  background-color: #373d41;
  display: flex;
  justify-content: space-between; // 左右贴边
  padding-left: 0%; // 左边界
  align-items: center; // 水平
  color: #fff;
  font-size: 20px;

  >div {
    //左侧div加布局
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  //侧边栏样式
  background-color: #333744;
}

.el-main {
  //主体部分样式
  background-color: #eaedf1;
}

.img {
  width: 55px;
  height: 55px;
}

.toggle-button {
  //按钮样式
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer; //显示小手
}</style>