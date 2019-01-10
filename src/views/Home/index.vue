<template>
    <div class="home_box">
        <Title title='首页'></Title>
        <Swiper :dataList='banner'></Swiper>
        <hot></hot>
    </div>
</template>

<script>
    import Title from '@/components/Title';
    import Swiper from '@/components/Swiper';
    import hot from './hot';
    export default {
        data() {
            return {
                banner:[]
            }
        },
        components:{
            Title,Swiper,hot
        },
        async created() {
            let res = await this.$store.dispatch('getBannerList')
            this.banner = res.data
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .home_box{
        margin-top:100/@r;
    }
</style>