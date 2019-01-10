<template>
    <div class="list_box">
        <div class="img_box">
            <img :src="e.bookCover" alt="">
        </div>
        <div class="content">
            <h2>{{e.bookName}}</h2>
            <p class="desc">{{e.bookInfo}}</p>
            <div class="price">{{e.bookPrice|money}}</div>
            <div class="btn_box">
                <button @click='remove'>删除</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['e'],
        methods: {
            remove() {
                this.$store.commit('removeCollect',this.e)
            }
        }
    }
</script>
<style scoped lang='less'>
    @r:75rem;
    .list_box{
        overflow: hidden;
        display: flex;
        border: 1px solid #ccc;
        .img_box{
            width: 40%;
            height:300/@r;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .content{
            text-align: left;
            flex: 1;
            box-sizing: border-box;
            padding-left: 20/@r;
            line-height: 1.5;
            h2{
                font-size: 44/@r;
                font-weight: normal;
            }
            p,.price,.btn_box{
                font-size: 40/@r;
            }
            .price{
                color:#e00;
            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 450/@r;
            }
            .btn_box{
                button{
                    outline: none;
                    border:none;
                    border:1xp solid #ccc;
                    border-radius: 20/@r;
                    background-color: #e00;
                    color:#fff;
                    padding:10/@r 20/@r;
                    font-size: 40/@r;
                    margin-left:9/@r;
                }
            }
        }
    }
</style>