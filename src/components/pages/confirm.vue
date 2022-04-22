<template>
    <div class="confirm">
        <div class="c_progress">
            <ul>
                <li class="c_progress_status active">
                    <span></span>
                    <p>주문접수</p>
                </li>
                <li class="c_progress_status" :class="{active:isActive}">
                    <span></span>
                    <p>주문승인</p>
                </li>
                <li class="c_progress_status" :class="{active:isActive2}">
                    <span></span>
                    <p>준비완료</p>
                </li>
            </ul>
            <div>
                <p>준비 완료 시 소지하신 휴대폰으로 알림 드립니다.</p>
            </div>
        </div>
        <div class="c_store">
            <h2>제조 완료 후 닉네임으로 호명됩니다.</h2>
            <p>픽업매장정보</p>
            <div>
                <span>매장명</span>
                <p>빽다방(구로코오롱점)</p>
            </div>
            <div>
                <span>매장연락처</span>
                <p>02-2081-1675</p>
            </div>
            <div>
                <span>픽업시간</span>
                <p>준비완료 후 수령 가능</p>
            </div>
        </div>
        <div class="c_list">
            <h2>주문내역</h2>
            <ul class="thead">
                <li>품명</li>
                <li>단가</li>
                <li>수량</li>
                <li>합계</li>
            </ul>
            <ul v-for="(c_confirms, index) of c_confirm" v-bind:key="index">
                <li> {{c_confirms.l_menu}} </li>
                <li>{{}}원</li>
                <li>{{}}</li>
                <li>{{}}원</li>
            </ul>
            <div>
                <p>총 주문 금액</p>
                <span>{{}}원</span>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
    name : 'confirm-wrap',
    data() {
        return {
            s_name : '',
            co_menu : '',
            isActive : false,
            isActive2 : false,
            c_confirm : JSON.parse(localStorage.getItem('co_cart')) || '',
            date : null
        }
    },
    methods: {
        
    },
    beforeCreate() {
        
    },
    created() {
        eventBus.$on('smartSend',(asd) => {
            this.date = asd 
        })
        
    },
    mounted() {
        setTimeout(() => this.isActive = !this.isActive, 5000);
        setTimeout(() => this.isActive2 = !this.isActive2, 50000);
    }
}
</script>

<style scoped>
    .confirm {padding: 64px 0px 85px; background-color: #fff;}
        .c_progress {padding: 12px 0;}
        .c_progress > ul {padding: 25px 0; display: flex; justify-content: space-around; align-content: center; }
        .c_progress > ul > li {flex: 1 1 30%; position: relative;}
        .c_progress > ul > li::after {position: absolute; content: ''; width: 100%; height: 1px; background-color: rgba(0, 0, 0, .1); top: 25%; right: -50%; transform: translateY(-50%);}
        .c_progress > ul > li:last-child::after {display: none;}
        .c_progress > ul > li > span {border-radius: 100%; border: 1px solid #e4e4e4; width: 20px; height: 20px; display: block; margin: auto; margin-bottom: 10px; position: relative; z-index: 1; background-color: #fff;}
        .c_progress > ul > li > p {font-size: .85rem; color: #9d9d9d; text-align: center;}
        .c_progress > ul > li.active > span {border: 1px solid #00399d; background-color: #00399d;}
        .c_progress > ul > li.active > p {color: #00399d; font-weight: 700;}

        .c_progress > div {background-color: #E5ECF6; border-radius: 8px; padding: 12px 0; margin:0 12px;}
        .c_progress > div > p {text-align: center; color: #4f555f; font-size: .9rem; font-weight: 500;}

        .c_store {padding:12px;}
        .c_store > h2 {text-align: center; font-size: 1rem; color: #333; border: 5px double rgba(0, 0, 0, .15); border-left: 0; border-right: 0; padding: 18px 0; font-weight: bold; margin-bottom: 20px;}
        .c_store > p {font-size: .9rem; margin: 6px 0;}
        .c_store > div {padding: 6px 0; display: flex; justify-content: space-between; align-items: center;}
        .c_store > div > span, .c_store > div > p {font-size: .9rem;}
        .c_store > div > span {color: #acacac;}
        .c_store > div > p {color: #696969;}
        .c_store > div:last-child > p {color: #12429a;}

        .c_list {padding: 12px; border-top: 1px dotted #e4e4e4; border-bottom: 1px dotted #e4e4e4;}
        .c_list > h2 {margin-bottom: 12px;}
        .c_list > ul {display: flex; justify-content: space-between; align-items: center; padding: 5px; margin: 5px 0;}
        .c_list > ul.thead {padding: 6px; background-color: #f2f2f2;}
        .c_list > ul.thead > li {color: #696969;}
        .c_list > ul > li {font-size: .9rem;}
        .c_list > ul > li:first-child {width: 50%;}
        .c_list > div {display: flex; justify-content: space-between; align-items: center; padding: 5px;}
        .c_list > div > p, .c_list > div > span {font-size: .9rem; color: #333; font-weight: 600;}
        
</style>