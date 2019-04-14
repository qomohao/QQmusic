<template>
<div>
<el-card class="box-card">
    <div v-for="(item, index) in recommend_musiclist" :key="index" class="text item">
            <div class="info">
                <div v-html="trim_songname(item.data.albumname)"></div>
                <div>{{item.data.singer[0].name}}</div>
            </div>
            <div>
                <el-button type="success" plain icon="el-icon-service" circle size="mini"  v-on:click='get_songurl(item.data.songmid)'></el-button>
                <el-button type="danger" plain icon="el-icon-star-on" circle size="mini"></el-button>
                <el-button type="primary" plain icon="el-icon-share" circle size="mini"></el-button>
            </div>
        </div>
</el-card>
</div>
</template>
<style>
.el-card__body{
padding:0;
background-color:transparent;
}
.el-card__body>div{
text-align:left;
border:1px solid green;
height:8vh;
line-height:8vh;
overflow:hidden;
margin-bottom:2px;
border:1px solid #eee;
padding: 0 10px;
}
.el-card__body>div>div{
display:inline-block;
}
.el-card__body>div>div button{
margin-left:2px !important
}
.el-card__body>div>div:nth-child(1){


float:left;
}
.el-card__body>div>div:nth-child(2){
float:right;
}
.info>div:nth-child(1){
height:4vh;
line-height:5vh
}
.info>div:nth-child(2){
height:4vh;
line-height:3vh;
font-size:12px;
color:#aaa
}

</style>
<script>
import home from '../api/home'
import trimHtml from "trim-html"
export default {
    data(){
    return{
        recommend_musiclist:[]
    }
    },
    components:{
    },
     methods: {
        get_songurl(songmid){
            console.log("歌曲链接:"+songmid)
            this.$router.push({path:"/music?songmid="+songmid})
        },
         trim_songname(content) {
            let trim = trimHtml(content, {
                limit: 13,
                preserveTags: false,
                wordBreak:true
            });
        return trim.html;
      },
    },
       mounted() {
        home.getrecommend(data => {
        this.recommend_musiclist = data;
      })
    },
}

</script>