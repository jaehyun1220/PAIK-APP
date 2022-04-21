<template>
    <div class="confirm">
        {{ co_menu }}
    </div>
</template>

<script>

export default {
    name : 'confirm-wrap',
    data() {
        return {
            s_name : '',
            co_menu : '',
        }
    },
    methods: {
        
    },
    beforeMount() {
        const confirm = JSON.parse(localStorage.getItem('co_cart'))
        console.log('data',confirm)
        this.co_menu = confirm[0].l_menu
    }
}
</script>

<style scoped>
    .confirm {padding: 64px 0px 85px;}
</style>