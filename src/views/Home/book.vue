<template>
    <div class="book_box">
        <img :src="item.img" alt="">
        <div>{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        props:['item']
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .book_box{
        width: 50%;
        float: left;
        img{
            width: 100%;
        }
        div{
            text-align: center;
            font-size: 30/@r;
        }
    }

</style>