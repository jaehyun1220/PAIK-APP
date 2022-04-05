<template>
  <div class="header">
    <div class="header_wrap">
      <box-icon name='menu-alt-left' color="#071F60" v-on:click="open"></box-icon>
        <a href="/">
          <img src="../assets/image/logo.png" alt="logo">
        </a>
      <box-icon name='bell' type='solid' color="#071F60"></box-icon>
    </div>
    <div class="menu">
      <transition name="fade">
        <div class="menu_bg" v-if="on" v-on:click="close"></div>
      </transition>
      <transition name="slide-fade">
        <div class="menu_wrap" v-if="on">
          <div class="menu_header">
            <box-icon name='chevron-left' color="#fff" v-on:click="close"></box-icon>
            <h2>마이페이지</h2>
          </div>
          <div class="menu_user">
            <img src="../assets/image/my_logo.png" alt="logo">
            <p>안녕하세요! <br><span>관리자</span> 님</p>
          </div>
          <div class="menu_coupon">
            <ul>
              <li>
                <router-link to="./section">
                  <img src="../assets/image/menu_01.png" alt="stamp">
                  <div class="coupon_txt">
                    <p>스탬프</p>
                    <p><span> {{ point.stamp }}</span>/10개</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="./section">
                  <img src="../assets/image/menu_02.png" alt="coupon">
                  <div class="coupon_txt">
                    <p>마이쿠폰</p>
                    <p><span> {{ point.coupon }}</span>개</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="menu_list">
            <ul>
              <li>
                <router-link to="./section">
                  <span>스마트오더 주문내역</span>
                  <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                </router-link>
              </li>
              <li>
                <router-link to="./section">
                  <span>주변매장 찾기</span>
                  <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                </router-link>
              </li>
              <li>
                <router-link to="./section">
                  <span>기프트샵</span>
                  <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                </router-link>
              </li>
              <li>
                <router-link to="./section">
                  <span>개인정보 변경</span>
                  <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                </router-link>
              </li>
            </ul>
            <button type="button" class="btn paik_01" v-on:click="logOut">로그아웃</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      point : { stamp : 0, coupon : 0,},
      on : false,
    }
  },
  methods : {
    logOut() {
      localStorage.clear();
      if(localStorage.length == 0) {
        window.location.reload();
      }
    },
    open() {
      this.on = !this.on
    },
    close() {
      this.on = !this.on
    }
  }
}
</script>

<style scoped>
  .header {position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 10; max-width: 500px; width: 100%;}
    .header_wrap {display: flex; justify-content: space-between; align-items: center; padding:12px; min-height: 40px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .075); border-radius: 0px 0px 15px 15px; background-color: #fff;}
    .header_wrap > box-icon {font-size: 1.6em;}
    .header_wrap > a > img {transform: scale(.75);}

  /* .menu  */
    .menu_bg {position: fixed; width: 100%; top: 0; left: 0; height: 100vh; background-color: rgba(0, 0, 0, .25); z-index: 9;}
    .menu_wrap {position: fixed; top: 0; left: 0; height: 100vh; width: 90%; background-color: #fff; z-index: 10; overflow-y: auto;}
      .menu_header {text-align: center; position: relative; padding:12px; background-color: #003DA7; min-height: 40px; display: flex; justify-content: center; align-items: center;}
      .menu_header > box-icon {position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #fff;}
      .menu_header > h2 {color: #fff; font-family: 'Jua', sans-serif; font-size: 1.5rem;}

      .menu_user {text-align: center; padding: 10px 0;}
      .menu_user > img {transform: scale(.7);}
      .menu_user > p {color: #003da7; line-height: 1.2; padding-bottom: 25px;}
      .menu_user > p > span {font-weight: bold;}

      .menu_coupon {border-top: 5px solid #E8E8E8; border-bottom: 5px solid #E8E8E8;}
      .menu_coupon > ul {display: flex; justify-content: center; align-items: center;}
      .menu_coupon > ul > li {flex: 1 1 40%;}
      .menu_coupon > ul > li > a {display: flex; justify-content: center; align-items: center;}
      .menu_coupon > ul > li > a > img {transform: scale(.6);}
      .menu_coupon > ul > li:first-child > a {border-right: 1px solid #e8e8e8;}
        .coupon_txt > p {line-height: 1.2;}
        .coupon_txt > p:last-child {color: #ff3848;}
        .coupon_txt > p, .coupon_txt > p > span {font-size: .8rem;}
        .coupon_txt > p > span {font-weight: bold;}

      .menu_list > ul > li > a {display: flex; justify-content: space-between; align-items: center; padding:12px; border-bottom: 1px solid #e8e8e8;}
      .menu_list > ul > li > a > span {font-size: .9rem;}
      .menu_list > button {display: block; width: 60%; padding: 8px; background-color: #003da7; color: #fff; text-align: center; margin:12px auto; border-radius: 18px; border: none;}

        /* menu fade */
          .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
          .fade-enter, .fade-leave-to {opacity: 0;}

          .slide-fade-enter-active { transition: all .3s ease; }
          .slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
          .slide-fade-enter, .slide-fade-leave-to {transform: translateX(-100%); opacity: 0;}
</style>