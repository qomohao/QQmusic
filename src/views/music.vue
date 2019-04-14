<template>
    <div>
     <audio :src="this.songUrl" controls autoplay id="myaudio"></audio>
        <!--<div class="header qwe"></div>
        <div class="content qwe"></div>
        <div class="footer qwe"></div>
        -->
    </div>
</template>
<style scope>

.qwe{
    border:1px solid red;
}
.header{
    height:10vh;
}
.content{
    height:70vh;
}
.footer{
    height:10vh;
}
#myaudio{
    height:20vh;
    border:1px solid red;
    background-color:orange
}
</style>

<script>
export default {
    data(){
        return{
            songUrl:''
        }
    },
    mounted() {
         this.songUrl='https://api.bzqll.com/music/tencent/url?key=579621905&id='+this.$route.query.songmid+'br=320'
        console.log( this.songUrl)
    },
}
</script>