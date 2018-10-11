<template>
    <div class="tree-div">
        <vue-ztree :list.sync='ztreeData' 
                   :func='checkNode' 
                   :expand='expandClick' 
                   :contextmenu='contextmenuClick' 
                   :is-open='true'></vue-ztree>
    </div>
</template>
<script>
import vueZtree from '../../node_modules/vue-ztree/src/components/vue-ztree.vue'

export default {
    data(){
        return{
            ztreeData:[{
                id:1,
                name:'音乐',
                children:[]
            },{
                id:2,
                name:'视频',
                children:[{
                    id:3,
                    name:'电影',
                    children:[]
                },{
                    id:4,
                    name:'短片',
                    children:[]
                }]
            },{
                id:5,
                name:'短文',
                children:[]
            }]
        }
    },
    methods:{
        checkNode:function(n){
            console.log(JSON.parse(JSON.stringify(n)));
        },
        expandClick:function(e){

        },
        contextmenuClick:function(c){

        }
    },
    components:{
        vueZtree
    }
}
</script>
<style>
    .tree-div{
        width: 200px;
        height: 300px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16px;
        font-weight: bolder;
        background: linear-gradient(red,yellow);
        background: -webkit-linear-gradient(red,yellow);
        background: -moz-linear-gradient(red,yellow);
        border-radius: 200px;
    }
</style>
