<template>
    <div class="container order_wrap">
        <div class="search_wrap"></div>
        <div class="menu_wrap">
            <div class="menu_select">
                <ul>
                    <li v-for="(menu_cas,index) of menu_ca" v-bind:key="index">
                        <span>{{menu_ca[index]}}</span>
                    </li>
                </ul>
            </div>
            <div class="menu_list">
                <div class="menu_list_wrap" v-for="(menu_texts, index) of menu_text" v-bind:key="index">
                    <img :src="menu_texts.image">
                    <div class="menu_text">
                        <div class="menu_name">
                            {{menu_text[index].name}}
                        </div>
                        <div class="menu_price">
                            <span>{{menu_text[index].price}}</span>원
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    

    export default {
        name:'order-wrap',
        data() {
            return {
                menu_ca : ['커피','빽스치노','주스/에이드','디저트'],
                menu_text : [
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
                        name : '빽s-라떼I',
                        price : '3000',
                        category : "coffee"
                    },
                ]
            }
        }
    }

</script>
<style scoped>
    .container {padding: 70px 0px 85px; width: 100%; height: 100%;background-color: #F2F2F2;}
        .menu_select { overflow-x: auto; border-top: 1px solid #ececec; border-bottom: 1px solid #ececec; background-color: #fff;}
        .menu_select > ul {display: flex; justify-content: space-around; align-items: center;  width: 100%; padding:5px 0;}
        .menu_select > ul > li > span {color: #333; border-radius: 15px; display: block; font-size: 14px; padding: 7px 15px; display: block; font-weight: 400;}
        .menu_select > ul > li > span.on {background-color: #003DA7; color: #fff;}

            .menu_list_wrap {display: flex; align-items: center; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #ececec;}
            .menu_list_wrap > img {height: 15vh;}
                .menu_text {flex: 3;}
                    .menu_name {font-size: 14px;}
                    .menu_price {font-weight: bold; margin: 5px 0; font-size: 14px;}
</style>