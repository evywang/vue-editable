# vue-editable

基于vuejs的快速可编辑插件,QQ讨论群: 240319632。

# 修改

修改IE 上导致Vue patchVnode失败的问题

![](http://ww1.sinaimg.cn/large/823603acgw1ez9njhopgwg20dv07iq61.gif)
 

# 引入插件
```
var VueEditable= require('./plugins/vue-editable.js');
Vue.use(VueEditable);

```
# 组件上应用

```
<template>
    <table>
    <tr v-for="user in data">
        <td class="text center" @dblclick="editable($event,'name',user)">{{user['name']}}</td>
    </tr>
    </table>
</template>

<script>
module.exports = {
    methods:{
        /*
            e     :事件
            field :字段，用于告诉服务端要更新哪个字段
            user  :列表中某一行数据
         */
        editable:function(e,field,user){
            var that=this;
            that.$editable(e,function(value){
                // 这里做ajax请求
                //如果数据没有被修改这个回调方法不会执行
            },  // 自定义input样式
            {font-size:14px});
        }
    }
}
</script>
```