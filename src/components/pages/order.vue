<template>
    <div class="container">
        <div class="loading_comp" v-if="loading">
            <BounceLoader :loading="loading"></BounceLoader>
        </div>
        <div class="search">
            <input type="text" placeholder="메뉴를 검색하세요." v-model="s_input" @input="submitAutoComplete">
            <box-icon name='search' color="#071F60"></box-icon>
        </div>
        <ul class="s_list" v-show="s_list">
            <li v-for="(res, index) of result" v-bind:key="index" v-on:click="selected(idx, index)" v-on:keyup.enter="selected(idx)">{{ res }}</li>
        </ul>
        <div class="tabs">
            <ul>
                <li v-for="(categories, index) of category" v-bind:key="index" :class="{active: idx === index}">
                    <span v-on:click="idx = index">{{categories.name}}</span>
                </li>
            </ul>
        </div>
        <div class="list" v-for="(coffees, index) of category[idx].menu" v-bind:key="index" v-on:click="selected(idx, index)">
            <img :src="coffees.image">
            <div class="l_txt">
                <p>{{coffees.name}}</p>
                <p><span>{{coffees.price}}</span>원</p>
            </div>
        </div>
        <div class="action-sheets" :class="{active : a_modal}">
            <transition name="fade">
                <div v-if="a_modal">
                    <div class="as_cover" v-on:click="close"></div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="as_wrap" v-if="a_modal">
                    <box-icon name='x' color="#071F60" v-on:click="close"></box-icon>
                    <div class="as_product">
                        <img :src="s_image" alt="">
                        <p>{{ s_name }}</p>
                        <p><span>{{ s_price }}</span>원</p>
                    </div>
                    <div class="as_option">
                        <ul>
                            <li>
                                <span>수량</span>
                                <div class="as_add">
                                    <box-icon name='minus-circle' color="#b3b3b3" v-on:click="minus"></box-icon>
                                    <span>{{ this.s_num }}</span>
                                    <box-icon name='plus-circle' color="#b3b3b3" v-on:click="plus"></box-icon>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="as_btn" v-on:click="[close, add()]">장바구니 담기</div>
                </div>
            </transition>
        </div>
        <div class="order" v-if="o_modal" :class="{hide:isActive}">
            <div class="o_preview">
                <div class="o_txt">
                    <p>총<span>{{ t_num }}</span>개</p>
                    <p><span> {{ t_price.toLocaleString('ko-KR')}} </span>원</p>
                </div>
                <box-icon name='chevron-down' color="#737373" v-on:click="open"></box-icon>
                <div v-on:click="smart">
                    <router-link to="./confirm" class="o_btn_01">주문하기</router-link>
                </div>
            </div>
            <div class="o_content">
                <transition-group name="horizontal">
                    <div class="o_list" v-for="(o_carts, index) of o_cart" v-bind:key="index">
                        <div class="o_product">
                            <img :src="o_carts.l_image">
                            <p>{{ o_carts.l_name}}</p>
                        </div>
                        <div class="o_price">
                            <p>{{ o_carts.l_price.toLocaleString('ko-KR') }}원 x {{ o_carts.l_num }}</p>
                            <box-icon name='x-circle' color="#b3b3b3" v-on:click="del(index)"></box-icon>
                        </div>
                    </div>
                </transition-group>
                <div v-on:click="smart">
                    <router-link to="./confirm" class="o_btn_02">스마트오더 주문하기</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
    name:'order-wrap',
    components : {
        BounceLoader
    },
    data() {
        return {
            idx : 0,
            loading : true,
            isActive: false,
            result: null,
            a_modal:false,
            o_modal:false,
            t_num : 0, 
            t_price : 0,
            t_name : null,
            it_price : 0,
            s_input: null,
            s_image : '',
            s_menu : [],
            s_name : [],
            s_price : 0,
            s_num :0,
            s_list :false,
            o_cart : [],
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
            this.a_modal = !this.a_modal
            this.s_num = 0
            this.s_name = this.category[idx].menu[index].name
            this.s_image = this.category[idx].menu[index].image
            this.s_price = this.category[idx].menu[index].price
        },
        open() {
            this.isActive = !this.isActive
        },
        close() {
            this.a_modal = !this.a_modal
            this.s_num = 0;
        },
        plus() {
            this.s_num++;
        },
        minus() {
            if (this.s_num == 0) {
                this.s_num = 0;
            } else {
                this.s_num--;
            }
        },
        del(index) {
            this.o_cart.splice(index, 1)
            if(this.o_cart.length == 0) {
                this.t_num = 0;
                this.t_price = 0;
            }
        },
        add() {
            if (this.s_num != 0) {
                let item =  {
                    l_name : this.s_name,
                    l_price : this.s_price,
                    l_image : this.s_image,
                    l_num : this.s_num,
                    it_price : '',
                }
                item.it_price = item.l_price * item.l_num

                this.a_modal = !this.a_modal
                this.o_modal = true
                this.o_cart.push(item)

                const t_cart = this.o_cart;

                this.t_num = t_cart.reduce((a, b) => {
                    console.log("누적 계산 횟수: " + a);
                    console.log("값 : " + (a + b.l_num));
                    return a + b.l_num
                    }, 0);
                //console.log('this.t_num =', this.t_num);
                this.t_price = t_cart.reduce((a, b) => {
                    return a + b.it_price
                    }, 0);
            }
        },
        smart() {
            const t_cart = this.o_cart
            eventBus.$emit('sendData', t_cart)
        },
        submitAutoComplete() {
            if (this.s_input == null || this.s_input == '') {
                this.s_list = false
            } else {
                this.s_list = true
                this.result = this.t_name.filter((filter) => {
                return filter.match(new RegExp(this.s_input, "i"));
                });
                //console.log(this.result)
            }
        },
        s_result(idx) {
            this.a_modal = !this.a_modal
            this.s_num = 0
            this.s_name = this.category[idx].menu[idx].name
            this.s_image = this.category[idx].menu[idx].image
            this.s_price = this.category[idx].menu[idx].price
            console.log(idx)
        }
    },
    created() {
        const t_name  = [];
        for (let i = 0; i < 4; i++) { 
            const t_depth_01 = this.category[i]
            for (let j = 0; j < 12; j++) {
                const t_depth_02 = t_depth_01.menu[j].name
                t_name.push(t_depth_02)
            }
        }
        this.t_name = t_name
        setTimeout (()=>{this.loading = !this.loading},1000);
    }
}
</script>
<style scoped>
    .container {padding: 64px 0px 85px; width: 100%; background-color: #F2F2F2; position: relative;}
        .loading_comp {position: fixed; width: 100%; height: 100vh; background-color: rgba(255, 255, 255, 1); top: 0; left: 0; z-index: 100;}
            .v-spinner {position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }

        .search {margin: 7px 0; border:1px solid #ececec; background-color: #fff; box-shadow: 0px 5px 10px rgba(0, 0, 0, .1); display: flex; justify-content: center; align-items: center; padding: 7px;}
            input[type="text"] {border:none; width: 100%;}
            input[type="text"]::placeholder {font-size: .95rem;}

            .s_list { background-color: #fff; box-shadow: 0px 5px 15px rgba(0, 0, 0, .2); max-height: 130px; overflow-y: scroll; border-radius: 5px; position: absolute; width: 100%; left: 0; top: 115px;}
            .s_list > li {margin: 5px 0; padding: 7px; box-sizing: border-box; font-size: .85rem;}

        .tabs { overflow-x: auto; border-top: 1px solid #ececec; border-bottom: 1px solid #ececec; background-color: #fff; margin-bottom: 7px; box-shadow: 0px 5px 10px rgba(0, 0, 0, .1);}
        .tabs > ul {display: flex; justify-content: space-around; align-items: center;  width: 100%; padding:5px 0;}
        .tabs > ul > li > span {color: #333; border-radius: 15px; display: block; font-size: .9rem; padding: 7px 15px; display: block; font-weight: 400;}
        .tabs > ul > li.active > span {background-color: #003DA7; color: #fff;}
            .list {display: flex; align-items: center; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #ececec;}
            .list > img {height: 15vh;}
                .l_txt {flex: 3;}
                .l_txt > p {font-size: .9rem; }
                .l_txt > p > span {font-weight: bold; font-size: .9rem; display: inline-block;  margin: 5px 0;}

        .action-sheets {width: 100%; height: 100%; position: fixed; bottom: 0; left: 50%; z-index: -1; transform: translateX(-50%); max-width: 500px; display: flex;}
        .action-sheets.active {z-index: 11;}
            .as_cover {position: fixed; width: 100%; height: 100%;  z-index: 10; top: 0; left: 0; display: flex; align-items: flex-end; background-color: rgba(0, 0, 0, .3);}

            .as_wrap { background-color: #fff; border-radius: 15px 15px  0 0;  position: relative; width: 100%; height: 70vh; display: flex; flex-direction: column; z-index: 11; margin-top: auto;}
            .as_wrap > box-icon {position: absolute; right: 15px; top: 15px;}

                .as_product {text-align: center; padding: 15px 0;}
                .as_product > img {width: 100px;}
                .as_product > p {margin-bottom: 7px; font-size: .9rem; font-weight: bold;}
                .as_product > p > span {color: #003DA7; font-size: .9rem; font-weight: bold;}

                .as_option > ul {padding:0 15px;}
                .as_option > ul > li {border-bottom: 1px solid #ececec; display: flex; justify-content: space-between; align-items: center; padding: 7px;}
                .as_option > ul > li * {font-size: .9rem;}
                .as_option > ul > li:first-child {border-top: 1px solid #ececec;}
                    .as_add {display: flex; align-items: center;}
                    .as_add > span {display: block; margin: 0 5px; padding: 0 5px;}

                .as_btn {background-color: #003DA7; color: #fff; text-align: center; padding: 18px; font-size: .9rem; margin-top: auto;}

        .order {position: fixed; left: 50%; bottom: 0; width: 100%; max-width: 500px;  z-index: 10; transform: translate(-50%, 0); transition: all .3s;}
        .order.hide {transition: all .3s; transform:translate(-50%, calc(100% - 65px));}
        .order.hide box-icon {transform: rotate(180deg);}
            .o_preview {display: flex; justify-content: space-between; align-items: center; background-color: #333; border-radius: 15px 15px 0 0; height: 65px; width: 100%;}
            .o_preview box-icon {margin-top: auto; margin-bottom: 12px;}
            .o_preview a {display: block;}

            .o_content {max-height: 30vh; overflow-y: auto; transition: all .3s; background-color: #fff;}
                .o_list {display: flex; justify-content: space-between; align-items: center; padding: 0 12px; border-bottom: 1px solid #e4e4e4;}
                    .o_product, .o_price {display: flex; align-items: center;}
                    .o_product > img { width: 75px; margin: auto;}
                    .o_product > p {font-size: .8rem;}

                    .o_price > p {margin: 0 5px; font-size: .9rem;}
                        .o_txt > p {font-size: .9rem; padding:0 16px;}
                        .o_txt > p:first-child {color: #fff; margin-bottom: 5px;}
                        .o_txt > p:last-child {color: #FFDB2D;}
                        .o_txt > p:last-child > span {font-size: 1.2rem; margin: 0; margin-right: 0px;}
                        .o_txt > p > span {margin: 0 5px; font-size: .9rem;}

                        .o_btn_01 {background-color: #003DA7; color: #fff; padding: 12px 16px; border-radius: 10px; font-size: .9rem; margin: 0 12px;}
                        .o_btn_02 {background-color: #003DA7; color: #fff; padding: 15px; font-size: .9rem; text-align: center; display: block;}

    /* transition */
        .fade-enter-active, .fade-leave-active {transition: opacity .3s;}
        .fade-enter, .fade-leave-to {opacity: 0;}

        .horizontal-enter-active, .horizontal-leave-active {transition: all .5s; transform: translateY(0%);}
        .horizontal-enter, .horizontal-leave-to {opacity: 0; transform: translateY(30%);}

        .slide-fade-enter-active { transition: all .3s ease; }
        .slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
        .slide-fade-enter, .slide-fade-leave-to {opacity: 0; transform: translateY(100%);}
</style>