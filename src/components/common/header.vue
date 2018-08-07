<template>
    <div>
        <header>
            <div class="logo">
                <img src="../../assets/images/EMMA_logo.png" alt="">
                <span class="company">EMMA </span>
                <span class="hospital"> XXXXXX社区医院</span>
            </div>
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#409eff" text-color="#fff" active-text-color="#e6a23c">
                    <el-menu-item index="1">潜在病患</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">患者管理</template>
                        <el-menu-item index="2-1">预约患者</el-menu-item>
                        <el-menu-item index="2-2">患者信息</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">医生管理</el-menu-item>
                    <el-menu-item index="6" class="message">
                        <el-badge :is-dot="isDot" class="item">
                            <i class="icon el-icon-bell"></i>
                        </el-badge>
                    </el-menu-item>
                    <el-submenu index="3" class="person">
                        <template slot="title">
                            <img src="../../assets/images/face.png" alt="">
                        </template>
                        <el-menu-item index="3-1">个人信息</el-menu-item>
                        <el-menu-item index="3-2">排班设置</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </header>
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      isDot: true
    };
  }
};
</script>
<style lang="less" scoped>
@blue: #409eff;
header {
  width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  padding: 0 70px;
  background-color: @blue;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  .logo {
    color: #fff;
    height: 60px;
    img {
      width: 50px;
      height: 43px;
      margin-top: 8px;
      margin-right: 20px;
    }
    .company {
      vertical-align: 20%;
      font-size: 24px;
      font-weight: 400;
    }
    .hospital {
      vertical-align: 35%;
    }
  }
  .nav {
    .el-menu-demo {
      width: 460px;
      margin: 0 auto;
    }
    .el-menu--horizontal {
      border-bottom: 0;
    }
    .message {
      line-height: 20px;
      padding-top: 18px;
    }
    .person {
      img {
        width: 30px;
        border-radius: 15px;
      }
    }
  }
}
</style>
