import axios from "axios"
axios.defaults.baseURL=''


const home={
    // 新歌
    // https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923';
    // 推荐
    // https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472';
    // 单曲
    // https://api.bzqll.com/music/tencent/url?key=579621905&id='+songSmallMessage.songmid+'br=320'
    // 搜索
    // let val = '青花瓷'
    // https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w='+val+'&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1520833663464
    // 歌词
    // https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1494070301711&songmid="+songId+"&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8¬ice=0&platform=yqq&needNewCode=0";

    // 最新
    getnew:(fun)=>{
        let param={
            'g_tk':5381,
            'uin':0,
            'format':'json',
            'inCharset':'utf-8',
            'outCharset':'utf-8',
            'notice':0,
            'platform':'h5',
            'needNewCode':1,
            'tpl':3,
            'page':'detail',
            'type':'top',
            'topid':27,
            '_':'1519963122923'
            }
            axios.get("/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg",{params:param}).then(data=>{
                console.log("新歌列表")
                fun(data.data.songlist)
            }).catch(err => {
                console.log("出错了！")
            })
    },
    // 推荐
    getrecommend:(fun)=>{
        let param={
            'g_tk':5381,
            'uin':0,
            'format':'json',
            'inCharset':'utf-8',
            'outCharset':'utf-8',
            'notice':0,
            'platform':'h5',
            'needNewCode':1,
            'tpl':3,
            'page':'detail',
            'type':'top',
            'topid':36,
            '_':'1520777874472'
            }
            axios.get("/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg",{params:param}).then(data=>{
                console.log("推荐歌曲")
                fun(data.data.songlist)
            }).catch(err => {
                console.log("出错了！")
            })
    },
    // 搜索
    search:()=>{
        let val = '青花瓷';
        let param={
            'g_tk':5381,
            'uin':0,
            'format':'jsonp',
            'inCharset':'utf-8',
            'outCharset':'utf-8',
            'notice':0,
            'platform':'h5',
            'needNewCode':1,
            'w':val,
            'zhidaqu':1,
            'catZhida':1,
            't':0,
            'flag':1,
            'ie':'utf-8',
            'sem':1,
            'aggr':0,
            'perpage':20,
            'n':20,
            'p':1,
            'remoteplace':'txt.mqq.all',
            '_':'1520833663464'
            }
            axios.get("/api/soso/fcgi-bin/search_for_qq_cp",{params:param}).then(res=>{
                console.log("搜索结果")
                console.log(res.data);
                return res.data;
            }).catch(err => {
                console.log("出错了！")
            })
    },
    // 歌词
    gettxt:()=>{
        let songid=123;
        let param={
            'callback':'MusicJsonCallback_lrc',
            'pcachetime':1494070301711,
            'songmid':songid,
            'g_tk':5381,
            'jsonpCallback':'MusicJsonCallback_lrc',
            'loginUin':0,
            'hostUin':0,
            'format':'jsonp',
            'inCharset':'utf8',
            'outCharset':'utf-8',
            'ice':0,
            'platform':'yqq',
            'needNewCode':0
            }
            axios.get("/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg",{params:param}).then(res=>{
                console.log("歌词")
                console.log(res.data);
                return res.data;
            }).catch(err => {
                console.log("出错了！")
            })
    },
    // 我的
    getmine:()=>{


    }
}

export default home