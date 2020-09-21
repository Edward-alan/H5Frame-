<template>
    <div class="boxs">
        <div class="wenzi">
            <div class="line"></div>
            <div style="width: 93px;height: 25px;color: #362E2F;;font-family: 'PingFang SC';font-size: 18px;margin-left: 5px">
                常用小程序
            </div>
        </div>
        <div class="applets-box">
            <div class="search" @click="searchOff">
                <div style="font-size: 16px;color: #362E2F;opacity: 30%">全部小程序</div>
                <img src="@/assets/icon.png" alt="">
            </div>
            <div class="icon-box">
                <div class="icon" @click="draw">
                    <img src="@/assets/juxin(4).png" alt="">
                    <div style="font-size: 14px;font-family: 'PingFang SC';color: #362E2F;width: 72px;text-align: center">客户号开立</div>
                </div>
                <div class="icon">
                    <img src="@/assets/juxin(1).png" alt="">
                    <div style="font-size: 14px;font-family: 'PingFang SC';color: #362E2F;width: 72px;text-align: center">客户信息</div>
                </div>
                <div class="icon">
                    <img src="@/assets/juxin(2).png" alt="">
                    <div style="font-size: 14px;font-family: 'PingFang SC';color: #362E2F;width: 72px;text-align: center">客户群管理</div>
                </div>
                <div class="icon">
                    <img src="@/assets/juxin(3).png" alt="">
                    <div style="font-size: 14px;font-family: 'PingFang SC';color: #362E2F;width: 72px;text-align: center">简约开户</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Applets",
        methods: {
            draw(){
                this.$router.push('/Cientele')
            },
            searchOff(){
                this.$router.push('/deposit')
            }
        }
    }
</script>

<style lang="less">
    .boxs {
        .wenzi {
            width: 462px;
            height: 25px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        .line {
            width: 3px;
            height: 16px;
            background-color: #C51729;
            border-radius: 1.5px;
        }

        .applets-box {
            width: 462px;
            height: 176px;
            border-radius: 10px;
            background-color: #FFFFFF;
            box-shadow: 0px 8px 16px 0px #F6F0F0;
            margin-top: 16px;
            padding-top: 10px;
            box-sizing: border-box;
        }

        .search{
            width: 442px;
            height: 36px;
            border-radius: 16px;
            background-color: #F9F9F9;
            text-align: center;
            line-height: 36px;
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .icon-box{
            width: 462px;
            height: 68px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 15px;

        }
        .icon{
            width: 68px;
            height: 68px;
        }
    }


</style>