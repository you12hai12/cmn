<template>
    <div id="trees">
        <div class="tree-box">
            <div class="left">
                <ul id="treeData" class="ztree"></ul>
            </div>
        </div>
    </div>
</template>
<script>
//引入ztree插件
import $ from 'jquery'
import '../../plugins/zTree/js/jquery-1.4.4.min.js'
import '../../plugins/zTree/js/jquery.ztree.core.js'
import '../../plugins/zTree/js/jquery.ztree.excheck.js'

export default {
    name:'',
    data(){
        return{
            setting:{
                check:{
                    enable:true,
                    nocheckInherit:false,
                    chkboxType:{"Y":"p","N":"s"}
                },
                data:{
                    simpleData:{
                        enable:true
                    }
                },
                callback:{
                    beforeClick:this.beforeClick,
                    onClick:this.zTreeOnClick,
                    onCheck:this.zTreeOnCheck
                }
            },
            zNodes:[{ 
                name:"父节点1 - 展开", open:true,
                children: [
                    { name:"父节点11 - 折叠",
                        children: [
                            { name:"叶子节点111"},
                            { name:"叶子节点112"},
                            { name:"叶子节点113"},
                            { name:"叶子节点114"}
                        ]},{ 
                        name:"父节点12 - 折叠",
                        children: [
                            { name:"叶子节点121"},
                            { name:"叶子节点122"},
                            { name:"叶子节点123"},
                            { name:"叶子节点124"}
                        ]},{ 
                            name:"父节点13 - 没有子节点", isParent:true
                        }
                ]},{ 
                name:"父节点2 - 折叠",
                children: [
                    { name:"父节点21 - 展开", open:true,
                        children: [
                            { name:"叶子节点211"},
                            { name:"叶子节点212"},
                            { name:"叶子节点213"},
                            { name:"叶子节点214"}
                        ]},
                    { name:"父节点22 - 折叠",
                        children: [
                            { name:"叶子节点221"},
                            { name:"叶子节点222"},
                            { name:"叶子节点223"},
                            { name:"叶子节点224"}
                        ]},
                    { name:"父节点23 - 折叠",
                        children: [
                            { name:"叶子节点231"},
                            { name:"叶子节点232"},
                            { name:"叶子节点233"},
                            { name:"叶子节点234"}
                        ]}
                ]},
            { name:"父节点3 - 没有子节点", isParent:true}
        ]}
    },
    methods:{
        freshData:function(){
            $.fn.zTree.init($("#treeData"), this.setting, this.zNodes);
        },
         beforeClick:function(treeId,treeNode){
            let zTree = $.fn.zTree.getZTreeObj("treeData");
            zTree.checkNode(treeNode,!treeNode.checked,true,true);
            return false;
        },
        zTreeOnClick:function(event,treeId,treeNode){
            console.log(treeNode.id,treeNode.name);
        },
        zTreeOnCheck:function(event,treeId,treeNode){
            let zTree = $.fn.zTree.getZTreeObj("treeData");

        }
    },
    mounted(){
        $.fn.zTree.init($("#treeData"), this.setting, this.zNodes);
    }
}
</script>
<style>
    @import url('../../plugins/zTree/css/zTreeStyle/zTreeStyle.css');
</style>
