
//组件注册
const basess = Vue.component('my-component1', {
    //组件注册——基础部分
    template: "#model_pic",
    data() {
        return {
            h3name: '基础内容',
            basessarr: [
                { 'title': '百度一下', 'desc': '百度一下', 'url': 'https://www.baidu.com', 'src': './images/navlogo/base/baidulogo.png' },
                { 'title': '校园网', 'desc': '校园网登录认证', 'url': 'http://219.222.95.38/', 'src': './images/navlogo/school/xiaoyuanwang.png' },
                { 'title': '学习通', 'desc': '学习通登录页面', 'url': 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a', 'src': './images/navlogo/school/xuexitong.png' },
                { 'title': '在线翻译', 'desc': '有道在线翻译', 'url': 'https://fanyi.youdao.com/index.html#/', 'src': './images/navlogo/base/youdao.png' },
                { 'title': 'localhost', 'desc': 'localhost服务器虚拟目录', 'url': 'http://localhost/aaa/', 'src': './images/navlogo/base/localhost.png' },
                { 'title': '远程导航预览', 'desc': '远程导航预览', 'url': 'https://htmlpreview.github.io/?https://mm-and-my.github.io/Navigation/', 'src': './images/navlogo/base/github.png' },
                { 'title': '远程导航', 'desc': '远程导航', 'url': 'https://mm-and-my.github.io/Navigation/', 'src': './images/navlogo/base/github.png' },
                { 'title': '百度网盘', 'desc': '百度网盘', 'url': 'https://pan.baidu.com/', 'src': './images/navlogo/base/baiduwangpan.png' },
                { 'title': '阿里云盘', 'desc': '阿里云盘', 'url': 'https://www.aliyundrive.com/', 'src': './images/navlogo/base/aliyunpan.png' },
                { 'title': 'qq邮箱', 'desc': 'qq邮箱', 'url': 'https://mail.qq.com/', 'src': './images/navlogo/base/qqemail.png' },
                { 'title': '163邮箱', 'desc': '163邮箱', 'url': 'https://mail.163.com/', 'src': './images/navlogo/base/163email.png' },
                { 'title': 'Google gmail', 'desc': 'Google邮箱', 'url': 'https://mail.google.com/', 'src': './images/navlogo/base/googleemail.png' },
                { 'title': '知乎', 'desc': '知乎', 'url': 'https://www.zhihu.com/', 'src': './images/navlogo/base/zhihu.png' },
                { 'title': '百度贴吧', 'desc': '百度贴吧', 'url': 'https://tieba.baidu.com/', 'src': './images/navlogo/base/baidutieba.png' },
                { 'title': '百度文库', 'desc': '百度文库', 'url': 'https://wenku.baidu.com/', 'src': './images/navlogo/base/baiduwenku.png' },
                { 'title': '知网', 'desc': '知网', 'url': 'https://www.cnki.net/', 'src': './images/navlogo/base/zhiwang.png' },
                { 'title': 'bilibili', 'desc': 'bilibili', 'url': 'https://www.bilibili.com/', 'src': './images/navlogo/base/bilibili.png' },
                { 'title': '樱花动漫', 'desc': '樱花动漫(动漫)', 'url': 'http://www.yinghuacd.com/', 'src': './images/navlogo/base/yinghua.png' },
                { 'title': '网易云音乐', 'desc': '网易云音乐', 'url': 'https://music.163.com/', 'src': './images/navlogo/base/wymusic.png' },
                { 'title': 'QQ音乐', 'desc': 'QQ音乐', 'url': 'https://y.qq.com/', 'src': './images/navlogo/base/qqmusic.png' },
                { 'title': '新浪微博', 'desc': '新浪微博', 'url': 'https://www.sina.com.cn/', 'src': './images/navlogo/base/xinliang.png' },
                { 'title': '百度脑图', 'desc': '百度脑图', 'url': 'https://naotu.baidu.com/', 'src': './images/navlogo/base/baidunaotu.png' },
                { 'title': '思维导图', 'desc': '思维导图', 'url': 'https://boardmix.cn/mindmapping/?channel=bd&utm_source=baidu&utm_medium=ocpc&utm_term=mindmap&_channel_track_key=tWzZt0X0&bd_vid=11901531421781939060', 'src': './images/navlogo/base/siweidaotu.png' },
                { 'title': '原神', 'desc': '原神官网', 'url': 'https://ys.mihoyo.com/', 'src': './images/navlogo/base/genshin.png' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/base/.png' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-jichu3'
        }
    },
    // 绑定函数
    methods: {

    },
    //过滤器
    filters: {

    },
    //计算属性
    computed: {

    }
}
);
const school = Vue.component('my-component2', {
    //组件注册——学校部分
    template: "#model_pic",
    data() {
        return {
            h3name: '学校部分',
            basessarr: [
                { 'title': '学信网', 'desc': '学信网平台', 'url': 'https://www.chsi.com.cn/', 'src': './images/navlogo/school/xuexinwang.png' },
                { 'title': '学校官网', 'desc': '广东机电职业技术学院', 'url': 'https://www.gdmec.edu.cn/', 'src': './images/navlogo/school/gdmec.png' },
                { 'title': '校园网', 'desc': '校园网登录认证', 'url': 'http://219.222.95.38/', 'src': './images/navlogo/school/xiaoyuanwang.png' },
                { 'title': '学习通', 'desc': '学习通登录页面', 'url': 'https://passport2.chaoxing.com/login?fid=&refer=https://www.baidu.com/link?url=F_xhYvkO1xq5gEa8-z6KzE-X8ykdW1O3KI2uDG_OmmbyhNnoLCFgzvTRI97jqfVO&wd=&eqid=9dbd3d080013bc360000000664512c0a', 'src': './images/navlogo/school/xuexitong.png' },
                { 'title': '5y平台', 'desc': '5y平台校内', 'url': 'http://192.168.153.230:800/', 'src': './images/navlogo/school/5y.png' },
                { 'title': '5y平台', 'desc': '5y平台校外', 'url': 'http://58.248.104.83:800/', 'src': './images/navlogo/school/5y.png' },
                { 'title': '计算机报考', 'desc': '计算机证书报考平台CCT', 'url': 'http://gdoa.scnu.edu.cn/bm', 'src': './images/navlogo/school/zaixianbaokaopingtai.png' },
                { 'title': '计算机查询', 'desc': '计算机证书查询平台CCT', 'url': 'http://bz.ykoa.net/', 'src': './images/navlogo/school/cctchaxun.png' },
                { 'title': '普法网', 'desc': '全国青少年普法网', 'url': 'https://qspfw.moe.gov.cn/', 'src': './images/navlogo/school/qingshaonianpufawang.png' },
                { 'title': '易班', 'desc': '易班', 'url': 'https://www.yiban.cn/', 'src': './images/navlogo/school/yiban.png' },
                // { 'title': 'java云', 'desc': 'java云服务器', 'url': '124.223.44.7', 'src': './images/navlogo/school/moren.png' },
                { 'title': '易展翅', 'desc': '易展翅', 'url': 'https://www.izhanchi.com/', 'src': './images/navlogo/school/yizhanchi.png' },
                { 'title': '智慧职教', 'desc': '智慧职教', 'url': 'https://www.icve.com.cn/portal_new/portal/portal.html', 'src': './images/navlogo/school/zhihuizhijiao.png' },
                { 'title': '创业服务网', 'desc': '全国大学生创业服务网', 'url': 'https://cy.ncss.cn/', 'src': './images/navlogo/school/quanguodaxueshengchuangyefuwuwang.png' },
                { 'title': '职业规划大赛', 'desc': '全国大学生职业规划大赛网', 'url': 'https://zgs.chsi.com.cn/home', 'src': './images/navlogo/school/quanguodaxueshengzhiyeguihuadasai.png' },
                { 'title': 'VPN', 'desc': 'VPN登录页面', 'url': 'https://webvpn.gdmec.edu.cn/frontend_static/frontend/login/index.html#/login', 'src': './images/navlogo/school/vpn.png' },
                { 'title': '达梦理论考试', 'desc': '250230061000000000000050-843041', 'url': 'https://xcx.dameng.com:9999/Exam_System/login.html', 'src': './images/navlogo/school/dameng.png' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/school/.png' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-xuexiao'
        }
    }
}
);
const material = Vue.component('my-component3', {
    //组件注册——素材部分
    template: "#model_pic",
    data() {
        return {
            h3name: '素材网站',
            basessarr: [
                { 'title': 'Hello算法', 'desc': 'Hello算法在线阅读', 'url': 'https://github.com/krahets/hello-algo', 'src': './images/navlogo/material/github.png' },
                { 'title': 'PHP文档', 'desc': 'PHP中文文档', 'url': 'https://learnku.com/docs/laravel/9.x', 'src': './images/navlogo/material/laravel.png' },
                { 'title': 'Bootstrap文档', 'desc': 'Bootstrap文档', 'url': 'https://v4.bootcss.com/docs/getting-started/introduction/', 'src': './images/navlogo/material/bootstrap.png' },
                { 'title': 'CSS菜鸟样式', 'desc': 'CSS菜鸟样式查询', 'url': 'https://www.runoob.com/cssref/css-selectors.html', 'src': './images/navlogo/material/cainiao.png' },
                { 'title': 'CSDN', 'desc': 'CSDN代码网站', 'url': 'https://www.csdn.net/', 'src': './images/navlogo/material/csdn.png' },
                { 'title': 'w3school', 'desc': 'w3school代码学习', 'url': 'https://www.w3school.com.cn/', 'src': './images/navlogo/material/w3school.png' },
                { 'title': 'github', 'desc': 'github官网', 'url': 'https://github.com/', 'src': './images/navlogo/material/github.png' },
                { 'title': '矢量图标库', 'desc': '阿里矢量图标库', 'url': 'https://www.iconfont.cn/', 'src': './images/navlogo/material/alitubiao.png' },
                { 'title': 'jQuery', 'desc': 'jQuery文件官网', 'url': 'https://jquery.com/', 'src': './images/navlogo/material/jquery.png' },
                { 'title': 'vue', 'desc': 'vue文件官网', 'url': 'https://cn.vuejs.org/', 'src': './images/navlogo/material/vue.png' },
                { 'title': 'gitee', 'desc': 'gitee官网', 'url': 'https://gitee.com/', 'src': './images/navlogo/material/gitee.png' },
                { 'title': 'json解析', 'desc': 'json解析网站', 'url': 'https://www.json.cn/', 'src': './images/navlogo/material/json.png' },
                { 'title': '阿里镜像站', 'desc': '虚拟机光盘镜像文件下载', 'url': 'https://developer.aliyun.com/mirror/', 'src': './images/navlogo/material/aliyunjingxiang.png' },
                { 'title': '华为镜像站', 'desc': '虚拟机光盘镜像文件下载', 'url': 'https://mirrors.huaweicloud.com/home', 'src': './images/navlogo/material/huaweijingxiang.png' },

                { 'title': 'bootstrap', 'desc': 'bootstrap文件网站', 'url': 'https://getbootstrap.com/', 'src': './images/navlogo/material/bootstrap.png' },
                { 'title': '韩API', 'desc': '韩FREE API', 'url': 'https://api.vvhan.com/', 'src': './images/navlogo/material/han.png' },
                { 'title': '屏幕尺寸', 'desc': '', 'url': 'https://uiiiuiii.com/screen/index.htm', 'src': './images/navlogo/material/moren.png' },
                { 'title': 'IP计算', 'desc': 'IP地址计算器', 'url': 'https://ipv4calc.bmcx.com/', 'src': './images/navlogo/material/ip.png' },
                { 'title': 'jQuery插件', 'desc': 'jQuery插件库', 'url': 'https://www.jq22.com/', 'src': './images/navlogo/material/jquerychajian.png' },
                { 'title': 'jQuery之家', 'desc': 'jQuery之家', 'url': 'http://www.htmleaf.com/', 'src': './images/navlogo/material/jqueryzhijia.png' },
                { 'title': 'iconpark', 'desc': 'iconpark图标', 'url': 'https://iconpark.oceanengine.com/official', 'src': './images/navlogo/material/iconpark.png' },
                { 'title': '优波', 'desc': '优波', 'url': 'https://www.ubuuk.com/', 'src': './images/navlogo/material/youbo.png' },
                { 'title': '传智教育', 'desc': '传智教育官网', 'url': 'https://stu.ityxb.com/', 'src': './images/navlogo/material/chuangzhijiaoyu.png' },
                { 'title': '文旌课堂', 'desc': '文旌课堂官网', 'url': 'https://www.wenjingketang.com/', 'src': './images/navlogo/material/wenshuketang.png' },
                { 'title': '人邮教育', 'desc': '人邮教育官网', 'url': 'https://www.ryjiaoyu.com/', 'src': './images/navlogo/material/renyoujiaoyu.png' },
                { 'title': '蓝桥云课', 'desc': '蓝桥云课官网', 'url': 'https://www.lanqiao.cn/courses/10532', 'src': './images/navlogo/material/lanqiao.png' },
                { 'title': '腾讯全端', 'desc': '腾讯全端官网', 'url': 'http://www.alloyteam.com/', 'src': './images/navlogo/material/tengxunquanduan.png' },
                { 'title': 'Java全栈', 'desc': 'Java 全栈知识体系', 'url': 'https://www.pdai.tech/', 'src': './images/navlogo/material/javaquanzhan.png' },
                { 'title': 'tooool', 'desc': 'tooool(魔法)', 'url': 'http://tooool.org/', 'src': './images/navlogo/material/moren.png' },
                { 'title': 'javascript', 'desc': 'javascript学习网', 'url': 'https://javascript.info/', 'src': './images/navlogo/material/moren.png' },
                { 'title': '更多java', 'desc': '更多介绍java', 'url': 'https://blog.csdn.net/Ed7zgeE9X/article/details/123491916', 'src': './images/navlogo/material/csdn.png' },
                { 'title': '开源小游戏', 'desc': '开源小游戏', 'url': 'https://www.zhihu.com/tardis/sogou/art/563421207', 'src': './images/navlogo/material/zhihu.png' },
                { 'title': 'loading', 'desc': 'loading动画', 'url': 'https://epic-spinners.epicmax.co/', 'src': './images/navlogo/material/loading.png' },
                { 'title': 'eleui', 'desc': 'eleui(收费)前端元素', 'url': 'https://eleui.cn/', 'src': './images/navlogo/material/qianduanyuansu.png' },
                { 'title': 'js压缩', 'desc': 'js压缩网站', 'url': 'https://tool.oschina.net/jscompress/', 'src': './images/navlogo/material/moren.png' },
                { 'title': 'toastr', 'desc': '轻量级的消息提示插件介绍', 'url': '', 'src': './images/navlogo/material/csdn.png' }, 
                { 'title': 'toastr在线', 'desc': 'jquery通知插件toastr在线调式', 'url': 'https://www.jq22.com/yanshi476', 'src': './images/navlogo/material/jquerychajian.png' }, 
                { 'title': 'ueditor', 'desc': '模拟富文本编辑器插件地址一', 'url': 'https://github.com/fex-team/ueditor', 'src': './images/navlogo/material/github.png' }, 
                { 'title': 'ueditor', 'desc': '模拟富文本编辑器插件地址二', 'url': 'https://gitee.com/ximury/ueditor/', 'src': './images/navlogo/material/gitee.png' }, 
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/material/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-sucaiku'
        }
    }
}
);
const download = Vue.component('my-component4', {
    //组件注册——下载部分
    template: "#model_pic",
    data() {
        return {
            h3name: '软件下载',
            basessarr: [
                { 'title': '微信', 'desc': '微信聊天工具', 'url': 'https://pc.weixin.qq.com/', 'src': './images/navlogo/applydownload/wechat.png' },
                { 'title': 'qq', 'desc': 'QQ微信聊天工具', 'url': 'https://im.qq.com/pcqq/', 'src': './images/navlogo/applydownload/qq.png' },
                { 'title': '企业微信', 'desc': '企业微信聊天工具', 'url': 'https://work.weixin.qq.com/', 'src': './images/navlogo/applydownload/qiyewechat.png' },
                { 'title': '腾讯会议', 'desc': '会议软件', 'url': 'https://meeting.tencent.com/', 'src': './images/navlogo/applydownload/tenxunhuiyi.png' },
                { 'title': '钉钉', 'desc': '会议软件', 'url': 'https://www.dingtalk.com/', 'src': './images/navlogo/applydownload/dindin.png' },
                { 'title': '迅雷', 'desc': '迅雷下载软件', 'url': 'https://www.xunlei.com/', 'src': './images/navlogo/applydownload/xunlei.png' },
                { 'title': 'chrome', 'desc': '谷歌浏览器', 'url': 'https://www.google.cn/chrome/', 'src': './images/navlogo/applydownload/chrome.png' },
                { 'title': 'firefox', 'desc': '火狐浏览器', 'url': 'http://www.firefox.com.cn/', 'src': './images/navlogo/applydownload/firefox.png' },
                { 'title': '搜狗浏览器', 'desc': '浏览器', 'url': 'https://ie.sogou.com/', 'src': './images/navlogo/applydownload/sougou.png' },
                { 'title': 'VScode', 'desc': '编辑器', 'url': 'https://code.visualstudio.com/', 'src': './images/navlogo/applydownload/vscode.png' },
                { 'title': 'HbuilderX', 'desc': '编辑器', 'url': 'https://www.dcloud.io/hbuilderx.html', 'src': './images/navlogo/applydownload/hubilder.png' },
                { 'title': 'DEV C++', 'desc': 'c++编辑器', 'url': 'https://sourceforge.net/projects/orwelldevcpp/?source=directory', 'src': './images/navlogo/applydownload/devcc.png' },
                { 'title': 'node官网', 'desc': 'node官网', 'url': 'http://nodejs.cn/download/', 'src': './images/navlogo/applydownload/node.png' },
                { 'title': 'npm官网', 'desc': 'npm官网', 'url': 'https://www.npmjs.cn/', 'src': './images/navlogo/applydownload/npm.png' },
                { 'title': 'PyCharm', 'desc': 'Python编辑软件', 'url': 'https://www.jetbrains.com/pycharm/download/?section=windows', 'src': './images/navlogo/applydownload/py.png' },
                { 'title': 'PXcook', 'desc': '图片裁剪', 'url': 'https://www.fancynode.com.cn/pxcook', 'src': './images/navlogo/applydownload/pxcook.png' },
                { 'title': 'todesk', 'desc': '远程控制软件', 'url': 'https://www.todesk.com/', 'src': './images/navlogo/applydownload/todesk.png' },
                { 'title': 'bandzip', 'desc': '压缩软件', 'url': 'http://king.mydown.com//tianji/child/f362.html?sfrom=166&TFT=1&DTS=1&keyID=73573', 'src': './images/navlogo/applydownload/bandizip.png' },
                { 'title': '7z', 'desc': '压缩软件', 'url': 'https://7-zip.org/', 'src': './images/navlogo/applydownload/7zip.png' },
                { 'title': 'Winrar', 'desc': '压缩软件', 'url': 'https://zip.njzhqlkj.cn/Zips_v1/index.html?keywordid=644642649557&planid=343618906&bd_vid=9633232078741270563', 'src': './images/navlogo/applydownload/winrar.png' },
                { 'title': '火绒', 'desc': '杀毒软件', 'url': 'https://www.huorong.cn/', 'src': './images/navlogo/applydownload/huorong.png' },
                { 'title': '搜狗输入法', 'desc': '输入法', 'url': 'https://shurufa.sogou.com/', 'src': './images/navlogo/applydownload/sougoufont.png' },
                { 'title': '键盘驱动', 'desc': '87键键盘驱动', 'url': 'http://www.ygwaishe.com', 'src': './images/navlogo/applydownload/jianpanqudong.png' },
                { 'title': 'git官网', 'desc': 'git官网,用于上传项目', 'url': 'https://git-scm.com/', 'src': './images/navlogo/applydownload/git.png' },
                { 'title': 'jetbrains官网', 'desc': 'jetbrains全家桶下载', 'url': 'https://www.jetbrains.com.cn/products/', 'src': './images/navlogo/applydownload/jetbrains.png' },
                { 'title': 'FinalShell', 'desc': 'finalshell', 'url': 'https://www.hostbuf.com/t/988.html', 'src': './images/navlogo/applydownload/finalsell.png' },
                { 'title': 'vmware', 'desc': '虚拟机', 'url': 'https://www.vmware.com/cn/products/workstation-pro.html', 'src': './images/navlogo/applydownload/vmware.png' },
                { 'title': 'viewer', 'desc': '达梦实操考试', 'url': 'https://www.realvnc.com/en/connect/download/viewer/', 'src': './images/navlogo/applydownload/vnc.png' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/applydownload/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: ' iconfont icon-xiazai'
        }
    }
}
);
const item = Vue.component('my-component6', {
    //组件注册——项目代码部分
    template: "#item",
    data() {
        return {
            h3name: '代码项目',
            basessarr: [
                { 'title': 'HTML+CSS', 'desc': '使用HTML+css制作的基础前端网站', 'url': '/item/htmlcss', 'src': './images/navlogo/item/htmlcss.png' },
                { 'title': 'JavaScript', 'desc': '使用JavaScript制作的基本网站', 'url': '/item/javascript', 'src': './images/navlogo/item/javascript.png' },
                { 'title': 'Vue', 'desc': '使用vue框架制作的网站', 'url': '/item/vue', 'src': './images/navlogo/item/vue.png' },
                { 'title': 'BootStrap', 'desc': '响应式网站', 'url': '/item/bootstrap', 'src': './images/navlogo/item/bootstrap.png' },
                { 'title': 'PHP', 'desc': 'php后端，需要服务器', 'url': '/item/php', 'src': './images/navlogo/item/php.png' },
                { 'title': '编程码', 'desc': '编程码炫酷样式', 'url': '/item/open', 'src': './images/navlogo/item/open.png' },
                { 'title': 'Java', 'desc': 'java语言编译的网站', 'url': '/item/java', 'src': './images/navlogo/item/java.png' },
                { 'title': 'Mysql', 'desc': '数据库mysql相关内容', 'url': '/item/mysql', 'src': './images/navlogo/item/mysql.png' },
                { 'title': 'Linux', 'desc': 'linux系统相关内容', 'url': '/item/linux', 'src': './images/navlogo/item/linux.png' },
                { 'title': 'Medium', 'desc': '融媒相关内容(移动端)', 'url': '/item/medium', 'src': './images/navlogo/item/medium.png' },
                { 'title': 'Else', 'desc': '其他网页内容', 'url': '/item/else', 'src': './images/navlogo/item/else.png' },
            ],
            // 图标跳转路径
            tiaozhuangzhuye: './',
            // 图标
            iconfont: ' iconfont icon-xuexi'
        }
    },
    methods: {
        textbrightfanhui() {
            // console.log('点击返回');
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const wendang = Vue.component('my-component7', {
    //组件注册——在线文档
    template: "#model_nopic",
    data() {
        return {
            h3name: '在线文档',
            basessarr: [
                { 'title': 'java文档(PDF)', 'url': './item/documentword/javascript/javascript.pdf' },
                { 'title': '网页文档(PDF)', 'url': './item/documentword/htmlcss/网页常用单词代码.pdf' },
                { 'title': 'MYSQL', 'url': './item/documentword/mysql/mySQL.htm' },
                { 'title': '达梦手册(PDF)', 'url': './item/documentword/dmdb/DM数据库实操手册（Linux版.pdf' },
                { 'title': '达梦讲义(PDF)', 'url': './item/documentword/dmdb/数据库实训课程讲义-最终版.pdf' },
                { 'title': '达梦讲义整理(PDF)', 'url': './item/documentword/dmdb/达梦数据库.pdf' },
                { 'title': '达梦考试模拟题(PDF)', 'url': './item/documentword/dmdb/练习题.pdf' },
                { 'title': '模拟题实例详细(PDF)', 'url': './item/documentword/dmdb/DM模拟题实例详细笔记.pdf' },
                { 'title': '理论练习题(PDF)', 'url': './item/documentword/dmdb/DM数据库理论练习题（Linux）(1).pdf' },
                { 'title': 'PHP(PDF)', 'url': './item/documentword/php/PHP知识点总结.pdf' },
                { 'title': 'VUE(无)', 'url': './item/documentword/vue/' },
                // { 'title': '', 'url': './item/documentword/' },

            ],
            tiaozhuang: './',
            iconfont: 'iconfont icon-shiyongwendang'
        }
    }
}
);
const elses = Vue.component('my-component8', {
    //组件注册——其他内容
    template: "#model_nopic",
    data() {
        return {
            h3name: '其他内容',
            basessarr: [
                { 'title': '党史答案', 'url': 'https://zhuanlan.zhihu.com/p/420286513?ivk_sa=1024609v' },
                { 'title': '舞台答案', 'url': 'https://zhuanlan.zhihu.com/p/578370437?utm_id=0' },
                { 'title': '大学生国家安全教育答案', 'url': 'https://m.jhq8.cn/daan/2023/04/1764306.html' },
                { 'title': '酷源码', 'url': 'http://www.kyuanma.com/' },
                { 'title': '源码之家', 'url': 'http://www.codejia.com/' },
                // { 'title': '', 'url': '' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-qita1'
        }
    }
}
);
const chatgpt = Vue.component('my-component5', {
    //组件注册——人工智能部分
    template: "#model_pic",
    data() {
        return {
            h3name: '人工智能',
            basessarr: [
                { 'title': 'AI导航', 'desc': 'AI导航', 'url': 'https://chatgpt-sites.com/', 'src': './images/navlogo/chatgpt/ai.png' },
                { 'title': 'chatGPT', 'desc': 'chatGPT(国内节点)', 'url': 'https://chatgai.lovepor.cn/', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                { 'title': 'AI写作', 'desc': 'AI写作', 'url': 'https://xiezuocat.com/?s=aigj', 'src': './images/navlogo/chatgpt/xiezuomiao.png' },
                { 'title': 'AIPPT', 'desc': 'AIPPT', 'url': 'https://design.meitu.com/ppt/?ref=ai-bot.cn', 'src': './images/navlogo/chatgpt/aippt.png' },
                { 'title': 'logo生成', 'desc': 'logo生成', 'url': 'https://www.logosc.cn/', 'src': './images/navlogo/chatgpt/logosheji.png' },
                { 'title': 'gammaPPT', 'desc': 'gammaPPT', 'url': 'https://gamma.app/', 'src': './images/navlogo/chatgpt/gamma.png' },
                { 'title': 'AI编程插件', 'desc': 'AI编程插件', 'url': 'https://sky-code.singularity-ai.com/index.html#/', 'src': './images/navlogo/chatgpt/skycode.png' },
                { 'title': 'chatGPT-4', 'desc': 'chatGPT-4(需魔法)', 'url': 'https://openai.com/product/gpt-4', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                { 'title': '更多', 'desc': '更多介绍人工', 'url': 'https://www.erweicaihong.cn/pptruanjian-xinyidai', 'src': './images/navlogo/chatgpt/chatgpt.png' },
                // { 'title': '', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/chatgpt/.png' }, 
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-rengongzhineng'
        }
    }
}
);
const game = Vue.component('my-component9', {
    //组件注册——娱乐部分
    template: "#model_pic",
    data() {
        return {
            h3name: '娱乐部分',
            basessarr: [
                { 'title': '4399', 'desc': '4399小游戏', 'url': 'https://www.4399.com/', 'src': './images/navlogo/game/4399.PNG' },
                { 'title': '原神', 'desc': '原神', 'url': 'https://ys.mihoyo.com/', 'src': './images/navlogo/game/genshin.PNG' },
                { 'title': '星穹铁道', 'desc': '星穹铁道', 'url': 'https://sr.mihoyo.com/', 'src': './images/navlogo/game/xingtie.PNG' },
                { 'title': 'UU', 'desc': 'UU加速器', 'url': 'https://uu.163.com/', 'src': './images/navlogo/game/uu.PNG' },
                { 'title': '小黑盒', 'desc': '小黑盒加速器', 'url': 'https://www.xiaoheihe.cn/home', 'src': './images/navlogo/game/xiaoheihe.PNG' },
                { 'title': 'TapTap', 'desc': 'TapTap游戏平台', 'url': 'https://www.taptap.cn/', 'src': './images/navlogo/game/taptap.PNG' },
                { 'title': 'Steam', 'desc': 'Steam游戏平台(需魔法)', 'url': 'https://store.steampowered.com/', 'src': './images/navlogo/game/steam.PNG' },
                { 'title': 'Epic', 'desc': 'Epic游戏平台(需魔法)', 'url': 'https://store.epicgames.com/zh-CN/', 'src': './images/navlogo/game/epic.PNG' },
                { 'title': 'X', 'desc': 'X社交平台(需魔法)', 'url': 'https://twitter.com/', 'src': './images/navlogo/game/x.PNG' },
                { 'title': 'Youtube', 'desc': 'Youtube社交平台(需魔法)', 'url': 'https://www.youtube.com/', 'src': './images/navlogo/game/youtube.PNG' },
                { 'title': 'VPN', 'desc': 'VPN连接工具', 'url': 'https://www.anyi555.com/#download_areax', 'src': './images/navlogo/game/vpn.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/game/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-youxiyouxiji'
        }
    }
}
);
const music = Vue.component('my-component10', {
    //组件注册——音乐网站
    template: "#model_pic",
    data() {
        return {
            h3name: '音乐网站',
            basessarr: [
                { 'title': '网易云音乐', 'desc': '暂无添加简介', 'url': 'https://music.163.com/', 'src': './images/navlogo/music/wymusic.PNG' },
                { 'title': 'QQ音乐', 'desc': '暂无添加简介', 'url': 'https://y.qq.com/', 'src': './images/navlogo/music/qqmusic.PNG' },
                { 'title': '酷狗音乐', 'desc': '暂无添加简介', 'url': 'https://www.kugou.com/', 'src': './images/navlogo/music/kgmusic.PNG' },
                { 'title': '酷我音乐', 'desc': '暂无添加简介', 'url': 'http://www.kuwo.cn/', 'src': './images/navlogo/music/kwmusic.PNG' },
                { 'title': '无损音乐吧', 'desc': '暂无添加简介', 'url': 'https://www.dtshot.com/', 'src': './images/navlogo/music/wsmusic.PNG' },
                { 'title': '站长素材', 'desc': '暂无添加简介', 'url': 'https://sc.chinaz.com/', 'src': './images/navlogo/music/sucaimusic.PNG' },
                { 'title': '爱听音乐网', 'desc': '暂无添加简介', 'url': 'http://www.2t58.com/', 'src': './images/navlogo/music/aitinmusic.PNG' },
                { 'title': '爱好歌', 'desc': '暂无添加简介', 'url': 'https://www.ihaoge.net/song?ivk_sa=1024320u', 'src': './images/navlogo/music/aihaomusic.PNG' },
                { 'title': 'MP3下载网', 'desc': '暂无添加简介', 'url': 'http://www.xxmp3.com/', 'src': './images/navlogo/music/mp3music.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/music/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-yinle1'
        }
    }
}
);
const video = Vue.component('my-component11', {
    //组件注册——视频网站
    template: "#model_pic",
    data() {
        return {
            h3name: '视频网站',
            basessarr: [
                { 'title': '腾讯视频', 'desc': '腾讯视频', 'url': 'https://v.qq.com/', 'src': './images/navlogo/video/tenxunvideo.PNG' },
                { 'title': '爱奇艺', 'desc': '爱奇艺', 'url': 'https://www.iqiyi.com/', 'src': './images/navlogo/video/aiqiyi.PNG' },
                { 'title': '优酷', 'desc': '优酷', 'url': 'https://www.youku.com/channel/webhome', 'src': './images/navlogo/video/youku.PNG' },
                { 'title': '芒果TV', 'desc': '芒果TV', 'url': 'https://www.mgtv.com/', 'src': './images/navlogo/video/mangguotv.PNG' },
                { 'title': '搜狐', 'desc': '搜狐', 'url': 'https://tv.sohu.com/', 'src': './images/navlogo/video/souhu.PNG' },
                { 'title': '樱花动漫', 'desc': '樱花动漫(动漫)', 'url': 'http://www.yinghuacd.com/', 'src': './images/navlogo/video/yinghua.PNG' },
                { 'title': '樱花影视', 'desc': '樱花动漫(影视)', 'url': 'https://www.bytpl.com/', 'src': './images/navlogo/video/yinghua.PNG' },
                { 'title': '次元街', 'desc': '次元街', 'url': 'https://www.ciyuanjie.cn/', 'src': './images/navlogo/video/ciyuanjie.PNG' },
                { 'title': '漫岛', 'desc': '漫岛', 'url': 'https://www.mddm.tv/', 'src': './images/navlogo/video/mandao.PNG' },
                { 'title': '七味网', 'desc': '七味影视网', 'url': 'https://www.pknull.com/', 'src': './images/navlogo/video/qiwei.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/video/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-shipin1'
        }
    }
}
);
const shop = Vue.component('my-component12', {
    //组件注册——购物网站
    template: "#model_pic",
    data() {
        return {
            h3name: '购物网站',
            basessarr: [
                { 'title': '拼多多', 'desc': '拼多多', 'url': 'https://www.pinduoduo.com/', 'src': './images/navlogo/shop/pdd.PNG' },
                { 'title': '淘宝', 'desc': '淘宝', 'url': 'https://www.taobao.com/', 'src': './images/navlogo/shop/taobao.PNG' },
                { 'title': '苏宁易购', 'desc': '苏宁易购', 'url': 'https://www.suning.com/', 'src': './images/navlogo/shop/suning.PNG' },
                { 'title': '京东', 'desc': '京东', 'url': 'https://www.jd.com/', 'src': './images/navlogo/shop/jingdong.PNG' },
                { 'title': '唯品会', 'desc': '唯品会', 'url': 'https://www.vip.com/', 'src': './images/navlogo/shop/weipinghui.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/shop/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-gouwuchekong'
        }
    }
}
);
const ps = Vue.component('my-component13', {
    //组件注册——ps
    template: "#model_pic",
    data() {
        return {
            h3name: '素材',
            basessarr: [
                { 'title': '矢量图标', 'desc': '矢量图标免费下载', 'url': 'https://www.onlinewebfonts.com/icon/', 'src': './images/navlogo/ps/shiliang.PNG' },
                { 'title': 'png元素', 'desc': 'png元素下载', 'url': 'http://3png.com/', 'src': './images/navlogo/ps/pngyuansu.PNG' },
                { 'title': '素材图片', 'desc': '图片搜索', 'url': 'https://www.pexels.com/zh-cn/', 'src': './images/navlogo/ps/seach.PNG' },
                { 'title': 'domainarchive', 'desc': '素材图片', 'url': 'https://publicdomainarchive.com/', 'src': './images/navlogo/ps/1.PNG' },
                { 'title': 'yestone', 'desc': '图片搜索', 'url': 'https://www.yestone.com/', 'src': './images/navlogo/ps/yest.PNG' },
                { 'title': '微软图片搜索', 'desc': '图片搜索', 'url': 'https://cn.bing.com/images/trending', 'src': './images/navlogo/ps/weiruan.PNG' },
                { 'title': '中国色彩', 'desc': '中国色彩配色网站', 'url': 'http://zhongguose.com/', 'src': './images/navlogo/ps/chinesesecai.PNG' },
                { 'title': '优设', 'desc': '色彩配色网站', 'url': 'https://hao.uisdc.com/color/', 'src': './images/navlogo/ps/youshe.PNG' },
                { 'title': '更多色彩网站', 'desc': '更多色彩网站知乎', 'url': 'https://zhuanlan.zhihu.com/p/62827480', 'src': './images/navlogo/ps/zhihu.PNG' },
                // { 'title': '', 'desc': '', 'url': '', 'src': './images/navlogo/ps/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-ps'
        }
    }
}
);
const teach = Vue.component('my-component14', {
    //组件注册——教学网站
    template: "#model_pic",
    data() {
        return {
            h3name: '教学网站',
            basessarr: [
                { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teach/.PNG' },
                { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teach/.PNG' },
                { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teach/.PNG' },
                { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teach/.PNG' },
                // { 'title': '#', 'desc': '暂无添加简介', 'url': '', 'src': './images/navlogo/teach/.PNG' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: ' iconfont icon-tongbuketang'
        }
    }
}
);
const tips = Vue.component('my-component15', {
    //组件注册——提示部分
    template: "#model_nopic",
    data() {
        return {
            h3name: '提示内容',
            basessarr: [
                { 'title': '链接', 'url': './item/tips/链接.html' },
                { 'title': 'cmd命令', 'url': './item/tips/cmd/cmd.html' },
                { 'title': '小说漫画', 'url': './item/tips/小说漫画/1.html' },
                { 'title': 'git上传方法', 'url': './item/tips/git.html' },
                { 'title': 'u盘错误代码', 'url': './item/tips/u盘错误代码.html' },
                { 'title': '极域万能密码', 'url': './item/tips/极域万能密码.html' },
                { 'title': 'hello算法', 'url': './item/tips/hello算法.html' },
                { 'title': '代码提示插件', 'url': './item/tips/代码提示插件/1.html' },
                { 'title': 'css定位使用', 'url': 'https://blog.csdn.net/Junehhh/article/details/129022799' },
                { 'title': 'js压缩方法', 'url': 'https://blog.csdn.net/XiaoningZhu/article/details/100162898' },
                { 'title': '图片全屏方法', 'url': './item/tips/图片全屏方法.html' },
                { 'title': '响应式文件在线', 'url': './item/tips/响应式在线连接.html' },
                { 'title': '谷歌翻译问题', 'url': 'https://zhuanlan.zhihu.com/p/571190754?utm_id=0&eqid=a943ec120032fe69000000046464d1a5' },
                { 'title': '新窗口打开', 'url': './item/tips/jQuery在新窗口打开.html' },
                // { 'title': '', 'url': './item/' },
            ],
            // 图标跳转路径
            tiaozhuang: './',
            // 图标
            iconfont: 'iconfont icon-tishi'
        }
    }
}
);
const adminset = Vue.component('my-component16', {
    //组件注册——用户模板
    template: "#adminset",
    data() {
        return {
            // 图标跳转路径
            tiaozhuang: './',
            // myname名字，outtime修改时间，store仓库中获取
            myname: this.$store.state.myname,
            outtime: this.$store.state.outtime
        }
    },
    //过滤器
    filters: {
        //添加前缀
        namess(obj) {
            return obj + "-------------------------本项无法修改";
            // 使用方法{{ myname | namess }}
        }
    },
}
);
const adminset_wechat = Vue.component('my-component17', {
    //组件注册——用户模板微信
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picone'
        }
    }
}
);
const adminset_qq = Vue.component('my-component18', {
    //组件注册——用户模板qq
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay pictwo'
        }
    }
}
);
const adminset_zhifuplay = Vue.component('my-component19', {
    //组件注册——用户模板支付宝支付页
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picthree'
        }
    }
}
);
const adminset_wechatplay = Vue.component('my-component20', {
    //组件注册——用户模板微信支付页
    template: "#adminset_model",
    data() {
        return {
            // 跳转div使用class对应背景
            picplay: 'picplay picfour'
        }
    }
}
);
const itemhtmlcss = Vue.component('my-component21', {
    //组件注册——代码部分html——css
    template: "#itemsectiontwo",
    data() {
        return {
            h3name: '',
            // 导航数据
            basessarr: [
                // 应输入路由路径 
                { 'title': '导航条', 'url': '/item/htmlcss/nav' },
                { 'title': '弹出框', 'url': '/item/htmlcss/alert' },
                { 'title': '404页面', 'url': '/item/htmlcss/404' },
                { 'title': '轮播图', 'url': '/item/htmlcss/banner' },
                { 'title': '盒子布局效果', 'url': '/item/htmlcss/box' },
                { 'title': '文字效果', 'url': '/item/htmlcss/font' },
                { 'title': '按钮', 'url': '/item/htmlcss/btn' },
                { 'title': '模仿', 'url': '/item/htmlcss/imitate' },
                { 'title': '页脚', 'url': '/item/htmlcss/footer' },
                { 'title': '加载页', 'url': '/item/htmlcss/loading' },
                { 'title': '时间倒计时', 'url': '/item/htmlcss/outtimes' },
                { 'title': '登录注册', 'url': '/item/htmlcss/reglogin' },
                { 'title': '移动端', 'url': '/item/htmlcss/removephone' },
                { 'title': '搜索框', 'url': '/item/htmlcss/select' },
                { 'title': '时间轴', 'url': '/item/htmlcss/timeline' },
                { 'title': 'else其他', 'url': '/item/htmlcss/else' },
                { 'title': 'model模板', 'url': '/item/htmlcss/model' },
                { 'title': 'HTML内容', 'url': '/item/htmlcss/html' },
                // { 'title': '', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'HTML-and-CSS',
            //对应项目分类图标
            classurl: 'iconfont icon-HTML isubiao'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            // console.log('点击返回');
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);


// --------------------------------------------------------htmlcss三级模板写入部分开始-----------------------------------------
const HtmlCssNav = Vue.component('my-component21', {
    //组件注册——代码部分html——css——nav
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '导航栏',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '二级导航条', 'url': './item/css/nav/1二级导航条/index.html' },
                { 'title': '下拉导航条', 'url': './item/css/nav/2下拉导航条/index.html' },
                { 'title': '侧边导航', 'url': './item/css/nav/3侧边导航/index.html' },
                { 'title': '按钮侧边', 'url': './item/css/nav/4按钮侧边导航/index.html' },
                { 'title': '侧边二级', 'url': './item/css/nav/5侧边二级导航/index.html' },
                { 'title': '侧边二级图片', 'url': './item/css/nav/6侧边二级图片导航/index.html' },
                { 'title': '侧边伸缩栏', 'url': './item/css/nav/7侧边伸缩栏/index.html' },
                { 'title': '侧边图标提示', 'url': './item/css/nav/8侧边图标提示导航/index.html' },
                { 'title': '导航二级模版', 'url': './item/css/nav/9导航条二级模版/index.html' },
                { 'title': '导航条特效1', 'url': './item/css/nav/10导航条特性2/index.html' },
                { 'title': '导航条特效2', 'url': './item/css/nav/11导航条样式/index.html' },
                { 'title': '导航下拉菜单', 'url': './item/css/nav/12导航下拉菜单/index.html' },
                { 'title': '文字上下滚动', 'url': './item/css/nav/13导航样式文字上下滚动/index.html' },
                { 'title': '二级导航-单模', 'url': './item/css/nav/14二级导航2/index.html' },
                { 'title': '二级导航-带图', 'url': './item/css/nav/15二级导航3/index.html' },
                { 'title': '二级导航-全下', 'url': './item/css/nav/16二级导航4/index.html' },
                { 'title': '二级导航下拉', 'url': './item/css/nav/17二级导航下拉/index.html' },
                { 'title': '二级导航悬停', 'url': './item/css/nav/18二级导航悬停/index.html' },
                { 'title': '二级点击下拉', 'url': './item/css/nav/19二级点击下拉/index.html' },
                { 'title': '二级图片导航', 'url': './item/css/nav/20二级图片导航/index.html' },
                { 'title': '二级下拉导航', 'url': './item/css/nav/21二级下拉导航2/index.html' },
                { 'title': '伸缩导航', 'url': './item/css/nav/22伸缩导航/index.html' },
                { 'title': '鼠标高亮导航', 'url': './item/css/nav/23鼠标高亮导航/index.html' },
                { 'title': '双重导航1', 'url': './item/css/nav/24双重导航/index.html' },
                { 'title': '双重导航2', 'url': './item/css/nav/25双重导航2/index.html' },
                { 'title': '右下导航条', 'url': './item/css/nav/26右下导航条/index.html' },
                { 'title': '古风导航效果', 'url': './item/css/nav/27古风导航效果/index.html' },
                { 'title': '底部导航栏', 'url': './item/css/nav/css-底部导航栏/底部导航栏.html' },
                { 'title': '动态侧边栏', 'url': './item/css/nav/56-css-动态侧边栏/index.html' },
                { 'title': '内凹导航栏', 'url': './item/css/nav/css-内凹导航栏/内凹导航栏.html' },
                { 'title': '滑动导航栏', 'url': './item/css/nav/64-css-滑动导航栏/滑动导航栏.html' },
                { 'title': '导航下拉菜单', 'url': './item/css/nav/76-css-导航下拉菜单-代码/index.html' },
                { 'title': '下划线跟随导航', 'url': './item/css/nav/81-css-下划线跟随导航/下划线跟随导航.html' },
                { 'title': '下划线导航栏', 'url': './item/css/nav/73-css-下划线导航栏/下划线导航栏.html' },
                { 'title': '悬停侧边栏', 'url': './item/css/nav/67-css-悬停侧边栏-代码/index.html' },
                { 'title': '悬停导航栏', 'url': './item/css/nav/75-css-悬停导航栏/悬停导航栏.html' },
                { 'title': '动感菜单', 'url': './item/css/nav/css-动感菜单/CSS-动感菜单.html' },
                // { 'title': '', 'url': './item/css/nav/' },
            ],
        }
    },
}
);
const HtmlcCssAlert = Vue.component('my-component21', {
    //组件注册——代码部分html——css——alert
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '弹出功能',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //alert
                { 'title': '弹窗样式', 'url': './item/css/alert/1弹窗样式/index.html' },
                { 'title': '弹窗右下', 'url': './item/css/alert/2弹窗右下/index.html' },
                { 'title': '弹幕功能', 'url': './item/css/alert/3弹幕功能/index.html' },
                { 'title': '展开动画', 'url': './item/css/alert/35-css-展开动画/展开动画.html' },//alert
                // { 'title': '', 'url': './item/css/alert/' },
            ],
        }
    },
}
);
const HtmlCss404 = Vue.component('my-component21', {
    //组件注册——代码部分html——css---404
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '404页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '404页面出错', 'url': './item/css/404/1-404-页面出错/index.html' },
                { 'title': '404错误返回', 'url': './item/css/404/2-404-错误返回/index.html' },
                { 'title': '404错误简约', 'url': './item/css/404/3-404-错误简约/index.html' },
                { 'title': '404动画飞碟', 'url': './item/css/404/4-404-动画飞碟/index.html' },
                { 'title': '404施工', 'url': './item/css/404/5-404-施工/404.html' },
                { 'title': '404搜索框', 'url': './item/css/404/6-404-搜索框/index.html' },
                { 'title': '404网站维护中', 'url': './item/css/404/7-404-网站维护中/index.html' },
                { 'title': '404页面', 'url': './item/css/404/8-404-页面/index.html' },
            ],
        }
    },
}
);
const HtmlCssBanner = Vue.component('my-component21', {
    //组件注册——代码部分html——css---banner
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '轮播图',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '侧边小图轮播', 'url': './item/css/banner/1侧边小图轮播/index.html' },
                { 'title': '导航条轮播', 'url': './item/css/banner/2导航条轮播/index.html' },
                { 'title': '分享轮播', 'url': './item/css/banner/3分享轮播/index.html' },
                { 'title': '轮播图带下方按钮', 'url': './item/css/banner/6轮播图带下方按钮/index.html' },
                { 'title': '轮播虚化转换', 'url': './item/css/banner/7轮播虚化转换/index.html' },
                { 'title': '购物人员轮播', 'url': './item/css/banner/5购物人员轮播/index.html' },
                { 'title': '展开卡片效果', 'url': './item/css/banner/4展开卡片效果/index.html' },
                { 'title': '全景轮播', 'url': './item/css/banner/CSS-全景轮播/全景轮播.html' },
                { 'title': '垂直轮播', 'url': './item/css/banner/CSS-垂直轮播/垂直轮播.html' },
                { 'title': '焦点轮播', 'url': './item/css/banner/CSS-焦点轮播/index.html' },
                { 'title': '苹果自动滚屏', 'url': './item/css/banner/苹果自动滚屏/gunping.html' },
                { 'title': '走马灯', 'url': './item/css/banner/05-CSS-走马灯/走马灯.html' },
                { 'title': '双开门', 'url': './item/css/banner/02-CSS-双开门/CSS-双开门.html' },
                { 'title': '3D轮播卡片', 'url': './item/css/banner/CSS-3D轮播卡片(1)/3D轮播卡片.html' },
                { 'title': '滚动卡片', 'url': './item/css/banner/滚动卡片/index.html' },
                { 'title': '立体式图片查看', 'url': './item/css/banner/立体式图片查看/立体式图片查看.html' },
                { 'title': '悬停相册', 'url': './item/css/banner/80-CSS-3D悬停相册（轮播）/CSS-悬停相册.html' },
                // { 'title': '', 'url': './item/css/banner/' },
            ],
        }
    },
}
);
const HtmlCssBox = Vue.component('my-component21', {
    //组件注册——代码部分html——css----box
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '盒子效果',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '上下扩大盒子', 'url': './item/css/box/1盒子上下扩大/index.html' },
                { 'title': '手风琴展开盒子', 'url': './item/css/box/2盒子手风琴展开/index.html' },
                { 'title': '盒子图片展开', 'url': './item/css/box/3盒子图片展开/index.html' },
                { 'title': '盒子选中边框特效', 'url': './item/css/box/4盒子选中边框特效/index.html' },
                { 'title': '块盒子放大', 'url': './item/css/box/5块盒子放大/index.html' },
                { 'title': '商品多图片查看', 'url': './item/css/box/6商品多图片查看/index.html' },
                { 'title': '商品列表详情', 'url': './item/css/box/7商品列表详情/index.html' },
                { 'title': '悬停盒子文字', 'url': './item/css/box/8鼠标悬停查看盒子文字/index.html' },
                { 'title': '悬停盒子文字', 'url': './item/css/box/9鼠标悬停盒子文字查看/index.html' },
                { 'title': '悬停打开盒子', 'url': './item/css/box/10悬停打开盒子/index.html' },
                { 'title': '全屏选项卡', 'url': './item/css/box/11全屏选项卡/index.html' },
                { 'title': '圆形遮罩效果', 'url': './item/css/box/12圆形遮罩效果/index.html' },
                { 'title': '方型遮罩投票', 'url': './item/css/box/13方型遮罩-投票/index.html' },
                { 'title': '新闻选项卡', 'url': './item/css/box/新闻选项卡/index.html' },
                { 'title': '选项卡片切换', 'url': './item/css/box/选项卡片切换/index.html' },
                { 'title': '选项卡切换', 'url': './item/css/box/选项卡切换/index.html' },
                { 'title': '边框光彩流动', 'url': './item/css/box/边框光彩流动/边框光彩流动.html' },
                { 'title': '粘性页面定位', 'url': './item/css/box/粘性页面定位/111.html' },
                { 'title': '图片放大效果', 'url': './item/css/box/图片放大效果/111.html' },
                { 'title': '视差效果', 'url': './item/css/box/视差效果/1.html' },
                // { 'title': '', 'url': './item/css/box/' },
            ],
        }
    },
}
);
const HtmlCssFont = Vue.component('my-component21', {
    //组件注册——代码部分html——css----font
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文字效果',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '幽灵文字', 'url': './item/css/font/幽灵文字/幽灵文字.html' },
                { 'title': '跳动文字', 'url': './item/css/font/跳动文字/跳动文字.html' },
                { 'title': '炫酷下拉线', 'url': './item/css/font/炫酷下拉线/炫酷拉下线.html' },
                { 'title': '文字水波特效', 'url': './item/css/font/文字水波特效/文字水波特效.html' },
                { 'title': '文字聚光灯', 'url': './item/css/font/聚光灯/聚光灯.html' },
                { 'title': '文字加载动效', 'url': './item/css/font/文字加载动效/index.html' },
                { 'title': '文字扫描加载', 'url': './item/css/font/css-文字扫描加载/文字扫描加载.html' },
                { 'title': '文字穿透效果', 'url': './item/css/font/CSS-文字穿透效果/index.html' },
                // { 'title': '', 'url': './item/css/font/' },
            ],
        }
    },
}
);
const HtmlCssBtn = Vue.component('my-component21', {
    //组件注册——代码部分html——css-----btn
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '按钮',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '按钮彩条特效', 'url': './item/css/btn/1按钮彩条特效/index.html' },
                { 'title': '按钮气泡特效', 'url': './item/css/btn/2按钮气泡特效/index.html' },
                { 'title': '按钮特效', 'url': './item/css/btn/3按钮特效3/index.html' },
                { 'title': '按钮悬停拓展', 'url': './item/css/btn/4按钮悬停上下显示/index.html' },
                { 'title': '按钮特效', 'url': './item/css/btn/5鼠标过按钮特效/index.html' },
                { 'title': '炫酷按钮精', 'url': './item/css/btn/炫酷按钮/炫酷按钮.html' },
                { 'title': '开关按钮', 'url': './item/css/btn/开关按钮/开关按钮.html' },
                { 'title': '波纹按钮特效', 'url': './item/css/btn/波纹按钮特效/波纹按钮特效.html' },
                { 'title': '刀光按钮特效', 'url': './item/css/btn/刀光按钮特效/刀光按钮特效.html' },
                { 'title': '点击按钮打钩效果', 'url': './item/css/btn/82-css-点击按钮打钩效果/index.html' },
                { 'title': '镜面按钮', 'url': './item/css/btn/镜面按钮/镜面按钮.html' },
                { 'title': '按钮切换背景（普通）', 'url': './item/css/btn/按钮切换背景（普通）/按钮.html' },
                { 'title': '悬浮动画按钮', 'url': './item/css/btn/悬浮动画/悬浮按钮.html' },
                { 'title': '按钮切换背景', 'url': './item/css/btn/按钮切换背景（高端）/炫酷按钮.html' },
                //  { 'title': '','url': './item/css/btn/'},

            ],
        }
    },
}
);
const HtmlCssImitate = Vue.component('my-component21', {
    //组件注册——代码部分html——css-----模仿
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '模仿页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '仿i7素材网站', 'url': './item/css/imitate/1仿i7素材网站/index.html' },
                { 'title': 'QQ音乐播放器', 'url': './item/css/imitate/2仿QQ音乐播放器/index.html' },
                { 'title': '仿百度搜图', 'url': './item/css/imitate/3仿百度搜图/index.html' },
                { 'title': '仿商城', 'url': './item/css/imitate/4仿商城/index.html' },
                { 'title': '仿微信', 'url': './item/css/imitate/5仿微信/index.html' },
                { 'title': '仿文件夹下拉', 'url': './item/css/imitate/6仿文件夹下拉/index.html' },
                { 'title': '仿聊天框', 'url': './item/css/imitate/7仿聊天框/index.html' },
                { 'title': '仿日历考勤表', 'url': './item/css/imitate/8仿日历考勤表/index.html' },
                { 'title': '仿播放器可伸缩', 'url': './item/css/imitate/9仿音乐播放器可伸缩/index.html' },
                { 'title': '仿日历', 'url': './item/css/imitate/10仿日历/index.html' },
                // { 'title': '', 'url': './item/css/imitate/' },
            ],
        }
    },
}
);
const HtmlCssFooter = Vue.component('my-component21', {
    //组件注册——代码部分html——css---footer
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '页脚',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '页脚模版-详', 'url': './item/css/footer/页脚模版1/index.html' },
                { 'title': '页脚模版-深色', 'url': './item/css/footer/页脚模版2/index.html' },
                { 'title': '页脚模版-简', 'url': './item/css/footer/页脚模版3/index.html' },
                { 'title': '页脚模版-表单', 'url': './item/css/footer/页脚模版4/index.html' },
                { 'title': '页脚模版-块链接', 'url': './item/css/footer/页脚模版5/index.html' },
                { 'title': '页脚模版-简', 'url': './item/css/footer/页脚模版6/index.html' },
                { 'title': '页脚标签', 'url': './item/css/footer/7页脚标签/index.html' },
                { 'title': '页尾特效', 'url': './item/css/footer/8页尾特效/index.html' },
                // { 'title': '', 'url': './item/css/footer/' },
            ],
        }
    },
}
);
const HtmlCssLoading = Vue.component('my-component21', {
    //组件注册——代码部分html——css---loading
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '加载页',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //loading
                { 'title': '连接服务器加载', 'url': './item/css/loading/2加载页-连接服务器/index.html' },
                { 'title': '加载页30种', 'url': './item/css/loading/1加载页30种/index.html' },
                { 'title': '圆形贴贴动画', 'url': './item/css/loading/3圆形贴贴动画/index.html' },
                { 'title': '全屏滑动加载', 'url': './item/css/loading/58-css-全屏滑动加载/index.html' },
                { 'title': '边缘融合加载', 'url': './item/css/loading/63-css-边缘融合加载/边缘融合loading.html' },
                { 'title': '环形进度条', 'url': './item/css/loading/环形进度条/环形进度条.html' },
                { 'title': '手风琴加载', 'url': './item/css/loading/手风琴/手风琴加载.html' },
                { 'title': '进度条', 'url': './item/css/loading/进度条/index.html' },
                { 'title': '钢铁侠加载', 'url': './item/css/loading/css-钢铁侠加载/钢铁侠加载页.html' },
                { 'title': '光线加载动画', 'url': './item/css/loading/74-css-光线加载动画/光线加载动画.html' },
                { 'title': '旋转加载中', 'url': './item/css/loading/旋转加载中/旋转加载中.html' },

                // { 'title': '', 'url': './item/css/loading/' },
            ],
        }
    },
}
);
const HtmlCssOuttimes = Vue.component('my-component21', {
    //组件注册——代码部分html——css---outtime
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '倒计时',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '倒计时-中', 'url': './item/css/outtimes/1倒计时/index.html' },
                { 'title': '倒计时-左', 'url': './item/css/outtimes/2倒计时3/index.html' },
                { 'title': '倒计时搜索栏', 'url': './item/css/outtimes/3倒计时搜索栏/index.html' },
                { 'title': '倒计时-方格', 'url': './item/css/outtimes/4倒计时/index.html' },
                // { 'title': '', 'url': './item/css/outtimes/' },
            ],
        }
    },
}
);
const HtmlCssRegAndLogin = Vue.component('my-component21', {
    //组件注册——代码部分html——css----reglogin
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '登录注册',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径 //reg
                { 'title': '登录管理模版', 'url': './item/css/reg_login/1登录管理模版/sign.html' },
                { 'title': '登录页-单', 'url': './item/css/reg_login/2登录页/index.html' },
                { 'title': '登录页-带验证', 'url': './item/css/reg_login/3登录页123/index.html' },
                { 'title': '登录页-三', 'url': './item/css/reg_login/4登录注册忘记密码/login.html' },
                { 'title': '登录页-枫叶三', 'url': './item/css/reg_login/5登录注册忘记密码2/login.html' },
                { 'title': '登录页-简约三', 'url': './item/css/reg_login/6登录注册忘记密码3/login.html' },
                { 'title': '登录页-时尚三', 'url': './item/css/reg_login/7登录注册忘记密码4/login.html' },
                { 'title': '登录页-验证三', 'url': './item/css/reg_login/8登录注册忘记密码5/login.html' },
                { 'title': '登录页-单', 'url': './item/css/reg_login/9登录注册页12/index.html' },
                { 'title': '注册页-单', 'url': './item/css/reg_login/9登录注册页12/index2.html' },
                { 'title': '动画注册登录', 'url': './item/css/reg_login/10动画注册登录/login.html' },
                { 'title': '滑块验证注册', 'url': './item/css/reg_login/11滑块验证注册/index.html' },
                { 'title': '京东注册页', 'url': './item/css/reg_login/12京东注册页/index.html' },
                { 'title': '块显示登录注册', 'url': './item/css/reg_login/13块显示登录注册/index.html' },
                { 'title': '上小图登录页', 'url': './item/css/reg_login/14上小图登录页/index.html' },
                { 'title': '手机验证码登录页', 'url': './item/css/reg_login/15手机验证码登录页/index.html' },
                { 'title': '双边登录页', 'url': './item/css/reg_login/16双边登录页/index.html' },
                { 'title': '微信扫码登录', 'url': './item/css/reg_login/17微信扫码登录/index.html' },
                { 'title': '小鹰闭眼登录', 'url': './item/css/reg_login/18小鹰闭眼登录/index.html' },
                { 'title': '验证码登录页', 'url': './item/css/reg_login/19验证码登录页/index.html' },
                { 'title': '炫彩登录页', 'url': './item/css/reg_login/炫酷登录页/炫酷登录页.html' },
                { 'title': '流光登陆页', 'url': './item/css/reg_login/css-流光登陆页/登录页2.0.html' },
                { 'title': '登录页', 'url': './item/css/reg_login/登录页/登录.html' },
                { 'title': '花瓣登录', 'url': './item/css/reg_login/css-花瓣登录/花瓣登录.html' },
                { 'title': '密码灯登陆', 'url': './item/css/reg_login/69-css-密码灯登陆/index.html' },
                { 'title': '注册登录切换', 'url': './item/css/reg_login/70-CSS-注册登录切换/index.html' },
                { 'title': '简约登录页', 'url': './item/css/reg_login/61-css-简约登录页/login.html' },
                { 'title': '阿里云盘登陆', 'url': './item/css/reg_login/62-css-阿里云盘登陆/login.html' },
                { 'title': '水滴登录页', 'url': './item/css/reg_login/59-css-水滴登录页/index.html' },
                { 'title': '炫酷登录切换', 'url': './item/css/reg_login/CSS-炫酷登录切换/CSS-炫酷登录切换.html' },
                //  { 'title': '','url': './item/css/reg_login/'},
            ],
        }
    },
}
);
const HtmlCssRemovePhone = Vue.component('my-component21', {
    //组件注册——代码部分html——css----removephone
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '移动端',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '手机底部导航效果', 'url': './item/css/remove_phone/1手机底部导航效果/index.html' },
                { 'title': '手机端聊天应用程序', 'url': './item/css/remove_phone/2手机端聊天应用程序/index.html' },
                { 'title': '手机端音乐app', 'url': './item/css/remove_phone/3手机端音乐app/index.html' },
                { 'title': '移动段下拉条', 'url': './item/css/remove_phone/4移动段下拉条/index.html' },
                { 'title': '移动多图片上传', 'url': './item/css/remove_phone/5移动-多图片上传/index.html' },
                { 'title': '移动购物车', 'url': './item/css/remove_phone/6移动-购物车/index.html' },
                { 'title': '移动滑动更多', 'url': './item/css/remove_phone/7移动-滑动更多/index.html' },
                { 'title': '移动搜索', 'url': './item/css/remove_phone/8移动-搜索/index-search.html' },
                { 'title': '移动图片上传', 'url': './item/css/remove_phone/9移动-图片上传/index.html' },
                { 'title': '移动设计合集', 'url': './item/css/remove_phone/10移动设计合集/index.html' },
            ],
        }
    },
}
);
const HtmlCssSelect = Vue.component('my-component21', {
    //组件注册——代码部分html——css---select
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '搜索栏',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '点击更多', 'url': './item/css/select/1点击更多/index.html' },
                { 'title': '旋转工具箱', 'url': './item/css/select/旋转工具箱/旋转工具箱.html' },
                { 'title': '旋转打开盒子', 'url': './item/css/select/旋转打开盒子/index.html' },
                { 'title': '炫彩工具箱', 'url': './item/css/select/css-炫彩工具箱/CSS-炫彩工具箱.html' },
                { 'title': '点击伸缩导航栏', 'url': './item/css/select/2点击伸缩导航栏/index.html' },
                { 'title': '更多分享', 'url': './item/css/select/4更多分享3/index.html' },
                { 'title': '分享插件块', 'url': './item/css/select/3分享插件块/index.html' },
                { 'title': '搜索栏伸缩', 'url': './item/css/select/5搜索栏伸缩2/index.html' },
                { 'title': '搜索栏样式', 'url': './item/css/select/6搜索栏样式/index.html' },
                { 'title': '下拉列表美化', 'url': './item/css/select/7下拉列表美化/index.html' },
                { 'title': '输入框上方显示', 'url': './item/css/select/输入框上方显示/输入框上方显示.html' },
                { 'title': '输入框动效', 'url': './item/css/select/输入框动效/输入框动效.html' },
                { 'title': '输入文字上浮放大', 'url': './item/css/select/输入文字上浮放大/index.html' },
                { 'title': '输入文字闪光效果', 'url': './item/css/select/输入文字闪光效果/index.html' },
                { 'title': '多种输入框动效', 'url': './item/css/select/54-css-多种输入框动效/输入框特效.html' },
                { 'title': '动态搜索框', 'url': './item/css/select/CSS-动态搜索框/动态搜索框.html' },
            ],
        }
    },
}
);
const HtmlCssTimeline = Vue.component('my-component21', {
    //组件注册——代码部分html——css--timeline
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '时间轴',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                //timeline
                { 'title': '时间轴-左右', 'url': './item/css/timeline/时间轴1/index.html' },
                { 'title': '时间轴-视频', 'url': './item/css/timeline/时间轴2/index.html' },
                { 'title': '时间轴-历程', 'url': './item/css/timeline/时间轴3/index.html' },
                { 'title': '时间轴-弯曲', 'url': './item/css/timeline/时间轴4/index.html' },
                { 'title': '时间轴-动画', 'url': './item/css/timeline/时间轴6/index.html' },
                { 'title': '可点击时间轴', 'url': './item/css/timeline/5可点击时间轴/index.html' },
                // { 'title': '', 'url': './item/css/timeline/' },
            ],
        }
    },
}
);
const HtmlCssElse = Vue.component('my-component21', {
    //组件注册——代码部分html——css---else
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '其他',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'css提取码', 'url': './item/css/css提取码.html' },
                { 'title': '拟态键盘', 'url': './item/css/else/A0002-拟态键盘/keyboard 1.html' },
                { 'title': 'Win10桌面', 'url': './item/css/else/html实现Win10桌面后台管理/index.html' },
                { 'title': '多行文本展开', 'url': './item/css/else/71-css-多行文本展开/index.html' },
                { 'title': '选中动画', 'url': './item/css/else/77-css-自定义选中动画/CSS-自定义选中效果.html' },
                { 'title': '苹果消息折叠效果', 'url': './item/css/else/57-css-苹果消息折叠效果/index.html' },
                { 'title': '王者翻转框', 'url': './item/css/else/42-css-王者翻转框/王者翻转框.html' },
                { 'title': '悬浮菜单', 'url': './item/css/else/悬浮图标/悬浮图标.html' },
                { 'title': '悬停魔法棒', 'url': './item/css/else/悬停魔法棒/悬停魔法棒.html' },
                { 'title': '魔力弹簧', 'url': './item/css/else/魔力弹簧/魔力弹簧.html' },
                { 'title': '云彩下雪', 'url': './item/css/else/云彩下雪/云彩下雪.html' },
                { 'title': '口罩表情', 'url': './item/css/else/口罩表情/口罩表情.html' },
                { 'title': '手机充电效果', 'url': './item/css/else/手机充电效果/shoujiconddian.html' },
                { 'title': '渐变卡片', 'url': './item/css/else/渐变卡片/渐变卡片.html' },
                { 'title': '太阳', 'url': './item/css/else/太阳/太阳.html' },
                { 'title': '日历模拟器', 'url': './item/css/else/日历模拟器/日历模拟器.html' },
                { 'title': '星际旋转', 'url': './item/css/else/17-css-星际旋转/星际旋转.html' },
                { 'title': '鼠标痕迹', 'url': './item/css/else/鼠标痕迹/鼠标痕迹.html' },
                { 'title': '3D立体相册', 'url': './item/css/else/css-3D立体相册/3D立体相册-源码.html' },
                { 'title': '3d导航', 'url': './item/css/else/25-CSS-3d导航/3d导航.html' },
                { 'title': '步骤条', 'url': './item/css/else/72-css-步骤条/CSS-步骤条源码.html' },
                { 'title': '大风车', 'url': './item/css/else/CSS-大风车/CSS-大风车.html' },
                { 'title': '缩放动画', 'url': './item/css/else/CSS-缩放动画/缩放动画.html' },
                { 'title': '网易云播放器', 'url': './item/css/else/41-css-网易云播放器/css-网易云.html' },
                { 'title': '荧光转动表', 'url': './item/css/else/36-css-荧光转动表/转动表.html' },
                { 'title': '爱你的心', 'url': './item/css/else/23-CSS-爱你的心/爱你的心.html' },
                { 'title': '贺卡纯css', 'url': './item/css/else/65-css-中秋贺卡/无图无JS-中秋贺卡.html' },
                { 'title': 'AR扫福', 'url': './item/css/else/68-CSS-AR扫福效果/index.html' },
                { 'title': '雷达扫描效果', 'url': './item/css/else/66-css-雷达扫描效果/css雷达扫描效果.html' },
                { 'title': '滑动拼图验证码', 'url': './item/css/else/78-css-滑动拼图验证码/index.html' },
                { 'title': '鸿蒙OS动画', 'url': './item/css/else/79-css-鸿蒙OS动画/鸿蒙OS动画.html' },
                { 'title': '3D翻转Tab', 'url': './item/css/else/83-css-3D翻转Tab/index.html' },
                { 'title': '颜色选择器', 'url': './item/css/else/84-css-颜色选择器-代码/index.html' },
                { 'title': '搜索标签选择', 'url': './item/css/else/搜索标签选择/index.html' },
                { 'title': '作品上传', 'url': './item/css/else/作品上传/index.html' },
                { 'title': '打赏', 'url': './item/css/else/打赏/index.html' },
                { 'title': '生日蛋糕', 'url': './item/css/else/生日蛋糕/index.html' },
                { 'title': '3d步数', 'url': './item/css/else/3d步数/index.html' },
                { 'title': '爱心背景动画', 'url': './item/css/else/爱心背景动画/index.html' },
            ],
        }
    },
}
);
const HtmlCssModel = Vue.component('my-component21', {
    //组件注册——代码部分html——css---model
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '页面模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '模版-膳食', 'url': './item/css/model/1模版-膳食/index.html' },
                { 'title': '模版-餐厅', 'url': './item/css/model/2模版-餐厅/index.html' },
                { 'title': '管理模版', 'url': './item/css/model/3管理模版/index.html' },
                { 'title': '后台管理模版', 'url': './item/css/model/4后台管理模版/index.html' },
                { 'title': '电子商务大数据', 'url': './item/css/model/5广西电子商务公共服务平台大数据中心/index.html' },
                { 'title': '物流大数据平台', 'url': './item/css/model/6湖南物流大数据服务平台/index.html' },
                { 'title': '大数据总揽图', 'url': './item/css/model/7大数据运维总揽图/index.html' },
                { 'title': 'model蔬菜', 'url': './item/css/model/model/model (1)/index.html' },
                { 'title': 'model运输', 'url': './item/css/model/model/model (2)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (3)/index.html' },
                { 'title': 'model社区', 'url': './item/css/model/model/model (4)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (5)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (6)/index.html' },
                { 'title': 'model健身', 'url': './item/css/model/model/model (7)/index.html' },
                { 'title': 'model晒图', 'url': './item/css/model/model/model (8)/index.html' },
                { 'title': 'model名片', 'url': './item/css/model/model/model (9)/index.html' },
                { 'title': 'model酒', 'url': './item/css/model/model/model (10)/index.html' },
                { 'title': 'model电子', 'url': './item/css/model/model/model (11)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (12)/index.html' },
                { 'title': 'model电子', 'url': './item/css/model/model/model (13)/index.html' },
                { 'title': 'model酒店', 'url': './item/css/model/model/model (14)/index.html' },
                { 'title': 'model梦幻', 'url': './item/css/model/model/model (15)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (16)/index.html' },
                { 'title': 'model护理', 'url': './item/css/model/model/model (17)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (18)/index.html' },
                { 'title': 'model肉', 'url': './item/css/model/model/model (19)/index.html' },
                { 'title': 'model花', 'url': './item/css/model/model/model (20)/index.html' },
                { 'title': 'model摄影', 'url': './item/css/model/model/model (21)/index.html' },
                { 'title': 'model汽车', 'url': './item/css/model/model/model (22)/index.html' },
                { 'title': 'model动画', 'url': './item/css/model/model/model (23)/index.html' },
                { 'title': 'model', 'url': './item/css/model/model/model (24)/index.html' },

                { 'title': '电子网站1', 'url': './item/css/model/8IT产品电子商务网站/index.html' },
                { 'title': '电子网站2', 'url': './item/css/model/8IT产品电子商务网站/index-2.html' },
                { 'title': 'Taxi出租车', 'url': './item/css/model/9Taxi出租车公司/index.html' },
                { 'title': '别墅房地产评估', 'url': './item/css/model/10别墅房地产评估公司/index.html' },
                { 'title': '冰淇淋企业', 'url': './item/css/model/11冰淇淋企业网站/index.html' },
                { 'title': '残障儿童公益项目', 'url': './item/css/model/12残障儿童公益项目/index.html' },
                { 'title': '侧导航清爽', 'url': './item/css/model/13侧导航清爽网站/index.html' },
                { 'title': '超大气宠物世界', 'url': './item/css/model/14超大气宠物世界/index.html' },
                { 'title': '宠物猫买卖交易', 'url': './item/css/model/15宠物猫买卖交易/index.html' },
                { 'title': '创意家居工艺', 'url': './item/css/model/16创意家居工艺/index.html' },
                { 'title': '大气宽屏婚庆', 'url': './item/css/model/17大气宽屏婚庆公司/index.html' },
                { 'title': '大气商务酒店', 'url': './item/css/model/18大气商务酒店/index.html' },
                { 'title': '电影影视门户', 'url': './item/css/model/19电影影视门户/index.html' },
                { 'title': '房地产公司', 'url': './item/css/model/20房地产公司/index.html' },
                { 'title': '房地产新楼盘', 'url': './item/css/model/21房地产新楼盘/index.html' },
                { 'title': '仿淘宝首页', 'url': './item/css/model/22仿淘宝首页/index.html' },
                { 'title': '粉色清爽404', 'url': './item/css/model/23粉色清爽404/index.html' },
                { 'title': '服务器销售', 'url': './item/css/model/24服务器销售网站/index.html' },
                { 'title': '服装箱包销售1', 'url': './item/css/model/25服装箱包销售网站/index.html' },
                { 'title': '服装箱包销售2', 'url': './item/css/model/25服装箱包销售网站/index-2.html' },
                { 'title': '工业制造业门户', 'url': './item/css/model/26工业制造业门户/index.html' },
                { 'title': '大气的企业', 'url': './item/css/model/27精美大气的品牌企业/index.html' },
                { 'title': '卡通动漫风格', 'url': './item/css/model/28卡通动漫风格/index.html' },
                { 'title': '蓝色笑脸404', 'url': './item/css/model/29蓝色可爱笑脸404/index.html' },
                { 'title': '贸易物流企业', 'url': './item/css/model/30贸易物流企业/index.html' },
                { 'title': '母婴用品行业', 'url': './item/css/model/31母婴用品行业/index.html' },
                { 'title': '室内装饰', 'url': './item/css/model/32室内装饰/index.html' },
                { 'title': '蔬菜农场', 'url': './item/css/model/33蔬菜农场/index.html' },
                { 'title': '游泳馆培训', 'url': './item/css/model/34游泳馆培训网站/index.html' },
            ],
        }
    },
}
);
const HtmlCssHtml = Vue.component('my-component21', {
    //组件注册——代码部分html——css---html
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: 'HTML页面',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'input输入框效果', 'url': './item/css/html/input.html' },
                { 'title': '新闻列表', 'url': './item/css/html/18-综合案例-新闻列表.html' },
                { 'title': '新闻', 'url': './item/css/html/19-综合案例1-新闻.html' },
                { 'title': '导航块', 'url': './item/css/html/19-综合案例1.html' },
                { 'title': '产品', 'url': './item/css/html/20-综合案例2-产品.html' },
                { 'title': '五彩导航', 'url': './item/css/html/20-综合案例2.html' },
                { 'title': '学生信息表', 'url': './item/css/html/21-综合案例-学生信息表.html' },
                { 'title': '表单', 'url': './item/css/html/22-综合案例-表单.html' },
                { 'title': '小米布局', 'url': './item/css/html/小米布局.html' },
                { 'title': '小米模块', 'url': './item/css/html/小米模块.html' },
                { 'title': '导航二维码', 'url': './item/css/html/导航二维码/02-导航二维码显示隐藏切换案例-完成样式.html' },
                { 'title': '小兔鲜项目', 'url': './item/css/html/小兔鲜项目/index.html' },
                { 'title': '新浪导航', 'url': './item/css/html/新浪导航.html' },
                { 'title': '网页新闻列表', 'url': './item/css/html/网页新闻列表.html' },
                { 'title': '学成在线网页', 'url': './item/css/html/study/index.html' },
                { 'title': '卡片模块案例', 'url': './item/css/html/卡片模块案例/02-卡片模块hot图片案例-完成样式.html' },
                { 'title': '小米登录框', 'url': './item/css/html/小米登录框/小米登录框.html' },
                { 'title': '爱宠知识新闻', 'url': './item/css/html/爱宠知识新闻/爱宠知识案例.html' },
                { 'title': '网站解决方案页', 'url': './item/css/html/网站解决方案页/index.html' },
                { 'title': '套餐选择页', 'url': './item/css/html/套餐选择页/index.html' },
                { 'title': '相册效果', 'url': './item/css/html/相册效果/index.html' },
                { 'title': '卡片样式切换', 'url': './item/css/html/卡片样式切换/index.html' },
                { 'title': '滚动式网页', 'url': './item/css/html/滚动式网页/index.html' },
                { 'title': '邮箱注册页', 'url': './item/css/html/邮箱注册页/index.html' },
                { 'title': '前端模版', 'url': './item/css/html/前段模版/index.html' },
                { 'title': '分类选项卡', 'url': './item/css/html/分类选项卡/index.html' },
                { 'title': '企业管理-高级', 'url': './item/css/html/企业管理模版/index.html' },
                { 'title': '导航登陆定位', 'url': './item/css/html/auto_position/2导航登陆定位/index.html' },


            ],
        }
    },
}
);
// --------------------------------------------------------htmlcss三级模板写入部分结束-----------------------------------------

