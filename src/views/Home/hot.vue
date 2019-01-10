<template>
    <div class="hot_box">
        <h2>热门图书</h2>
        <div class="book_box">
            <book v-for='(e,i) in bookList' :key='i' :item='e'></book>
        </div>
    </div>
</template>

<script>
    import book from './book';
    export default {
        data() {
            return {
                bookList:[]
            }
        },
        components:{
            book
        },
        async created() {
            let res = await this.$store.dispatch('getBookList')
            this.bookList = res.data
        },
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .hot_box{
        overflow: hidden;
        margin-bottom: 200/@r;
        h2{
            text-align: left;
            height:80/@r;
            line-height: 80/@r;
            box-sizing: border-box;
            padding:0 10/@r;
        }
    }
</style>