<template>
    <hooper id="hooper" :infiniteScroll="true" :autoPlay="true" :playSpeed="2000">
        <slide>
            <img src="../../assets/image/slide_01.jpg" alt="slide">
        </slide>
        <slide>
            <img src="../../assets/image/slide_02.jpg" alt="slide">
        </slide>
        <slide>
            <img src="../../assets/image/slide_03.jpg" alt="slide">
        </slide>
        <slide>
            <img src="../../assets/image/slide_04.jpg" alt="slide">
        </slide>
        <slide>
            <img src="../../assets/image/slide_05.jpg" alt="slide">
        </slide>
    </hooper>
</template>

<script>
import 'hooper/dist/hooper.css';
import { Hooper, Slide } from 'hooper';

export default {
    name: 'slide-wrap',
    components: {
        Hooper,
        Slide
    },
    data() {
    return {
    };
  }
};
</script>

<style scoped>
    #hooper {min-height: 390px; overflow-y: hidden;}
    #hooper img {width: 100%;}
</style>