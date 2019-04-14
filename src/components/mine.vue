<template>
<div class="mine">
<p>主题切换</p>
<el-row class="colorStyle">
<el-col :span="6"><div class="grid-content red" v-on:click="change_colorStyle('red')"></div></el-col>
<el-col :span="6"><div class="grid-content orange" v-on:click="change_colorStyle('orange')"></div></el-col>
<el-col :span="6"><div class="grid-content green" v-on:click="change_colorStyle('green')"></div></el-col>
<el-col :span="6"><div class="grid-content blue" v-on:click="change_colorStyle('blue')"></div></el-col>
<el-col :span="6">中国红</el-col>
<el-col :span="6">热橙红</el-col>
<el-col :span="6">清新绿</el-col>
<el-col :span="6">忧郁蓝</el-col>
</el-row>
</div>
</template>
<style scope>
.mine{
text-align:left;
}
p{
margin:8px 0;
padding-left:10px;
}


.colorStyle .el-col{
color:#aaa !important;
text-align:center;
}
.colorStyle .el-col >div{
width:6vh;
height:6vh;
line-height:6vh;
border-radius: 50%;
margin:auto;
}
.red{
background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
}
.orange{
background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.green{
background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.blue{
background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}
</style>
<script>
export default {
data(){
return{}
},
components:{
},
methods: {
    change_colorStyle(style){
        console.log(style);
        this.colorStyle=style;
    }
},
}

</script>