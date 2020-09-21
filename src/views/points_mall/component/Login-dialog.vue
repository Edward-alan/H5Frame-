<template>
    <div class="login-box">
        <van-dialog class="popout" v-model="show" width="690px" :show-cancel-button="false" :show-confirm-button="false">
                <div class="h-i-box">
                    <div class="l-i-box"></div>
                    <div class="r-i-box" @click="quxiao"></div>
                </div>
            <div class="wenzi-box">证件识别</div>
            <div class="sfz-box"></div>
        </van-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show:false
            }
        },
        methods:{
            xianshi(){
                this.show = true
            },
            quxiao(){
                this.show = false
            }
        }
    }
</script>

<style lang="less">
        .login-box{
            .van-overlay{
                left:100%;
            }
            .popout{
                left:150%;
            }
            .h-i-box{
                width: 109px;
                height: 36px;
                margin-left: 539px;
                margin-top: 26px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .l-i-box{
                width: 33px;
                height: 36px;
                background-color: #362E2F;
            }
            .r-i-box{
                width: 33px;
                height: 36px;
                background-color: #C51729;

            }
            .wenzi-box{
                width: 120px;
                height: 40px;
                color: #121212;
                font-family: "PingFang SC";
                font-size: 30px;
                text-align: center;
                line-height: 40px;
                margin-left: 285px;
            }
            .sfz-box{
                width: 488px;
                height: 288px;
                margin-top: 38px;
                margin-left: 101px;
                background-color: #FEDA84;
                margin-bottom: 70px;
            }
        }
</style>