<template>
    <div class="container">
        <slide/>
        <div class="main">
            <div class="m_menu">
                <h2>고객님을 위한 추천 메뉴</h2>
                <ul>
                    <li>
                        <img src="../../assets/image/coffee_01.png" alt="coffee">
                        <span>원조커피(ICED)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_02.png" alt="coffee">
                        <span>앗!메리카노(ICED)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_03.png" alt="coffee">
                        <span>앗!메리카노(HOT)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_04.png" alt="coffee">
                        <span>달달연유라떼(ICED)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_05.png" alt="coffee">
                        <span>호떡라떼(HOT)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_06.png" alt="coffee">
                        <span>호떡라떼(ICED)</span>
                    </li>
                    <li>
                        <img src="../../assets/image/coffee_07.png" alt="coffee">
                        <span>콤부차(라즈베리)</span>
                    </li>
                </ul>
            </div>
            <div class="m_event">
                <ul>
                    <li>
                        <router-link to="./order">
                            <img src="../../assets/image/sub_menu_02.png" alt="">
                            <span>스마트오더</span>
                        </router-link>
                    </li>
                    <li v-on:click="alertMessage">
                        <router-link to="">
                            <img src="../../assets/image/sub_menu_01.png" alt="">
                            <span>기프트샵</span>
                        </router-link>
                    </li>
                    <li v-on:click="alertMessage">
                        <router-link to="">
                            <img src="../../assets/image/sub_menu_03.png" alt="">
                            <span>이벤트</span>
                        </router-link>
                    </li>
                    <li v-on:click="alertMessage">
                        <router-link to="">
                            <img src="../../assets/image/sub_menu_04.png" alt="">
                            <span>배달오더</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="m_notice">
                <div class="n_cover" :class="{move:isMove, move2:isMove2}">
                    <div class="n_list" v-for="(noticeLists, index) of noticeList" v-bind:key="index">
                        <span>{{noticeLists.sort}}</span>
                        <p>{{noticeLists.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import slide from './slide.vue'
let idx = 0;
export default {
    name: 'main-wrap',
    components : {
        slide,
    },
    data () {
        return {
            isMove : false,
            isMove2 : false,
            noticeList : [
                { 
                    sort : '[공지]',
                    text : '테스트입니다.',
                },
                { 
                    sort : '[소식]',
                    text : '개인정보처리방침 개정 안내'
                },
                { 
                    sort : '[공지]',
                    text : '공지사항입니다.'
                }
            ],
        }
    },
    created () {
        this.rolling();
    },
    methods : {
        rolling () {
            setInterval (()=> {
                if (idx == 0) {
                    this.isMove = !this.isMove
                    idx = 1;
                } else if (idx == 1) {
                    this.isMove2 = !this.isMove2
                    idx = 2;
                } else if (idx == 2) {
                    this.isMove = false
                    this.isMove2 = false
                    idx = 0;
                }
            },2000);
        },
        alertMessage() {
            alert('준비중입니다.')
        }
    }
}
</script>

<style scoped>
    .container {padding: 50px 0 85px 0; width: 100%; height: 100%;background-color: #F2F2F2;}
        .main {padding: 8px;}

            .m_menu {background-color: #fff; border-radius: 5px; padding: 12px; margin: 6px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .05);}
            .m_menu > h2 {font-size: 0.9em; color: #071f60; font-weight: 600; padding: 6px 0;}
            .m_menu > ul {display: flex; justify-content: space-between; align-items: center; overflow-x: auto; white-space: nowrap; padding: 24px;}
            .m_menu > ul > li {width: 100%; margin-right: 50px; display: flex; flex-direction: column; align-items: center; justify-content: center;}
            .m_menu > ul > li:last-child {margin-right: 0;}
            .m_menu > ul > li > img {max-height: 200px;}
            .m_menu > ul > li > span {font-size: .8em; color: #333; display: block; text-align: center; padding: 8px 0;}

            .m_event > ul {display: flex; justify-content: center; flex-wrap: wrap;}
            .m_event > ul > li {background-color: #fff; border-radius: 5px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .05); height: 65px; flex: 1 1 40%; display: flex; justify-content: flex-start; align-items: center; margin: 6px; padding:0 12px;}
            .m_event > ul > li > a {display: block; width: 100%;}
            .m_event > ul > li > a img {padding:0 8px; transform: scale(.85);}
            .m_event > ul > li > a span {font-size: .8em;}

            .m_notice {height: 40px; overflow:hidden; background: url('../../assets/image/notice.png')no-repeat 2.5%; margin:6px; overflow-y: hidden; background-color: #fff; border-radius: 5px; box-shadow:0px 5px 15px rgba(0, 0, 0, .05);}
                .n_cover { overflow: hidden; transition: all .3s;}
                .n_cover.move { transform: translateY(-40px); transition: all .3s;}
                .n_cover.move2 { transform: translateY(-80px); transition: all .3s;}
                    .n_list {display: flex; justify-content: flex-start; align-items: center; padding-left: 35px; height: 40px;}
                    .n_list > span {margin:0 5px;}
                    .n_list > span, .n_list > p {font-size: .8rem;}
</style>