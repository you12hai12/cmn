<template>
    <div id="accordion">
        <h3>第一季度</h3>
        <div>
           第一季度
        </div>
        <h3>第二季度</h3>
        <div>
           第二季度
        </div>
        <h3>第三季度</h3>
        <div>
           第三季度
        </div>
        <h3>第四季度</h3>
        <div>
           第四季度
        </div>
        </div>
</template>
<script>
import $ from 'jquery'
import 'jquery-ui'
import '../../node_modules/jquery-ui/ui/widgets/accordion.js'

$(function(){
    $("#accordion").accordion();
});

export default {
    
}
</script>
<style>
    @import url('../../node_modules/jquery-ui/themes/base/all.css');
</style>
