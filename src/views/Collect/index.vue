<template>
    <div>
        <Title title='收藏'></Title>
        <div class="list_wrap">
            <list v-for='(e,i) in list' :key='i' :e='e'></list>
        </div>
    </div>
</template>

<script>
    import Title from '@/components/Title';
    import list from './list';
    export default {
       components:{
           Title,list
       },
       computed:{
           list() {
               return this.$store.state.collectData
           }
       }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .list_wrap{
        margin:100/@r 0 200/@r;
    }
</style>