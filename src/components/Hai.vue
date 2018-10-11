<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm">
                1
            </div>
            <div class="col-sm">
                2
            </div>
            <div class="col-sm">
                3
            </div>
        </div>
        <button type="button" id="searchBtn" class="btn btn-primary btn-lg btn-block">查询</button>
        <table id="tabs" class="table table-hover table-striped table-bordered">
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
            <tr>
                <td>1</td>
                <td>张飒</td>
                <td>21</td>
                <td>男</td>
            </tr>
            <tr>
                <td>2</td>
                <td>李岚</td>
                <td>20</td>
                <td>女</td>
            </tr>
            <tr>
                <td>3</td>
                <td>李岚</td>
                <td>20</td>
                <td>女</td>
            </tr>
            <tr>
                <td>4</td>
                <td>李岚</td>
                <td>20</td>
                <td>女</td>
            </tr>
            <tr>
                <td>5</td>
                <td>李岚</td>
                <td>20</td>
                <td>女</td>
            </tr>
        </table>
        <button type="button" id="resetBtn" class="btn btn-info btn-lg btn-block">重置</button>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

$(function(){
    let even = {"background":"#EDA","color":"#3FF"}
    let odd = {"background":"#3DA","color":"867"}
    $("#tabs tr:even").css(even);
    $("#tabs tr:odd").css(odd);

    //查询
    $("#searchBtn").off().on("click",function(){
        let tables = $("#tabs").find("tr td"),
            no = [],
            names = [],
            ages = [],
            sexs = [];
        for(let i=0;i<tables.length;i++){
            let j = i%4;
            switch(j){
                case 0:
                    no.push(tables[i].innerText);
                    break;
                case 1:
                    names.push(tables[i].innerText);
                    break;
                case 2:
                    ages.push(tables[i].innerText);
                    break;
                case 3:
                    sexs.push(tables[i].innerText);
                    break;
                default:
                    break;
            }
        }
        console.log(no,names,sexs,ages);
    });

    //重置
    $("#resetBtn").off().on("click",function(){
        $("#tabs").empty();
    });
});
export default {
    
}
</script>
<style>
    table{
        text-align: center;
    }
</style>
