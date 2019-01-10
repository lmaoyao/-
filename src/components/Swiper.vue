<template>
    <div class="swiper_box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(e, i) in dataList' :key='i'>
                    <img :src="e.img" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        mounted() {
            if(this.dataList.length) {
                this.swiperInit()
            }
        },
        updated() {
            if(this.dataList.length) {
                this.swiperInit()
            }
        },
        props:['dataList'],
        methods: {
            swiperInit() {
                new Swiper('.swiper-container', {
                    loop : true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .swiper_box{
        height: 300/@r;
        background-color: #ccc;
        .swiper-container{
            height: 100%;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }


</style>