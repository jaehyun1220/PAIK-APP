<template>
    <div class="container">
        <div class="search">
            <input type="text" autofocus placeholder="메뉴를 검색하세요.">
            <box-icon name='search' color="#071F60"></box-icon>
        </div>
        <div class="tabs">
            <ul>
                <li v-for="(categorys, index) of category" v-bind:key="index" :class="{active: idx === index}">
                    <span v-on:click="idx = index">{{category[index].name}}</span>
                </li>
            </ul>
        </div>
        <div class="list" v-for="(coffees, index) of category[idx].menu" v-bind:key="index" v-on:click="selected(idx, index)">
            <img :src="coffees.image">
            <div class="text">
                <p>{{coffees.name}}</p>
                <p><span>{{coffees.price}}</span>원</p>
            </div>
        </div>
        <div class="action-sheets" :class="{active : action}">
            <transition name="fade">
                <div v-if="on">
                    <div class="bg" v-on:click="close">
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="box" v-if="on">
                    <box-icon name='x' color="#071F60" v-on:click="close"></box-icon>
                    <div class="thumb">
                        <img :src="select_image" alt="">
                        <p>{{ select_menu }}</p>
                        <p><span>{{ select_price }}</span>원</p>
                    </div>
                    <div class="options">
                        <ul>
                            <li>
                                <span>수량</span>
                                <div class="add">
                                    <box-icon name='minus-circle' color="#b3b3b3" v-on:click="minus"></box-icon>
                                    <span>{{ this.count }}</span>
                                    <box-icon name='plus-circle' color="#b3b3b3" v-on:click="plus"></box-icon>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="add-button" v-on:click="[close, add()]">장바구니 담기</div>
                </div>
            </transition>
        </div>
        <div class="order" v-if="order">
            <div class="simple">
                <div class="txt">
                    <p>총<span>{{ totalNum }}</span>개</p>
                    <p><span> {{ totalPrice}} </span>원</p>
                </div>
                <box-icon name='chevron-up' color="#737373"></box-icon>
                <div class="order-button">주문하기</div>
            </div>
            <div class="detail">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'order-wrap',
        data() {
            return {
                count :1,
                idx : 0,
                on:false,
                action:false,
                order:false,
                totalNum : 0, 
                totalPrice : 0,
                category : [
                    {
                        sort : "coffee", 
                        name : '커피',
                        menu : [{
                                image : require("../../assets/image/menu/1_1.png"),
                                name : 'HOT-달달연유라떼',
                                price : '3700',
                            },{
                                image : require("../../assets/image/menu/1_2.png"),
                                name : 'HOT-바닐라라떼',
                                price : '3500',
                            },{
                                image : require("../../assets/image/menu/1_3.png"),
                                name : 'HOT-빽s라떼',
                                price : '3000',
                            },{
                                image : require("../../assets/image/menu/1_4.png"),
                                name : 'HOT-쑥쑥라떼',
                                price : '3500',
                            },{
                                image : require("../../assets/image/menu/1_5.png"),
                                name : 'HOT-완전초코',
                                price : '3500',
                            },{
                                image : require("../../assets/image/menu/1_6.png"),
                                name : 'HOT-카라멜마키아또',
                                price : '3500',
                            },{
                                image : require("../../assets/image/menu/1_7.png"),
                                name : '콜드브루',
                                price : '4000',
                            },{
                                image : require("../../assets/image/menu/1_8.png"),
                                name : '콜드브루연유라떼',
                                price : '5500',
                            },{
                                image : require("../../assets/image/menu/1_9.png"),
                                name : '콜드브루흑당라떼',
                                price : '5500',
                            },{
                                image : require("../../assets/image/menu/1_10.png"),
                                name : '블랙펄라떼',
                                price : '3700',
                            },{
                                image : require("../../assets/image/menu/1_11.png"),
                                name : '블랙펄카페라떼',
                                price : '4200',
                            },{
                                image : require("../../assets/image/menu/1_12.png"),
                                name : '빽s-라떼ICED',
                                price : '3000',
                        }]
                    },
                    {
                        sort : "cappuccino",
                        name : '빽스치노',
                        menu : [{
                                image : require("../../assets/image/menu/2_1.png"),
                                name : '쿠키크런치빽스치노-BASIC',
                                price : '3800',
                            },{
                                image : require("../../assets/image/menu/2_2.png"),
                                name : '쿠키크런치빽스치노-SOFT',
                                price : '4300',
                            },{
                                image : require("../../assets/image/menu/2_3.png"),
                                name : '쑥쑥빽스치노-BASIC',
                                price : '400',
                            },{
                                image : require("../../assets/image/menu/2_4.png"),
                                name : '쑥쑥빽스치노-SOFT',
                                price : '4500',
                            },{
                                image : require("../../assets/image/menu/2_5.png"),
                                name : '완전딸기바나나-BASIC',
                                price : '3800',
                            },{
                                image : require("../../assets/image/menu/2_6.png"),
                                name : '완전딸기바나나-SOFT',
                                price : '4300',
                            },{
                                image : require("../../assets/image/menu/2_7.png"),
                                name : '완전초코바나나-SOFT',
                                price : '3800',
                            },{
                                image : require("../../assets/image/menu/2_8.png"),
                                name : '완전초코바나나-BASIC',
                                price : '4300',
                            },{
                                image : require("../../assets/image/menu/2_9.png"),
                                name : '원조빽스치노-BASIC',
                                price : '3300',
                            },{
                                image : require("../../assets/image/menu/2_10.png"),
                                name : '원조빽스치노-SOFT',
                                price : '3800',
                            },{
                                image : require("../../assets/image/menu/2_11.png"),
                                name : '민트초코빽스치노-BASIC',
                                price : '3800',
                            },{
                                image : require("../../assets/image/menu/2_12.png"),
                                name : '민트초코빽스치노-SOFT',
                                price : '4300',
                        }]
                    },
                    {
                        sort : "juice",
                        name : '주스/에이드',
                        menu : [{
                            image : require("../../assets/image/menu/3_1.png"),
                            name : 'ICED-달달연유라떼',
                            price : '3700',
                        },{
                            image : require("../../assets/image/menu/3_2.png"),
                            name : 'ICED-레몬얼그레이티',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_3.png"),
                            name : 'ICED-바닐라라떼',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_4.png"),
                            name : 'ICED-삼라봉티',
                            price : '4500',
                        },{
                            image : require("../../assets/image/menu/3_5.png"),
                            name : 'ICED-쑥쑥라떼',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_6.png"),
                            name : 'ICED-완전초코',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_7.png"),
                            name : 'ICED-자몽티',
                            price : '4000',
                        },{
                            image : require("../../assets/image/menu/3_8.png"),
                            name : 'ICED-페퍼민트티',
                            price : '2500',
                        },{
                            image : require("../../assets/image/menu/3_9.png"),
                            name : 'ICED-피치우롱스위티',
                            price : '3000',
                        },{
                            image : require("../../assets/image/menu/3_10.png"),
                            name : '딸기라떼',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_11.png"),
                            name : '밀크쉐이크',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/3_12.png"),
                            name : '빽사이즈-아샷추',
                            price : '3500',
                        }]
                    },
                    {
                        sort : "dessert",
                        name : '디저트',
                        menu : [{
                            image : require("../../assets/image/menu/4_1.png"),
                            name : '공공치빵초코맛',
                            price : '2500',
                        },{
                            image : require("../../assets/image/menu/4_2.png"),
                            name : '공공치빵파맛',
                            price : '2500',
                        },{
                            image : require("../../assets/image/menu/4_3.png"),
                            name : '긴페스츄리와플',
                            price : '2500',
                        },{
                            image : require("../../assets/image/menu/4_4.png"),
                            name : '네모머핀초콜릿',
                            price : '2300',
                        },{
                            image : require("../../assets/image/menu/4_5.png"),
                            name : '노말한소프트',
                            price : '2000',
                        },{
                            image : require("../../assets/image/menu/4_6.png"),
                            name : '달고나크런치',
                            price : '2500',
                        },{
                            image : require("../../assets/image/menu/4_7.png"),
                            name : '크리미단팥빵',
                            price : '1800',
                        },{
                            image : require("../../assets/image/menu/4_8.png"),
                            name : '크리미슈',
                            price : '1800',
                        },{
                            image : require("../../assets/image/menu/4_9.png"),
                            name : '큰마들렌오리지널',
                            price : '2800',
                        },{
                            image : require("../../assets/image/menu/4_10.png"),
                            name : '빽그램핫도그',
                            price : '3500',
                        },{
                            image : require("../../assets/image/menu/4_11.png"),
                            name : '사라다빵',
                            price : '3000',
                        },{
                            image : require("../../assets/image/menu/4_12.png"),
                            name : '소세지빵',
                            price : '3000',
                        }]
                    },
                ],
            }
        },
        methods: {
            selected(idx, index) {
                this.on = !this.on
                this.action = !this.action
                this.select_image = this.category[idx].menu[index].image
                this.select_menu = this.category[idx].menu[index].name
                this.select_price = this.category[idx].menu[index].price
                this.order = false
            },
            close() {
                this.on = !this.on
                this.action = !this.action
                this.count = 0;
            },
            plus() {
                this.count++;
                this.totalNum = this.count
                let total = this.select_price * this.totalNum
                this.totalPrice =  total.toLocaleString('ko-KR')
            },
            minus() {
                if (this.count == 0) {
                    this.count = 0;
                } else {
                    this.count--;
                }
            },
            add() {
                this.on = !this.on
                this.action = !this.action
                this.count = 0;
                this.order = !this.order
            }
        },
    }
