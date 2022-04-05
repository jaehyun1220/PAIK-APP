<template>
    <div class="container">
        <slide/>
        <div class="home_wrap">
            <div class="home_menu">
                <h2>고객님을 위한 추천 메뉴</h2>
                <ul>
                    <li>
                        <img src="../assets/image/coffee_01.png" alt="coffee">
                        <span>원조커피(ICED)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_02.png" alt="coffee">
                        <span>앗!메리카노(ICED)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_03.png" alt="coffee">
                        <span>앗!메리카노(HOT)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_04.png" alt="coffee">
                        <span>달달연유라떼(ICED)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_05.png" alt="coffee">
                        <span>호떡라떼(HOT)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_06.png" alt="coffee">
                        <span>호떡라떼(ICED)</span>
                    </li>
                    <li>
                        <img src="../assets/image/coffee_07.png" alt="coffee">
                        <span>콤부차(라즈베리)</span>
                    </li>
                </ul>
            </div>
            <div class="home_event">
                <ul>
                    <li>
                        <img src="../assets/image/sub_menu_01.png" alt="">
                        <span>기프트샵</span>
                    </li>
                    <li>
                        <a href="./order">
                            <img src="../assets/image/sub_menu_02.png" alt="">
                            <span>스마트오더</span>
                        </a>
                    </li>
                    <li v-on:click="alertMessage">
                        <img src="../assets/image/sub_menu_03.png" alt="">
                        <span>이벤트</span>
                    </li>
                    <li v-on:click="alertMessage">
                        <img src="../assets/image/sub_menu_04.png" alt="">
                        <span>배달오더</span>
                    </li>
                </ul>
            </div>
            <div class="home_notice" id="home_notice">
                <div class="notice_wrap">
                    <div class="notice_shorts" v-for="(noticeLists, index) of noticeList" v-bind:key="index">
                        <span>{{noticeList[index].sort}}</span>
                        <p>{{noticeList[index].text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import slide from './slide.vue'
let idx = 0;
const currentNotice = document.getElementsByClassName('notice_wrap');
export default {
    name: 'main_',
    components : {
        slide,
    },
    data () {
        return {
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
                    currentNotice[0].classList.add('move');
                    idx = 1;
                } else if (idx == 1) {
                    currentNotice[0].classList.add('move2');
                    idx = 2;
                } else if (idx == 2) {
                    currentNotice[0].classList.remove('move');
                    currentNotice[0].classList.remove('move2');
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
        .home_wrap {padding: 8px;}
            .home_menu {background-color: #fff; border-radius: 15px; padding: 12px; margin: 6px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .05);}
            .home_menu > h2 {font-size: 0.9em; color: #071f60; font-weight: 600; padding: 6px 0;}
            .home_menu > ul {display: flex; justify-content: space-between; align-items: center; overflow-x: auto; white-space: nowrap; padding: 24px;}
            .home_menu > ul > li {width: 100%; margin-right: 50px; display: flex; flex-direction: column; align-items: center; justify-content: center;}
            .home_menu > ul > li:last-child {margin-right: 0;}
            .home_menu > ul > li > img {max-height: 200px;}
            .home_menu > ul > li > span {font-size: .8em; color: #333; display: block; text-align: center; padding: 8px 0;}

            .home_event > ul {display: flex; justify-content: center; flex-wrap: wrap;}
            .home_event > ul > li {padding: 12px; background-color: #fff; border-radius: 10px; margin: 6px; box-shadow: 0px 5px 15px rgba(0, 0, 0, .05); height: 50px; flex: 1 1 40%; display: flex; justify-content: flex-start; align-items: center;}
            .home_event > ul > li img {padding:0 8px;}
            .home_event > ul > li span {font-size: .8em;}

            .home_notice {height: 40px; overflow:hidden; background: url('../assets/image/notice.png')no-repeat 2.5%; margin:6px; overflow-y: hidden; background-color: #fff; border-radius: 10px; box-shadow:0px 5px 15px rgba(0, 0, 0, .05);}
                .notice_wrap {overflow: hidden; transition: all .3s;}
                    .notice_wrap.move { transform: translateY(-40px); transition: all .3s;}
                    .notice_wrap.move2 { transform: translateY(-80px); transition: all .3s;}
                    .notice_shorts {display: flex; justify-content: flex-start; align-items: center; padding-left: 35px; height: 40px;}
                    .notice_shorts > span {margin:0 5px;}
                    .notice_shorts > span, .notice_shorts > p {font-size: .8rem;}
</style>