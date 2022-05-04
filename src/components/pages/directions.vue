<template>
    <div class="k_wrap">
        <div class="loading_comp" v-if="loading">
            <BounceLoader :loading="loading"></BounceLoader>
        </div>
        <div class="k_map">
            <div class="button-group">
                <button class="first" v-on:click="displayMarker(markerPositions2)">매장찾기</button>
                <button class="second">홈으로</button>
            </div>
            <div class="kakaomap">
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
export default {
    name: 'directions_component',
    components : {
        BounceLoader
    },
    data () {
        return {
            loading : true,
            markerPositions2: [37.504339476734586, 127.02309989187425],
            markers: [],
            infowindow: null,
        }
    },
    methods: {
        initMap() {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5,
        };
        this.map = new kakao.maps.Map(container, options);
        },
        
        displayMarker(markerPositions) {
            if (this.markers.length > 0) {
                this.markers.forEach((marker) => marker.setMap(null));
            }

            const positions = markerPositions.map(
                (position) => new kakao.maps.LatLng(...position)
            );

            if (positions.length > 0) {
                this.markers = positions.map(
                (position) =>
                    new kakao.maps.Marker({
                    map: this.map,
                    position,
                    })
                );

                const bounds = positions.reduce(
                (bounds, latlng) => bounds.extend(latlng),
                new kakao.maps.LatLngBounds()
                );

                this.map.setBounds(bounds);
            }
        },
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6ab71ef76e77aabf7f02913b7bc13b78';
            document.head.appendChild(script);
        }
        setTimeout (()=>{this.loading = !this.loading},1000);
    },
}
</script>

<style scoped>
    /* map */
        #map {height: 100%; border-radius: 3px 3px 0 0;}
        .loading_comp {position: fixed; width: 100%; height: 100vh; background-color: rgba(255, 255, 255, 1); top: 0; left: 0; z-index: 100;}
            .v-spinner {position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }

        .k_wrap {height: calc(100vh - 170px); display: flex; justify-content: center; align-items: center; padding: 75px 12px 85px 12px;}
            .k_map {width: 100%; height: 100%;  background-color: #fff; border-radius: 10px 10px 0 0; box-shadow: 0px 5px 15px rgba(0, 0, 0, .15);}
                button {border: none; width: 50%; padding: 10px 0;}
                    .first {background-color: #003da7; border-radius: 10px 0 0 0; color: #fff;}
                    .second {background-color: #f2f2f2; border-radius: 0 10px 0 0; color: #003da7;}
                .kakaomap {height: calc(100% - 65px); padding: 12px;}

</style>