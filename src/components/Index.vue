<template>
    <div>
        <h1>欢迎</h1>
        <br>
        <label>{{content}}</label>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:"光临XX公司"
        }
    }
}
</script>
<style>
    label{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
        font-weight: bolder;
        background: -moz-repeating-radial-gradient(red,blue,yellow);
        background: -webkit-repeating-radial-gradient(red,blue,yellow);
        background: repeating-radial-gradient(red,blue,yellow);
    }
</style>
