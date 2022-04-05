<template>
    <div class="order_wrap">
        <div class="search_wrap"></div>
        <div class="menu_wrap">
            <div class="menu_select">
                <ul>
                    <li v-for="(menuSelects,index) of menuSelect" v-bind:key="index">
                        {{menuSelect[index]}}
                    </li>
                </ul>
            </div>
            <div class="menu_list"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'order_',
        data() {
            return {
                menuSelect : ['커피','음료','빽스치노','주스/에이드','스무디/쉐이크','차','디저트','블랙펄']
            }
        }
    }
</script>