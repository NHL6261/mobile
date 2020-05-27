<template>
  <div id="proxy_container">
    <div class="proxy_banner">
      <div class="banner_title">
        <div class="title">
          <p>B2B代理</p>
          <p>加入代理助力门店智慧收银</p>
        </div>
      </div>
    </div>
    <!-- 中间四大问题板块 -->
    <div class="four_questions">
      <div class="questions_header">
        <p>致力解决以下4大问题</p>
      </div>
      <div class="questions_main">
        <div class="item_container">
          <div class="circle_container">
            <p>慢</p>
          </div>
          <span>收银效率低,结账慢</span>
        </div>
        <div class="item_container">
          <div class="circle_container">
            <p>耗</p>
          </div>
          <span>结算繁琐,耗费人力</span>
        </div>
        <div class="item_container">
          <div class="circle_container">
            <p>乱</p>
          </div>
          <span>数据凌乱,不便整理</span>
        </div>
        <div class="item_container">
          <div class="circle_container">
            <p>少</p>
          </div>
          <span>受地区限制,顾客范围小</span>
        </div>
      </div>
    </div>
    <!-- 服务支持 -->
    <div class="service_support">
      <div class="service_header">
        <p>服务支持</p>
      </div>
      <div class="service_advisory" :style="'margin-top: 45px'">
        <div class="service_left">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="service_right">
          <p>售前咨询</p>
          <p>专业客服随时为您答惑,全面了解</p>
        </div>
      </div>
      <div class="service_advisory">
        <div class="service_left">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="service_right">
          <p>售前咨询</p>
          <p>专业客服随时为您答惑,全面了解</p>
        </div>
      </div>
      <div class="service_advisory">
        <div class="service_left">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="service_right">
          <p>售前咨询</p>
          <p>专业客服随时为您答惑,全面了解</p>
        </div>
      </div>
      <div class="service_advisory">
        <div class="service_left">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="service_right">
          <p>售前咨询</p>
          <p>专业客服随时为您答惑,全面了解</p>
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div class="why_container">
      <div class="why_header">
        <p>为什么选择我们</p>
      </div>
      <div class="four_container">
        <div class="four_main"></div>
        <div class="four_main"></div>
        <div class="four_main"></div>
        <div class="four_main"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../common/stylus/mixins.styl';

#proxy_container {
  width: 100%;
  height: 100%;

  .proxy_banner {
    width: 100%;
    height: 420px;
    bg-image('../assets/banner');
    background-size: 100% 420px;

    .banner_title {
      width: 100%;
      height: 100%;
      padding-top: 154px;
      box-sizing: border-box;

      .title {
        margin: 0 auto;
        text-align: center;

        p:nth-child(1) {
          font-size: 56px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }

        p:nth-child(2) {
          font-size: 38px;
          font-family: Source Han Sans SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          margin-top: 30px;
        }
      }
    }
  }

  .four_questions {
    width: 100%;
    height: 855px;
    padding: 57px 125px 82px 123px;
    box-sizing: border-box;

    .questions_header {
      width: 100%;
      text-align: center;

      p {
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .questions_main {
      width: 100%;
      height: 598px;
      margin-top: 82px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;

      .item_container {
        text-align: center;

        .circle_container {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border 1px dashed #FFAD60
          p {
            font-size: 72px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: rgba(255, 173, 96, 1);
          }
        }

        span {
          width: 220px;
          height: 20px;
          display: block;
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(96, 96, 96, 1);
          margin-top: 35px;
        }
      }
    }
  }

  .service_support {
    width: 100%;
    height: 1220px;
    background-color: #FFF7EF;
    padding: 78px 80px 80px 80px;
    box-sizing: border-box;

    .service_header {
      width: 100%;
      text-align: center;

      p {
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }

    .service_advisory {
      width: 590px;
      height: 207px;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 20px 0px rgba(255, 173, 96, 0.2);
      margin-top: 41px;
      padding: 0 60px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .service_left {
        width: 92px;
        height: 92px;
        background-color: #ffad60;
        border-radius: 15px;
      }

      .service_right {
        
      }

      p:nth-child(1) {
        font-size: 32px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
      }

      p:nth-child(2) {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(96, 96, 96, 1);
        margin-top: 17px;
      }
    }
  }
  .why_container{
    width 100%  
    height 635px 
    background-color blue
    padding 78px 80px 81px 82px
    box-sizing border-box
    .why_header{
      width 100%
      >p{
        text-align center
        font-size:36px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(35,35,35,1);
      }  
    }
    .four_container{
      width 588px
      height 400px  
      background-color red
      margin-top 60px
      display flex
      justify-content space-between
      flex-direction row
      flex-wrap wrap
      .four_main{
        width 274px  
        height 171px
        background-color #FFAD60
      }
    }
  }
}
</style>
