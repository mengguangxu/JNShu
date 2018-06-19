//类型
myApp.constant('list',{
    0:'首页banner',
    1:'找职位banner',
    2:'找精英banner',
    3:'行业大图'
});
myApp.filter('typeFilter',function(){
    return function(types){
        switch(types){
            case 0:
                return '首页banner';
            case 1:
                return '找职位banner';
            case 2:
                return '找精英banner';
            case 3:
                return '行业大图';
        }
    };
});
//状态
myApp.constant('listStatus',{
    1:'草稿',
    2:'上线'
});
myApp.filter('statusFilter',function(){
    return function(listStatus){
        switch(listStatus){
            case 1:
                return '草稿';
            case 2:
                return '上线';
        }
    }
});
//上下线
myApp.constant('down',{
    1:'上线',
    2:'下线'
});
myApp.filter('downFilter',function(){
    return function(down){
        switch(down){
            case 1:
                return '上线';
            case 2:
                return '下线';
        }
    }
});
//新增，编辑
myApp.constant('industry1',{
        0:'移动互联网',
        1:'电子商务',
        2:'企业服务',
        3:'O2O',
        4:'教育',
        5:'金融',
        6:'游戏'
});
myApp.filter('articleFilter',function(){
    return function(industry){
        switch(industry){
            case 0:
                return '移动互联网';
            case 1:
                return '电子商务';
            case 2:
                return '企业服务';
            case 3:
                return 'O2O';
            case 4:
                return '教育';
            case 5:
                return '金融';
            case 6:
                return '游戏';
        }

    }
});
myApp.filter("contentFilter", function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    }
});

myApp.constant("sidebarList",[
    {
        firstLevel: "信息管理",
        secondLevel:[
            {title: "公司列表", url: ""},
            {title: "职位列表", url: ""}
        ]
    },
    {
        firstLevel: "Article管理",
        secondLevel:[
            {title: "Article列表", url: "backstage.list"},
            {title: "文章管理", url: ""}
        ]
    },
    {
        firstLevel: "用户管理",
        secondLevel:[
            {title: "用户列表", url: ""}
        ]
    },
    {
        firstLevel: "内容管理",
        secondLevel:[
            {title: "视频管理", url: ""}
        ]
    }
]);
