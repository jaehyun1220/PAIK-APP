<template>
    <div class="confirm">
        <div class="c_progress">
            <ul>
                <li>
                    <span></span>
                    <h2>주문접수</h2>
                </li>
                <li>
                    <span></span>
                    <h2>주문승인</h2>
                </li>
                <li>
                    <span></span>
                    <h2>준비완료</h2>
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
            <div>
                <span>품명</span>
                <span>단가</span>
                <span>수량</span>
                <span>합계</span>
            </div>
            <ul v-for="(c_confirms, index) of c_confirm" v-bind:key="index">
                <li> {{c_confirms[index].l_menu}} </li>
                <li> {{}} 원</li>
                <li> {{}} </li>
                <li> {{}} 원</li>
            </ul>
            <div>
                <p>총 주문 금액</p>
                <span> {{}} 원</span>
            </div>
        </div>
    </div>
</template>

<script>
const confirm = JSON.parse(localStorage.getItem('co_cart'))
export default {
    name : 'confirm-wrap',
    data() {
        return {
            s_name : '',
            co_menu : '',
            c_confirm : [],
            confirm : confirm
        }
    },
    methods: {
        
    },
    create() {
        this.c_confirm.push(confirm)
    },
    mounted() {
        console.log(confirm)
    }
}
</script>

<style scoped>
    .confirm {padding: 64px 0px 85px;}
</style>