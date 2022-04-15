<template>
    <div class="login">
        <div class="l_logo">
            <img src="../assets/image/logo_login.png" alt="login_logo">
        </div>
        <div class="l_tit">
            <h1><strong>빽다방에</strong> <br> 오신 것을 환영합니다</h1>
        </div>
        <div class="l_form">
            <div class="f_input">
                <input type="text" placeholder="아이디" v-model="id">
                <input type="password" placeholder="비밀번호" v-model="pw" v-on:keyup.enter="login">
            </div>
            <input type="checkbox" id="id_save" checked>
            <label for="id_save">아이디 저장</label>
            <button type="button" class="btn paik_01" v-on:click='login'>로그인</button>
        </div>
    </div>
</template>

<script>
localStorage.setItem('id','admin');
localStorage.setItem('pw','1234');

const id = localStorage.getItem('id');
const pw = localStorage.getItem('pw');

export default {
    name: 'login_component',
    data () {
        return {
            id : '',
            pw : '',
        }
    },
    methods : {
        login() {
            if (this.id === id && this.pw === pw) {
                this.$emit('loginEvent', this.id, this.pw);
                localStorage.setItem('logged in','success');
            } else {
                alert('아이디 또는 비밀번호를 확인해주세요');
            }
        }
    },
    created() {
        const login = localStorage.getItem('logged in');
        if (login === 'success') {
            this.$emit('loginEventAuto');
        }
    }
}
</script>

<style scoped>
    .login {width: 100%;}
        .l_logo {text-align: center;}

        .l_tit {padding: 30px 0;}
        .l_tit > h1 {color: #003da7; text-align: center; font-size: 1.5em; line-height: 1.5;}
        .l_tit > h1 > strong {font-weight: bold; font-size: 1em;}

        .l_form {padding:0 20px;}
        .l_form > input[type="checkbox"] {display: block; width: 0; height: 0; padding: 0; margin: -1px;}
        .l_form > input[type="checkbox"] + label {position: relative; padding-left: 20px;}
        .l_form > input[type="checkbox"] + label::before {content:''; position: absolute; width: 15px; height: 15px; border: 1px solid #e2e2e2; top: 50%; left: 0; transform: translateY(-50%);}
        .l_form > input[type="checkbox"]:checked + label::before {content:'\2714'; background-color: #003da7; border: 1px solid #003da7; color: #fff; font-weight: 100; font-size: .75em; text-align: center;}
        .l_form > button {display: block; width: 100%; background-color: #003da7; color: #fff; padding: 7px 0; border: none; margin: 10px 0;}

            .f_input {display: flex; flex-direction: column; align-items: center; justify-content: center;}
            .f_input > input {border: 1px solid #e2e2e2; background-color: #fff; padding:10px; width: calc(100% - 20px); margin-bottom: 10px;}
</style>