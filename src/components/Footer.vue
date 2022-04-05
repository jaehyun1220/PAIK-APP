<template>
    <div class="footer">
        <ul>
            <li>
                <a href="#">
                    <img src="../assets/image/menu_01.png" alt="nav_menu">
                    <span>스탬프</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/image/menu_02.png" alt="nav_menu">
                    <span>마이쿠폰</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/image/menu_03.png" alt="nav_menu">
                    <span>교환권</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/image/menu_04.png" alt="nav_menu">
                    <span>금액권</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'footer_',
}
</script>

<style scoped>
    .footer {position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 500px; box-shadow: 0px -5px 15px rgba(0, 0, 0, .075); border-radius: 15px 15px 0 0; background-color: #fff; z-index: 1;}
        .footer > ul {display: flex; justify-content: space-around; align-items: center; padding: 12px;}
        .footer > ul > li > a {display: flex; flex-direction: column; align-items: center; justify-content: center;}
        .footer > ul > li > a > img {transform: scale(.75); height: 45px;}
        .footer > ul > li > a > span {font-size: .85em; color: #333;}
</style>