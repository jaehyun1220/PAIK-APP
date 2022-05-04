<template>
    <div class="header">
        <div class="h_wrap">
            <box-icon name='menu-alt-left' color="#071F60" v-on:click="open"></box-icon>
            <a href="/">
                <img src="../assets/image/logo.png" alt="logo">
            </a>
            <box-icon name='bell' type='solid' color="#071F60"></box-icon>
        </div>
        <div>
            <transition name="fade">
                <div class="m_cover" v-if="on" v-on:click="close"></div>
            </transition>
            <transition name="slide-fade">
                <div class="m_item" v-if="on">
                    <div class="m_top">
                        <box-icon name='chevron-left' color="#fff" v-on:click="close"></box-icon>
                        <h2>마이페이지</h2>
                    </div>
                    <div class="m_user">
                        <img src="../assets/image/my_logo.png" alt="logo">
                        <p>안녕하세요! <br><span>관리자</span> 님</p>
                    </div>
                    <div class="m_coupon">
                        <ul>
                            <li v-on:click="ing">
                                <router-link to="/">
                                    <img src="../assets/image/menu_01.png" alt="stamp">
                                    <div class="c_txt">
                                        <p>스탬프</p>
                                        <p><span> {{ point.stamp }}</span>/10개</p>
                                    </div>
                                </router-link>
                            </li>
                            <li v-on:click="ing">
                                <router-link to="/">
                                    <img src="../assets/image/menu_02.png" alt="coupon">
                                    <div class="c_txt">
                                        <p>마이쿠폰</p>
                                        <p><span> {{ point.coupon }}</span>개</p>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="m_list">
                        <ul>
                            <li @click="close">
                                <router-link to="./order">
                                    <span>스마트오더 주문내역</span>
                                    <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                                </router-link>
                            </li>
                            <li @click="close">
                                <router-link to="./directions">
                                    <span>주변매장 찾기</span>
                                    <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                                </router-link>
                            </li>
                            <li v-on:click="ing">
                                <router-link to="/">
                                    <span>기프트샵</span>
                                    <box-icon name='chevron-right' color="#7d7d7d"></box-icon>
                                </router-link>
                            </li>
                            <li v-on:click="ing">
                                <router-link to="/">
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
    name: 'header_component',
    data () {
        return {
            point : { stamp : 0, coupon : 0,},
            on : false,
            s_count : 0,
            c_count : 0,
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
        },
        ing() {
            alert('준비중입니다.');
            return false
        },
        
    },
}
</script>

<style scoped>
    .header {position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 10; max-width: 500px; width: 100%;}
        .h_wrap {display: flex; justify-content: space-between; align-items: center; padding:12px; min-height: 40px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .075); border-radius: 0px 0px 15px 15px; background-color: #fff;}
        .h_wrap > box-icon {font-size: 1.6em;}
        .h_wrap > a > img {transform: scale(.75);}

    /* .menu  */
            .m_cover {position: fixed; width: 100%; top: 0; left: 0; height: 100vh; background-color: rgba(0, 0, 0, .25); z-index: 9;}
            .m_item {position: fixed; top: 0; left: 0; height: 100vh; width: 90%; background-color: #fff; z-index: 10; overflow-y: auto;}
                .m_top {text-align: center; position: relative; padding:12px; background-color: #003DA7; min-height: 40px; display: flex; justify-content: center; align-items: center;}
                .m_top > box-icon {position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #fff;}
                .m_top > h2 {color: #fff; font-family: 'Jua', sans-serif; font-size: 1.5rem;}

                .m_user {text-align: center; padding: 10px 0;}
                .m_user > img {transform: scale(.7);}
                .m_user > p {color: #003da7; line-height: 1.2; padding-bottom: 25px;}
                .m_user > p > span {font-weight: bold;}

                .m_coupon {border-top: 5px solid #E8E8E8; border-bottom: 5px solid #E8E8E8;}
                .m_coupon > ul {display: flex; justify-content: center; align-items: center;}
                .m_coupon > ul > li {flex: 1 1 40%;}
                .m_coupon > ul > li > a {display: flex; justify-content: center; align-items: center;}
                .m_coupon > ul > li > a > img {transform: scale(.6);}
                .m_coupon > ul > li:first-child > a {border-right: 1px solid #e8e8e8;}
                    .c_txt > p {line-height: 1.2;}
                    .c_txt > p:last-child {color: #ff3848;}
                    .c_txt > p, .c_txt > p > span {font-size: .8rem;}
                    .c_txt > p > span {font-weight: bold;}

                .m_list > ul > li {padding:12px;  border-bottom: 1px solid #e8e8e8;}
                .m_list > ul > li > a {display: flex; justify-content: space-between; align-items: center;}
                .m_list > ul > li > a > span {font-size: .9rem;}
                .m_list > button {display: block; width: 60%; padding: 8px; background-color: #003da7; color: #fff; text-align: center; margin:12px auto; border-radius: 18px; border: none;}

    /* menu fade */
        .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
        .fade-enter, .fade-leave-to {opacity: 0;}

        .slide-fade-enter-active { transition: all .3s ease; }
        .slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
        .slide-fade-enter, .slide-fade-leave-to {transform: translateX(-100%); opacity: 0;}
</style>