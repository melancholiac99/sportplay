<template>
    <div class="login_container">
      <div class="login_box">
        <div class="avatar_box">
          <!--头像-->
          <img src="../assets/logo.png" alt />
        </div>
        <!--添加表单-->
        <el-form  ref="loginFormRef"  :model="loginForm"  :rules="loginRules"  class="login_form"  label-width="0px">
        <!--用户名-->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username"   prefix-icon="iconfont icon-denglu"></el-input>
          </el-form-item>
        <!--密码-->          
          <el-form-item prop="password">
            <el-input v-model="loginForm.password"   prefix-icon="iconfont icon-mima" type="password"></el-input>
          </el-form-item>
        <!--功能按钮-->
          <el-form-item class="btns">
            <el-button type="primary"   @click="login">登录</el-button>
            <el-button type="info"   @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {//数据
      return {
        loginForm: {//表单数据对象
          username: "请输入用户名",
          password: "请输入密码"
        },
        loginRules: {//表单验证设定
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" },//失去焦点事件，必填
            { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" }//长度验证
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 8, message: "密码为 6~8 位", trigger: "blur" }
          ]
        }
      };
    },
    methods: {//方法
    resetLoginForm() {//重置函数
      this.$refs.loginFormRef.resetFields();
    },
    login() {//登录函数
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        // 调用get请求
        const { data: res } = await this.$http.post("login", this.loginForm);//访问后台
        if (res.flag == "ok") {
          window.sessionStorage.setItem("user",res.user);//存储user对象
          this.$message.success("登陆成功！！！");
          this.$router.push({ path: "/home" }); // 路由跳转
          console.log(res.user);
        } else {
          console.log(res.user);
          this.$message.error("登录失败！！！");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container{//背景设定
      background-color: #2b4b6b;
      height:100%;
    }

  .login_box {//输入部分设定
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;// 圆角
    position: absolute;// 绝对定位
    left: 50%;//左居中
    top: 50%;//上居中
    transform: translate(-50%, -50%);// 根据自己位置 以自己为长度位移
  
    .avatar_box {//图标设定
      width: 130px;
      height: 130px;
      border: 1px solid #eee; //边框
      border-radius: 50%; // 加圆角
      padding: 10px; //边距
      box-shadow: 0 0 10px #ddd;// 盒子阴影
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #0ee;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%; // 加圆角
        background-color: #eee;
      }
    }
    .btns {//按钮设定
      display: flex;// 弹性布局
      justify-content: flex-end; // 尾部对齐
    }
    .login_form {//表单设定
      position: absolute;
      bottom: 0%;
      width: 100%;
      padding: 0 10px;//左、上
      box-sizing: border-box;// 设置边框
    }
    
  }
  </style>