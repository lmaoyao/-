<template>
    <div class="tit_box">
        {{title}}
        <!-- <slot></slot> -->
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .tit_box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:100/@r;
        background-color: #00a000;
        text-align: center;
        line-height: 100/@r;
        font-size: 50/@r;
    }

</style>