const itemjavascript = Vue.component('my-component22', {
    //组件注册——代码部分JavaScript
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内项目', 'url': '/item/javascript/in' },
                { 'title': '课外拓展', 'url': '/item/javascript/out' },
                { 'title': '文档项目', 'url': '/item/javascript/document' },
                { 'title': '转盘', 'url': '/item/javascript/zhuangpan' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'JavaScript',
            //对应项目分类图标
            classurl: 'iconfont icon-js'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------javascript三级模板写入部分开始-----------------------------------------
const JavascriptIn = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---课内
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '键盘键值表', 'url': './item/javascript/images/键盘键值表.png' },
                { 'title': '润年判断', 'url': './item/javascript/in/润年判断/闰年判断.html' },
                { 'title': 'BIM计算', 'url': './item/javascript/in/BIM/20230307.html' },
                { 'title': '找字小游戏', 'url': './item/javascript/in/找字小游戏/找字小游戏.html' },
                { 'title': '猜数字', 'url': './item/javascript/in/猜数字/猜数字小游戏.html' },
                { 'title': '彩票', 'url': './item/javascript/in/彩票/彩票升级版.html' },
                { 'title': '计算器', 'url': './item/javascript/in/计算器/计算器（格式）.html' },
                { 'title': '发红包', 'url': './item/javascript/in/发红包/模拟抢红包（格式）.html' },
                { 'title': '城市下拉列表', 'url': './item/javascript/in/城市下拉列表/城市下拉列表2.html' },
                { 'title': '猴子选大王', 'url': './item/javascript/in/猴子选大王/猴子选大王.html' },
                { 'title': '万年历', 'url': './item/javascript/in/万年历/万年历.html' },
                { 'title': '10秒小游戏', 'url': './item/javascript/in/10秒小游戏/10秒小游戏.html' },
                { 'title': '倒计时', 'url': './item/javascript/in/倒计时/倒计时.html' },
                { 'title': '事件倒计时', 'url': './item/javascript/in/事件倒计时升级版/事件倒计时.html' },
                { 'title': '获取网页信息', 'url': './item/javascript/in/获取操作系统信息/获取操作系统信息.html' },
                { 'title': '复选框按钮', 'url': './item/javascript/in/复选框按钮/2023042301.html' },
                { 'title': '显示隐藏密码', 'url': './item/javascript/in/显示隐藏密码/2023042302.html' },
                { 'title': '点亮城市', 'url': './item/javascript/in/点亮城市/点亮城市.html' },
                { 'title': '滑动导航栏', 'url': './item/javascript/in/中国航天梦（导航栏）/导航栏.html' },
                { 'title': '开红包', 'url': './item/javascript/in/开红包/red - 空白.html' },
                { 'title': '评论区', 'url': './item/javascript/in/评论区/评论.html' },
                { 'title': '鼠标移动', 'url': './item/javascript/in/鼠标移动/鼠标.html' },
                { 'title': '猜猜我是谁', 'url': './item/javascript/in/猜猜我是谁/猜猜我是谁1.html' },
                { 'title': '文本框换行', 'url': './item/javascript/in/输入框回车/6.html' },
                { 'title': '键盘按键', 'url': './item/javascript/in/键盘按键/5.html' },
                { 'title': '璃月美景', 'url': './item/javascript/in/璃月美景/yuan.html' },
                { 'title': '奔跑的小人', 'url': './item/javascript/in/奔跑小人/1.html' },
                { 'title': '列表操作', 'url': './item/javascript/in/列表操作/node.html' },
                { 'title': '全选框', 'url': './item/javascript/in/全选框/111.html' },
                { 'title': '高考加油', 'url': './item/javascript/in/高考加油/gaokaojiayou.html' },
                { 'title': '模拟弹幕', 'url': './item/javascript/in/模拟弹幕/65.html' },
                { 'title': '模拟滚屏', 'url': './item/javascript/in/模拟滚屏/滚屏.html' },
                { 'title': '五星好评', 'url': './item/javascript/in/五星好评/66.html' },
                { 'title': '五星评分效果', 'url': './item/javascript/in/五星评分效果/index.html' },
                { 'title': '万能翻译', 'url': './item/javascript/in/万能翻译/612.html' },
                { 'title': '星座运势', 'url': './item/javascript/in/星座运势/6122.html' },
                { 'title': '热搜榜', 'url': './item/javascript/in/热搜榜/hot.html' },
                { 'title': '复习-计算器', 'url': './item/javascript/in/计算器2/index.html' },
                { 'title': '复习-信息框查看', 'url': './item/javascript/in/信息框查看表/index.html' },
                { 'title': '复习-登录页', 'url': './item/javascript/in/登录页/index.html' },
                { 'title': '复习-下拉菜单', 'url': './item/javascript/in/下拉菜单/index.html' },
                { 'title': '复习-导航下拉栏', 'url': './item/javascript/in/导航下拉栏/index.html' },
                // { 'title': '复习-', 'url': './item/javascript/in/' },
            ],
        }
    },
}
);
const JavascriptOut = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---课外
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '随机生成颜色', 'url': './item/javascript/out/黑马/随机生成颜色.html' },
                { 'title': '取款机操作', 'url': './item/javascript/out/黑马/议ATM取款机操作.html' },
                { 'title': '秒数转换为时间', 'url': './item/javascript/out/黑马/秒数转换为时间.html' },
                { 'title': '生成柱形图', 'url': './item/javascript/out/黑马/根据数据生成柱形图.html' },
                { 'title': '字段格式验证', 'url': './item/javascript/out/字段格式验证/index.html' },
                { 'title': '生成柱形图', 'url': './item/javascript/out/黑马/根据数据生成柱形图.html' },
                { 'title': '密码强度验证1', 'url': './item/javascript/out/密码强度验证/index.html' },
                { 'title': '密码强度验证2', 'url': './item/javascript/out/密码强度验证1/index.html' },
                { 'title': '滑块验证1', 'url': './item/javascript/out/滑块验证/index.html' },
                { 'title': '滑块验证2', 'url': './item/javascript/out/滑块验证2/index.html' },
                { 'title': '表单验证', 'url': './item/javascript/out/表单验证/index.html' },
                { 'title': '滑块验证', 'url': './item/javascript/out/滑块验证/index2.html' },
                { 'title': '元素拖拽', 'url': './item/javascript/out/元素拖拽/index.html' },
                { 'title': '输入框获取时间', 'url': './item/javascript/out/输入框获取时间/index.html' },
                { 'title': '标签库', 'url': './item/javascript/out/标签库/index.html' },
                { 'title': '记事本', 'url': './item/javascript/out/记事本/index.html' },
                { 'title': '键盘控制滑屏', 'url': './item/javascript/out/键盘控制滑屏/index.html' },
                { 'title': '列表双向切换', 'url': './item/javascript/out/列表双向切换/index.html' },
                { 'title': '二级项目选择', 'url': './item/javascript/out/二级项目选择/index.html' },
                // { 'title': '', 'url': './item/javascript/out/' },
            ],
        }
    },
}
);

