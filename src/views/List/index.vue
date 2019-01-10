<template>
    <div>
        <Title title='列表'></Title>
        <div class="list_wrap">
            <list v-for='(e,i) in listArr' :key='i' :e='e'></list>
        </div>
    </div>
</template>
<script>
    import list from './list';
    import Title from '@/components/Title';
    export default {
       components:{
           Title,list
       },
       created() {
           this.$store.dispatch("getListData")
       },
       computed:{
           listArr() {
               return this.$store.state.listData
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