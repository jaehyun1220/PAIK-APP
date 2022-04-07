<template>
    <div class="container order_wrap">
        <div class="search_wrap"></div>
        <div class="menu_wrap">
            <div class="menu_select">
                <ul>
                    <li v-for="(categorys, index) of category" v-bind:key="index" :class="{active: currentTab === index}">
                        <span v-on:click="currentTab = index">{{category[index].name}}</span>
                    </li>
                </ul>
            </div>
            <transition name="fade">
                <div class="menu_list" v-show="currentTab == 0">
                    <div class="menu_list_wrap" v-for="(coffees, index) of coffee" v-bind:key="index + '0'">
                        <img :src="coffees.image">
                        <div class="menu_text">
                            <div class="menu_name">
                                {{coffee[index].name}}
                            </div>
                            <div class="menu_price">
                                <span>{{coffee[index].price}}</span>원
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="menu_list" v-show="currentTab == 1">
                    <div  class="menu_list_wrap" v-for="(cappuccinos, index) of cappuccino" v-bind:key="index + '1'">
                        <img :src="cappuccinos.image">
                        <div class="menu_text">
                            <div class="menu_name">
                                {{cappuccino[index].name}}
                            </div>
                            <div class="menu_price">
                                <span>{{cappuccino[index].price}}</span>원
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="menu_list" v-show="currentTab == 2">
                    <div  class="menu_list_wrap" v-for="(juices, index) of juice" v-bind:key="index + '2'">
                        <img :src="juices.image">
                        <div class="menu_text">
                            <div class="menu_name">
                                {{juice[index].name}}
                            </div>
                            <div class="menu_price">
                                <span>{{juice[index].price}}</span>원
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="menu_list" v-show="currentTab == 3">
                    <div  class="menu_list_wrap" v-for="(desserts, index) of dessert" v-bind:key="index + '3'">
                        <img :src="desserts.image">
                        <div class="menu_text">
                            <div class="menu_name">
                                {{dessert[index].name}}
                            </div>
                            <div class="menu_price">
                                <span>{{dessert[index].price}}</span>원
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name:'order-wrap',
        data() {
            return {
                currentTab : 0,
                category : [
                    {name : '커피',category : "coffee"},
                    {name : '빽스치노',category : "cappuccino"},
                    {name : '주스/에이드',category : "juice"},
                    {name : '디저트',category : "dessert"},
                ],
                coffee : [
                    {
                        image : require("../../assets/image/menu/1_1.png"),
                        name : 'HOT-달달연유라떼',
                        price : '3700',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_2.png"),
                        name : 'HOT-바닐라라떼',
                        price : '3500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_3.png"),
                        name : 'HOT-빽s라떼',
                        price : '3000',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_4.png"),
                        name : 'HOT-쑥쑥라떼',
                        price : '3500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_5.png"),
                        name : 'HOT-완전초코',
                        price : '3500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_6.png"),
                        name : 'HOT-카라멜마키아또',
                        price : '3500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_7.png"),
                        name : '콜드브루',
                        price : '4000',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_8.png"),
                        name : '콜드브루연유라떼',
                        price : '5500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_9.png"),
                        name : '콜드브루흑당라떼',
                        price : '5500',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_10.png"),
                        name : '블랙펄라떼',
                        price : '3700',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_11.png"),
                        name : '블랙펄카페라떼',
                        price : '4200',
                        category : "coffee"
                    },
                    {
                        image : require("../../assets/image/menu/1_12.png"),
                        name : '빽s-라떼ICED',
                        price : '3000',
                        category : "coffee"
                    },
                ],
                cappuccino : [
                    {
                        image : require("../../assets/image/menu/2_1.png"),
                        name : '쿠키크런치빽스치노-BASIC',
                        price : '3800',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_2.png"),
                        name : '쿠키크런치빽스치노-SOFT',
                        price : '4300',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_3.png"),
                        name : '쑥쑥빽스치노-BASIC',
                        price : '400',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_4.png"),
                        name : '쑥쑥빽스치노-SOFT',
                        price : '4500',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_5.png"),
                        name : '완전딸기바나나-BASIC',
                        price : '3800',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_6.png"),
                        name : '완전딸기바나나-SOFT',
                        price : '4300',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_7.png"),
                        name : '완전초코바나나-SOFT',
                        price : '3800',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_8.png"),
                        name : '완전초코바나나-BASIC',
                        price : '4300',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_9.png"),
                        name : '원조빽스치노-BASIC',
                        price : '3300',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_10.png"),
                        name : '원조빽스치노-SOFT',
                        price : '3800',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_11.png"),
                        name : '민트초코빽스치노-BASIC',
                        price : '3800',
                        category : "cappuccino"
                    },
                    {
                        image : require("../../assets/image/menu/2_12.png"),
                        name : '민트초코빽스치노-SOFT',
                        price : '4300',
                        category : "cappuccino"
                    },
                ],
                juice : [
                    {
                        image : require("../../assets/image/menu/3_1.png"),
                        name : 'ICED-달달연유라떼',
                        price : '3700',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_2.png"),
                        name : 'ICED-레몬얼그레이티',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_3.png"),
                        name : 'ICED-바닐라라떼',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_4.png"),
                        name : 'ICED-삼라봉티',
                        price : '4500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_5.png"),
                        name : 'ICED-쑥쑥라떼',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_6.png"),
                        name : 'ICED-완전초코',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_7.png"),
                        name : 'ICED-자몽티',
                        price : '4000',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_8.png"),
                        name : 'ICED-페퍼민트티',
                        price : '2500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_9.png"),
                        name : 'ICED-피치우롱스위티',
                        price : '3000',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_10.png"),
                        name : '딸기라떼',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_11.png"),
                        name : '밀크쉐이크',
                        price : '3500',
                        category : "juice"
                    },
                    {
                        image : require("../../assets/image/menu/3_12.png"),
                        name : '빽사이즈-아샷추',
                        price : '3500',
                        category : "juice"
                    },
                ],
                dessert : [
                    {
                        image : require("../../assets/image/menu/4_1.png"),
                        name : '공공치빵초코맛',
                        price : '2500',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_2.png"),
                        name : '공공치빵파맛',
                        price : '2500',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_3.png"),
                        name : '긴페스츄리와플',
                        price : '2500',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_4.png"),
                        name : '네모머핀초콜릿',
                        price : '2300',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_5.png"),
                        name : '노말한소프트',
                        price : '2000',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_6.png"),
                        name : '달고나크런치',
                        price : '2500',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_7.png"),
                        name : '크리미단팥빵',
                        price : '1800',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_8.png"),
                        name : '크리미슈',
                        price : '1800',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_9.png"),
                        name : '큰마들렌오리지널',
                        price : '2800',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_10.png"),
                        name : '빽그램핫도그',
                        price : '3500',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_11.png"),
                        name : '사라다빵',
                        price : '3000',
                        category : "dessert"
                    },
                    {
                        image : require("../../assets/image/menu/4_12.png"),
                        name : '소세지빵',
                        price : '3000',
                        category : "dessert"
                    },
                ],
            }
        },
    }
</script>
<style scoped>
    .container {padding: 70px 0px 85px; width: 100%; height: 100%;background-color: #F2F2F2;}
        .menu_select { overflow-x: auto; border-top: 1px solid #ececec; border-bottom: 1px solid #ececec; background-color: #fff; margin-bottom: 7px; box-shadow: 0px 5px 10px rgba(0, 0, 0, .1);}
        .menu_select > ul {display: flex; justify-content: space-around; align-items: center;  width: 100%; padding:5px 0;}
        .menu_select > ul > li > span {color: #333; border-radius: 15px; display: block; font-size: 14px; padding: 7px 15px; display: block; font-weight: 400;}
        .menu_select > ul > li.active > span {background-color: #003DA7; color: #fff;}

            .menu_list_wrap {display: flex; align-items: center; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #ececec;}
            .menu_list_wrap > img {height: 15vh;}
                .menu_text {flex: 3;}
                    .menu_name {font-size: 14px;}
                    .menu_price {font-size: 14px;  margin: 5px 0;}
                    .menu_price > span {font-weight: bold; font-size: 14px;}

        .fade-enter-active, .fade-leave-active {transition: opacity .3s;}
        .fade-enter, .fade-leave-to {opacity: 0; transition: opacity .3s;}
</style>