const JavascriptDocument = Vue.component('my-component22', {
    //组件注册——代码部分html——css---文档
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                { 'title': '#', 'url': './item/javascript/document/' },
                // { 'title': '#', 'url': './item/javascript/document/' },
            ],
        }
    },
}
);
const JavascriptZhuangPan = Vue.component('my-component22', {
    //组件注册——代码部分html——javascript---转盘
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '转盘',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '扁平幸运大抽奖', 'url': './item/javascript/zhuanpan/扁平幸运大抽奖/index.html' },
                { 'title': '大转盘抽奖', 'url': './item/javascript/zhuanpan/大转盘抽奖/index.html' },
                { 'title': '九宫格抽奖', 'url': './item/javascript/zhuanpan/九宫格抽奖/index.html' },
                { 'title': '积分扭蛋机', 'url': './item/javascript/zhuanpan/积分扭蛋机/index.html' },
                // { 'title': '', 'url': './item/javascript/zhuanpan/' },


            ],
        }
    },
}
);
// --------------------------------------------------------javascript三级模板写入部分结束-----------------------------------------
const itemvue = Vue.component('my-component23', {
    //组件注册——代码部分vue
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内项目', 'url': '/item/vue/in' },
                { 'title': '课外拓展', 'url': '/item/vue/out' },
                { 'title': '文档项目', 'url': '/item/vue/document' },
                { 'title': '其他项目', 'url': '/item/vue/xiangmu' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Vue',
            //对应项目分类图标
            classurl: 'iconfont icon-vue'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------Vue三级模板写入部分开始-----------------------------------------
const VueIn = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---课内
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '作业提交链接', 'url': 'http://edugzsw.com/hsh_work/2023-2024-1/stu2203.html' },
                { 'title': '按钮点击次数', 'url': ' ./item/vue/in/按钮点击次数/testTemp.html' },
                { 'title': '查找手机信息', 'url': ' ./item/vue/in/查找手机信息/6.html' },
                { 'title': '登录按钮事件', 'url': ' ./item/vue/in/登录按钮事件/3.html' },
                { 'title': '登录页', 'url': ' ./item/vue/in/登录页/4.html' },
                { 'title': '查找内容', 'url': ' ./item/vue/in/动画/查找内容.html' },
                { 'title': '方格动画', 'url': ' ./item/vue/in/动画/方格动画.html' },
                { 'title': '数组添加与删除', 'url': ' ./item/vue/in/动画/数组添加与删除.html' },
                { 'title': '添加小球', 'url': ' ./item/vue/in/动画/添加小球.html' },
                { 'title': '文字动画效果3', 'url': ' ./item/vue/in/动画/文字动画效果3.html' },
                { 'title': '文字过渡效果1', 'url': ' ./item/vue/in/动画/文字过渡效果1.html' },
                { 'title': '文字过渡效果2', 'url': ' ./item/vue/in/动画/文字过渡效果2.html' },
                { 'title': '圆形动画效果', 'url': ' ./item/vue/in/动画/圆形动画效果.html' },
                { 'title': '购物价格计算', 'url': ' ./item/vue/in/购物价格计算/2.html' },
                { 'title': '判断快递费用', 'url': ' ./item/vue/in/判断快递费用/4.html' },
                { 'title': '事件', 'url': ' ./item/vue/in/事件/1.html' },
                { 'title': '事件冒泡', 'url': ' ./item/vue/in/事件冒泡/testTemp.html' },
                { 'title': '数据更新与隐藏', 'url': ' ./item/vue/in/数据更新与隐藏/test.html' },
                { 'title': '菜单视图', 'url': ' ./item/vue/in/菜单视图.html' },
                { 'title': '菜单搜索', 'url': ' ./item/vue/in/菜单搜索.html' },
                { 'title': '菜单选择', 'url': ' ./item/vue/in/菜单选择.html' },
                { 'title': '价格表合计', 'url': ' ./item/vue/in/价格表合计.html' },
                { 'title': '文字输入框', 'url': ' ./item/vue/in/文字输入框.html' },
                //  { 'title': '', 'url': ' ./item/vue/in/'},
            ],
        }
    },
}
);
const VueOut = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---课外
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'vue项目网站', 'url': './item/vue/out/vue项目网站.html' },
                { 'title': '卡片滚动', 'url': ' ./item/vue/out/vue卡片滚动/index.html' },
                // { 'title': 'vue项目网站', 'url': './item/vue/out/'},
            ],
        }
    },
}
);
const VueDocument = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---文档
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                { 'title': '#', 'url': './item/vue/document/' },
                //  { 'title': '', 'url': './item/vue/document/'}, 
            ],
        }
    },
}
);
const VueXiangMu = Vue.component('my-component23', {
    //组件注册——代码部分html——VUE---项目
    template: "#itemsectionnext",
    data() {
        return {
            titlethree: '项目模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'vue基础模版', 'url': './item/vue/model/基础模版/模版.html' },
                // { 'title': '.', 'url': './item/vue/model/'},

            ],
        }
    },
}
);
// --------------------------------------------------------vue三级模板写入部分结束-----------------------------------------
const itembootsrtap = Vue.component('my-component24', {
    //组件注册——代码部分bootstrap
    template: "#itemsectiontwo",
    data() {
        return {
            basessarr: [
                // 应输入路由路径
                { 'title': '课内内容', 'url': '/item/bootstrap/in' },
                { 'title': '课外内容', 'url': '/item/bootstrap/out' },
                { 'title': '文档内容', 'url': '/item/bootstrap/document' },
                { 'title': '网页模板', 'url': '/item/bootstrap/muban' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'BootStrap',
            //对应项目分类图标
            classurl: 'iconfont icon-bootstrap'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
// --------------------------------------------------------bootstrap三级模板写入部分开始-----------------------------------------
const BootstrapIn = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---课内
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课内内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "警告框", 'url': "./item/bootstrap/in/j警告框.html" },
                { 'title': "分页", 'url': "./item/bootstrap/in/分页.html" },
                { 'title': "列表", 'url': "./item/bootstrap/in/列表.html" },
                { 'title': "加载器", 'url': "./item/bootstrap/in/加载器.html" },
                { 'title': "卡片", 'url': "./item/bootstrap/in/卡片.html" },
                { 'title': "按钮组", 'url': "./item/bootstrap/in/按钮组.html" },
                { 'title': "进度条", 'url': "./item/bootstrap/in/进度条.html" },
                { 'title': "菜单", 'url': "./item/bootstrap/in/菜单.html" },
                { 'title': "工具提示", 'url': "./item/bootstrap/in/工具提示.html" },
                // { 'title': "", 'url': "./item/bootstrap/in/" },
            ],
        }
    },

}
);
const BootstrapOut = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---课外
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '课外内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "在线文件链接", 'url': "./item/bootstrap/out/响应式在线连接.html" },
                { 'title': "画廊模版1", 'url': "./item/bootstrap/out/bootstrap画廊模版/index.html" },
                { 'title': "画廊模版2", 'url': "./item/bootstrap/out/bootstrap画廊模版/index2.html" },
                { 'title': "画廊模版3", 'url': "./item/bootstrap/out/bootstrap画廊模版/index3.html" },
                { 'title': "画廊模版4", 'url': "./item/bootstrap/out/bootstrap画廊模版/index4.html" },
                { 'title': "轮播图", 'url': "./item/bootstrap/out/bootstrap轮播图/index.html" },
                { 'title': "二级导航带图", 'url': "./item/bootstrap/out/二级导航带图/index.html" },
                { 'title': "模版", 'url': "./item/bootstrap/out/bootstrap模版/index.html" },
                { 'title': "表格样式", 'url': "./item/bootstrap/out/bootstrap表格样式/index.html" },
                { 'title': "可编辑表格", 'url': "./item/bootstrap/out/可编辑表格boot/index.html" },
                // { 'title': "", 'url': "./item/bootstrap/out/" },
            ],
        }
    },
    titlethree: '课外内容'
}
);
const BootstrapDocument = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---文档
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '文档内容',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
                { 'title': '#', 'url': './item/bootstrap/document/' },
            ],
        }
    },

}
);
const BootstrapMuBan = Vue.component('my-component24', {
    //组件注册——代码部分html——bootstrap---model
    template: "#itemsectionnext",
    data() {
        return {
            h3name: '',
            titlethree: '网页模板',
            // 导航数据
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': "詹俊浩转天网站", 'url': "./item/bootstrap/model//詹俊浩转天网站/index.html" },
                { 'title': "线上生鲜商城", 'url': "./item/bootstrap/model/线上生鲜商城/index.html" },
                { 'title': "登录页", 'url': "./item/bootstrap/model/Login/login.html" },
                { 'title': "期末项目genshin", 'url': "./item/bootstrap/model/期末/zong/mhyguanwang/index.html" },
                { 'title': "模版-美食", 'url': "./item/bootstrap/model/1模版-美食/index.html" },
                { 'title': "模版-商务", 'url': "./item/bootstrap/model/2模版-商务/index.html" },
                // { 'title': "模版-商务", 'url': "./item/bootstrap/model/" },
            ],
        }
    },

}
);
// --------------------------------------------------------bootstrap三级模板写入部分结束-----------------------------------------
const itemphp = Vue.component('my-component25', {
    //组件注册——代码部分php
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'ftp', 'url': './item/tips/ftp.html' },
                { 'title': 'localhost-导航盘', 'url': 'http://localhost/aaa/' },
                { 'title': '登录页', 'url': 'http://localhost/bbb/item/php/登录页/login.php' },
                { 'title': '双色球', 'url': 'http://localhost/bbb/item/php/双色球/1.php' },
                { 'title': '简易相册', 'url': 'http://localhost/bbb/item/php/相册/xiang.php' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'PHP',
            //对应项目分类图标
            classurl: 'iconfont icon-php'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemopen = Vue.component('my-component26', {
    //组件注册——代码部分编程码
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': 'gitee', 'url': 'https://gitee.com/javanoteany/html_style' },
                { 'title': '3D旋转魔方', 'url': './item/programming/3D翻转魔方/index.html' },
                { 'title': '爱心飘落', 'url': './item/programming/爱心飘落/爱心飘落.html' },
                { 'title': '吹泡泡', 'url': './item/programming/吹泡泡/index.html' },
                { 'title': '罗盘时钟', 'url': './item/programming/罗盘时钟.html' },
                { 'title': '抖音罗盘', 'url': './item/programming/抖音罗盘/index.html' },
                { 'title': '黑客帝国代码雨', 'url': './item/programming/黑客帝国代码雨/index.html' },
                { 'title': '蝴蝶特效', 'url': './item/programming/蝴蝶特效/index.html' },
                { 'title': '画心', 'url': './item/programming/画心/index.html' },
                { 'title': '四叶草', 'url': './item/programming/四叶草/1.html' },
                { 'title': '烟花粒子', 'url': './item/programming/烟花/index.html' },
                { 'title': '烟花', 'url': './item/programming/烟花源码/烟花源码.html' },
                { 'title': '爱心代码', 'url': './item/programming/爱心代码.html' },
                // { 'title': '', 'url': './item/programming/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: '编程码',
            //对应项目分类图标
            classurl: 'iconfont icon-suyuanmaguanli'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemjava = Vue.component('my-component27', {
    //组件注册——代码部分java
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Java',
            //对应项目分类图标
            classurl: 'iconfont icon-java'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemmysql = Vue.component('my-component28', {
    //组件注册——代码部分mysql
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Mysql',
            //对应项目分类图标
            classurl: 'iconfont icon-mysql'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemlinux = Vue.component('my-component29', {
    //组件注册——代码部分linux
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
                { 'title': '#', 'url': '' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Linux',
            //对应项目分类图标
            classurl: 'iconfont icon-linux'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);

const itemMedium = Vue.component('my-component30', {
    //组件注册——代码部分融媒
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '融媒2022项目', 'url': './item/medium/融媒注释版/index.html' },
                { 'title': '主页', 'url': './item/medium/加载页/login.html' },
                { 'title': '加载页', 'url': './item/medium/规则页/warring.html' },
                { 'title': '规则页', 'url': './item/medium/融媒/index.html' },
                // { 'title': '规则页', 'url': './item/medium/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Medium',
            //对应项目分类图标
            classurl: 'iconfont icon-guangdianrongmei'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);
const itemelse = Vue.component('my-component31', {
    //组件注册——代码部分Else
    template: "#itemsection",
    data() {
        return {
            basessarr: [
                // 应输入a标签跳转路径
                { 'title': '猜猜我是谁', 'url': './item/else/猜猜我是谁/猜猜我是谁1.html' },
                { 'title': '学霸搞怪', 'url': './item/else/xueba/index.html' },
                { 'title': 'hong期末', 'url': './item/else/1/index.html' },
                { 'title': '导航页模版', 'url': './item/else/geek-navigation/indexs.html' },
                { 'title': '传统文化页面', 'url': './item/else/tradional/代码/index.html' },
                { 'title': '模拟植物大战僵尸', 'url': './item/else/植物大战僵尸/HTML5植物大战僵尸/index.html' },
                { 'title': '轮盘', 'url': './item/else/lunpan/index.html' },
                // { 'title': '轮盘', 'url': './item/else/' },
            ],
            // 返回对应代码页
            tiaozhuang: '/item/',
            //对应项目分类名
            thisitemname: 'Else',
            //对应项目分类图标
            classurl: 'iconfont icon-qita1'
        }
    },
    methods: {
        //点击返回保证导航对应项目代码扔为亮光，添加类brighttext
        textbrightfanhui() {
            $('#textbrighttwo').addClass('brighttext');
        }
    }
}
);


// 组件路由注册
const router = new VueRouter({
    //路由条数定义
    routes: [
        //满足路由时打开组件basess
        { path: '/', name: "basess", component: basess },
        { path: '/school', name: "school", component: school },
        { path: '/material', name: "material", component: material },
        { path: '/download', name: "download", component: download },
        {
            path: '/item', name: "item", component: item,
            // 项目代码二级项目导航路由定义
            children: [
                {
                    path: '/item/htmlcss', name: "itemhtmlcss", component: itemhtmlcss,
                    // htmlcss三级项目路由定义
                    children: [
                        { path: '/item/htmlcss/nav', name: "htmlcssnav", component: HtmlCssNav },
                        { path: '/item/htmlcss/alert', name: "HtmlcCssAlert", component: HtmlcCssAlert },
                        { path: '/item/htmlcss/404', name: "HtmlCss404", component: HtmlCss404 },
                        { path: '/item/htmlcss/banner', name: "HtmlCssBanner", component: HtmlCssBanner },
                        { path: '/item/htmlcss/box', name: "HtmlCssBox", component: HtmlCssBox },
                        { path: '/item/htmlcss/font', name: "HtmlCssFont", component: HtmlCssFont },
                        { path: '/item/htmlcss/btn', name: "HtmlCssBtn", component: HtmlCssBtn },
                        { path: '/item/htmlcss/imitate', name: "HtmlCssImitate", component: HtmlCssImitate },
                        { path: '/item/htmlcss/footer', name: "HtmlCssFooter", component: HtmlCssFooter },
                        { path: '/item/htmlcss/loading', name: "HtmlCssLoading", component: HtmlCssLoading },
                        { path: '/item/htmlcss/outtimes', name: "HtmlCssOuttimes", component: HtmlCssOuttimes },
                        { path: '/item/htmlcss/reglogin', name: "HtmlCssRegAndLogin", component: HtmlCssRegAndLogin },
                        { path: '/item/htmlcss/removephone', name: "HtmlCssRemovePhone", component: HtmlCssRemovePhone },
                        { path: '/item/htmlcss/select', name: "HtmlCssSelect", component: HtmlCssSelect },
                        { path: '/item/htmlcss/timeline', name: "HtmlCssTimeline", component: HtmlCssTimeline },
                        { path: '/item/htmlcss/else', name: "HtmlCssElse", component: HtmlCssElse },
                        { path: '/item/htmlcss/model', name: "HtmlCssModel", component: HtmlCssModel },
                        { path: '/item/htmlcss/html', name: "HtmlCssHtml", component: HtmlCssHtml },
                        // { path: '/item/htmlcss/', name: "", component:  },
                    ]
                },
                {
                    path: '/item/javascript', name: "itemjavascript", component: itemjavascript,
                    // JavaScript三级项目路由定义
                    children: [
                        { path: '/item/javascript/in', name: "JavascriptIn", component: JavascriptIn },
                        { path: '/item/javascript/out', name: "JavascriptOut", component: JavascriptOut },
                        { path: '/item/javascript/zhuangpan', name: "JavascriptZhuangPan", component: JavascriptZhuangPan },
                        { path: '/item/javascript/document', name: "JavascriptDocument", component: JavascriptDocument },
                    ]
                },
                {
                    path: '/item/vue', name: "itemvue", component: itemvue,
                    // vue三级项目路由定义
                    children: [
                        { path: '/item/vue/in', name: "VueIn", component: VueIn },
                        { path: '/item/vue/out', name: "VueOut", component: VueOut },
                        { path: '/item/vue/document', name: "VueDocument", component: VueDocument },
                        { path: '/item/vue/xiangmu', name: "VueXiangMu", component: VueXiangMu },
                    ]
                },
                {
                    path: '/item/bootstrap', name: "itembootsrtap", component: itembootsrtap,
                    // bootstrap三级项目路由定义
                    children: [
                        { path: '/item/bootstrap/in', name: "BootstrapIn", component: BootstrapIn },
                        { path: '/item/bootstrap/out', name: "BootstrapOut", component: BootstrapOut },
                        { path: '/item/bootstrap/document', name: "BootstrapDocument", component: BootstrapDocument },
                        { path: '/item/bootstrap/muban', name: "BootstrapMuBan", component: BootstrapMuBan },
                    ]
                },
                { path: '/item/php', name: "itemphp", component: itemphp },
                { path: '/item/open', name: "itemopen", component: itemopen },
                { path: '/item/java', name: "itemjava", component: itemjava },
                { path: '/item/mysql', name: "itemmysql", component: itemmysql },
                { path: '/item/linux', name: "itemlinux", component: itemlinux },
                { path: '/item/medium', name: "itemMedium", component: itemMedium },
                { path: '/item/else', name: "itemelse", component: itemelse },
            ]
        },
        { path: '/wendang', name: "wendang", component: wendang },
        { path: '/elses', name: "elses", component: elses },
        { path: '/chatgpt', name: "chatgpt", component: chatgpt },
        { path: '/game', name: "game", component: game },
        { path: '/music', name: "music", component: music },
        { path: '/video', name: "video", component: video },
        { path: '/shop', name: "shop", component: shop },
        { path: '/ps', name: "ps", component: ps },
        { path: '/teach', name: "teach", component: teach },
        { path: '/tips', name: "tips", component: tips },
        {
            path: '/adminset', name: "adminset", component: adminset,
            //  // 二级项目导航路由定义
            children: [
                { path: '/adminset/wechat', name: "adminset_wecaht", component: adminset_wechat },
                { path: '/adminset/qq', name: "adminset_qq", component: adminset_qq },
                { path: '/adminset/zhifuplay', name: "adminset_zhifuplay", component: adminset_zhifuplay },
                { path: '/adminset/wechatplay', name: "adminset_wechatplay", component: adminset_wechatplay },
            ]
        },
    ]
});


//状态管理的仓库对象
const store = new Vuex.Store({
    //状态数据的容器
    state: {
        myname: 'xmy',
        outtime: '2023年12月17日22:35:23'
    },
    //同步操作模块this.$store.commit('')
    mutations: {

    },
    //异步操作模块dispatch this.$store.dispatch('')
    actions: {

    }
});
// vue实例注册
const Box = new Vue({
    data: {

    },
    //要绑定函数
    methods: {
    },
    //v-model：''计算属性,响应式
    computed: {

    },
    //过滤器
    filters: {

    },
    //仓库
    store: store,
    //路由
    router: router

});
// 挂载函数
Box.$mount('#navigation');

// 导航条发光
// 获取全体导航
const bright = document.querySelectorAll('.textbright');
// 点击单个导航时，当前导航高亮，其他暗
$('.textbright').on('click', function () {
    $('#basessnav').removeClass('brighttext');
    $(this).addClass('brighttext').siblings().removeClass('brighttext');
});
// 二级代码项目内容点击时,保证对应代码项目导航仍然高亮
const brigthtwo = document.querySelectorAll('.textbrighttwo');
$('.textbrighttwo').on('click', function () {
    $('#basessnav').removeClass('brighttext');
    $('#textbrighttwo').addClass('brighttext');
});

//控制台输出部分
//%c特许占位符，用于修改控制台文字颜色,换行符（\n）
const setmyname = '制作者:' + store.state.myname;
const setouttime = '最后修改时间:' + "\n" + store.state.outtime;
console.log(`%c${setmyname}`, 'color:blue;font-size:2em;font-family:liuti,"楷体";');
console.log(`%c${setouttime}`, 'color:red;font-size:2em;font-family:liuti,"楷体";');