<template>
<div>
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
    <el-tab-pane label="新歌榜" name="/new"></el-tab-pane>
    <el-tab-pane label="巅峰榜" name="/recommend"></el-tab-pane>
    <el-tab-pane label="搜索" name="/search"></el-tab-pane>
    <el-tab-pane label="我的" name="/mine"></el-tab-pane>
</el-tabs>
</div>
</template>
<style >
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
import home from '../api/home'
export default {
data() {
return {
activeName: this.$route.path,

};
},
methods: {
    handleClick(tab, event) {
    this.$router.push({path:this.activeName})
    }
}
};

</script>