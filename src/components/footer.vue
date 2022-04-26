<template>
    <div class="footer">
        <ul>
            <li v-on:click="ing">
                <img src="../assets/image/menu_01.png" alt="nav_menu">
                <span>스탬프</span>
            </li>
            <li v-on:click="ing">
                <img src="../assets/image/menu_02.png" alt="nav_menu">
                <span>마이쿠폰</span>
            </li>
            <li v-on:click="ing">
                <img src="../assets/image/menu_03.png" alt="nav_menu">
                <span>교환권</span>
            </li>
            <li v-on:click="ing">
                <img src="../assets/image/menu_04.png" alt="nav_menu">
                <span>금액권</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'footer_component',
    data() {
        return {

        }
    },
    methods : {
        ing() {
            alert('준비중입니다.');
            return false
        }
    }
}
</script>

<style scoped>
    .footer {position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 500px; box-shadow: 0px -5px 15px rgba(0, 0, 0, .075); border-radius: 15px 15px 0 0; background-color: #fff; z-index: 1;}
        ul {display: flex; justify-content: space-around; align-items: center; padding: 12px;}
        ul > li {display: flex; flex-direction: column; align-items: center; justify-content: center;}
        ul > li > img {transform: scale(.75); height: 45px;}
        ul > li > span {font-size: .85em; color: #333;}
</style>