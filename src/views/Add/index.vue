<template>
    <div>
        <Title title='添加'></Title>
        <div class="inp_box">
            <label>书名</label>
            <input type="text" v-model="name">
            <label>书的信息</label>
            <input type="text" v-model="desc">
            <label>书的价格</label>
            <input type="text" v-model="price">
            <label>书的封面</label>
            <input type="text"  v-model="img">
            <button @click='add'>添加</button>
        </div>
    </div>
</template>

<script>
    import Title from '@/components/Title';
    export default {
       components:{
           Title
       },
       data() {
           return {
                name:'',
                desc:'',
                price:'',
                img:''
           }
       },
       methods: {
           add() {
               let obj = {
                   bookName:this.name,
                   bookInfo:this.desc,
                   bookPrice:this.price-0,
                   bookCover:this.img,
                   bookId:new Date().getTime()
               }
               this.$store.commit('addBook',obj)
               this.$router.push('/list')
               this.name = this.desc = this.price = this.img = ''
           }
       }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .inp_box{
        margin:100/@r 0 200/@r;
        text-align: center;
        &>*{
            display: block;
            font-size: 50/@r;
            margin: 30/@r auto;
        }
        input{
            line-height: 90/@r;
            outline: none;
            border:1px solid #888;
            padding-left:34/@r;
        }
        button{
            padding:40/@r 80/@r;
            background-color: palegreen;
            border-radius: 20/@r;
            outline: none;
        }
    }
</style>