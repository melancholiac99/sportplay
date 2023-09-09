<template>
    <div class="health-home">
      <!-- 头部区域 -->
      <header class="health-header">
        <div class="logo">
          <img src="@/assets/logo1.png" alt="运动健康平台" class="img_logo"/>
          <h1>  运动健康平台</h1>
          
        </div>
        <img src="@/assets/3img.jpg" class="img_sport">
        <nav>
          <ul>
            
          </ul>
        </nav>
      </header>
  
      <!-- 主要内容区域 -->
      <main class="health-main">
        <section class="hero">
          <h2>欢迎来到运动健康平台</h2>
          <p>记录、追踪、管理您的健康和运动数据</p>
          <router-link to="/result" class="cta-button">意见反馈</router-link>
        </section>
  
        <section class="features">
          <div class="feature">
            <h3>记录运动活动</h3>
            <p>轻松记录您的运动活动，包括步数、卡路里和运动时间。</p>
          </div>
          <div class="feature">
            <h3>可视化统计</h3>
            <p>查看详细的统计数据和图表，了解您的健康状况。</p>
          </div>
          <div class="feature">
            <h3>设定目标</h3>
            <p>设定健康和运动目标，追求更健康的生活方式。</p>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "HealthHomePage",
  };
  </script>
  
  <style scoped>
  .health-home {
    font-family: Arial, sans-serif;
  }
  .img_logo{
    margin-left:30px;
  }
  .img_sport{
    width:700px;
    height: 200px;
  }
  .health-header {
    background-color: #2b4b6b;
    color: white;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .health-header .logo img {
    max-width: 100px;
    max-height: 100px;
  }
  
  .health-header h1 {
    font-size: 24px;
    margin-left: 10px;
  }
  
  .health-header nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .health-header nav ul li {
    font-size: 18px;
  }
  
  .health-main {
    padding: 20px;
    text-align: center;
  }
  
  .hero h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .cta-button {
    display: inline-block;
    background-color:  #2b4b6b;
    color: white;
    padding: 10px 30px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
  }
  
  .features {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-top: 40px;
  }
  
  .feature {
    flex: 1;
    padding: 40px;
    background-color: #f5f5f5;
    border-radius: 5px;
    text-align: center;
  }
  
  .feature h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .feature p {
    font-size: 16px;
  }
  </style>
  