</script>
<style scoped>
    .container {padding: 64px 0px 85px; width: 100%; height: 100%;background-color: #F2F2F2;}
        .search {margin: 7px 0; border:1px solid #ececec; background-color: #fff; box-shadow: 0px 5px 10px rgba(0, 0, 0, .1); display: flex; justify-content: center; align-items: center; padding: 7px;}
            input[type="text"] {border:none; width: 100%;}
            input[type="text"]::placeholder {font-size: .8rem;}

        .tabs { overflow-x: auto; border-top: 1px solid #ececec; border-bottom: 1px solid #ececec; background-color: #fff; margin-bottom: 7px; box-shadow: 0px 5px 10px rgba(0, 0, 0, .1);}
        .tabs > ul {display: flex; justify-content: space-around; align-items: center;  width: 100%; padding:5px 0;}
        .tabs > ul > li > span {color: #333; border-radius: 15px; display: block; font-size: .9rem; padding: 7px 15px; display: block; font-weight: 400;}
        .tabs > ul > li.active > span {background-color: #003DA7; color: #fff;}
            .list {display: flex; align-items: center; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #ececec;}
            .list > img {height: 15vh;}
                .text {flex: 3;}
                .text > p {font-size: .9rem; }
                .text > p > span {font-weight: bold; font-size: .9rem; display: inline-block;  margin: 5px 0;}

        .action-sheets {width: 100%; height: 70vh; position: fixed; bottom: 0; left: 0; z-index: -1;}
        .action-sheets.active {z-index: 10;}
            .bg {position: fixed; width: 100%; height: 100%;  z-index: 10; top: 0; left: 0; display: flex; align-items: flex-end; background-color: rgba(0, 0, 0, .3);}
                .thumb {text-align: center; padding: 15px 0;}
                .thumb > img {width: 100px;}
                .thumb > p {margin-bottom: 7px; font-size: .9rem; font-weight: bold;}
                .thumb > p > span {color: #003DA7; font-size: .9rem; font-weight: bold;}

            .box { background-color: #fff; border-radius: 15px 15px  0 0; width: 100%; position: relative; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; z-index: 11;}
            .box > box-icon {position: absolute; right: 15px; top: 15px;}

                .options > ul {padding:0 15px;}
                .options > ul > li {border-bottom: 1px solid #ececec; display: flex; justify-content: space-between; align-items: center; padding: 7px;}
                .options > ul > li * {font-size: .9rem;}
                .options > ul > li:first-child {border-top: 1px solid #ececec;}
                    .add {display: flex; align-items: center;}
                    .add > span {display: block; margin: 0 5px; padding: 0 5px;}

                .add-button {background-color: #003DA7; color: #fff; text-align: center; padding: 18px; font-size: .9rem; margin-top: auto;}

        .order {position: fixed; left: 0; bottom: 0; width: 100%; z-index: 11;}
            .simple {display: flex; justify-content: space-between; align-items: center; background-color: #333; border-radius: 15px 15px 0 0; height: 65px; width: 100%;}
            .simple box-icon {margin-top: auto; margin-bottom: 12px;}

                .txt > p {font-size: .9rem; padding:0 16px;}
                .txt > p:first-child {color: #fff; margin-bottom: 5px;}
                .txt > p:last-child {color: #FFDB2D;}
                .txt > p:last-child > span {font-size: 1.2rem; margin: 0; margin-right: 0px;}
                .txt > p > span {margin: 0 5px; font-size: .9rem;}

                .order-button {background-color: #003DA7; color: #fff; padding: 12px 16px; border-radius: 10px; font-size: .9rem; margin: 0 12px;}

    /* transition */
        .fade-enter-active, .fade-leave-active {transition: opacity .3s;}
        .fade-enter, .fade-leave-to {opacity: 0;}

        .slide-fade-enter-active { transition: all .3s ease; }
        .slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
        .slide-fade-enter, .slide-fade-leave-to {opacity: 0; transform: translateY(100%);}
</style>