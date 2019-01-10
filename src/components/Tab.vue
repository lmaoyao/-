<template>
    <div class="tab_box">
        <router-link to="/home">
            <div class="iconfont icon-home"></div>首页
        </router-link>
        <router-link to="/list"><div class="iconfont icon-list"></div>列表页</router-link>
        <router-link to="/collect"><div class="iconfont icon-collect"></div>收藏页</router-link>
        <router-link to="/add"><div class="iconfont icon-add"></div>添加页</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
@r:75rem;
    .tab_box{
        position: fixed;
        left: 0;
        bottom: 0;
        width:100%;
        display: flex;
        align-items: center;
        border-top:1/@r solid #ccc;
        background: #fff;
        a{
            flex:1;
            color: yellowgreen;
            font-size: 40/@r;
            margin: 10/@r 0;
            div{
                font-size: 45/@r;
            }
            &.current{
                color:tomato;
            }
        }
    }
</style>