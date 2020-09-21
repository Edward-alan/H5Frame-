<template>
    <div class="box">
        <van-tabs v-model="activeName" title-active-color="#C51729">
            <van-tab title-style="font-size:20px;flex-basis:20%" title="猜你喜欢" name="a">
                <ul class="btn-box">
                    <li class="btn" @click="choose(index)" :class="{active:val==index}"
                        :style="getwidth(index)" v-for="(item,index) of data" :key="index">{{item.nr}}
                    </li>
                </ul>
                <div class="zs-box" @click="toDetails">
                    <div class="img-box">
                        <div class="top-box"></div>
                        <div class="bottom-box">
                            <div class="font-top">100元权益券</div>
                            <div class="font-middle">88积分+49.9元~60元</div>
                            <div class="font-bottom">已兑换1111件</div>
                        </div>
                    </div>
                    <div class="img-box">
                        <div class="top-box"></div>
                        <div class="bottom-box"></div>
                    </div>
                    <div class="img-box">
                        <div class="top-box"></div>
                        <div class="bottom-box"></div>
                    </div>
                </div>
            </van-tab>
            <van-tab title-style="font-size:20px;flex-basis:20%;font-family: PingFang SC;" title="影音娱乐" name="b">内容 2</van-tab>
            <van-tab title-style="font-size:20px;flex-basis:20%;font-family: PingFang SC;" title="精品好货" name="c">内容 3</van-tab>
            <van-tab title-style="font-size:20px;flex-basis:20%;font-family: PingFang SC;" title="甄选美食" name="d">内容 2</van-tab>
            <van-tab title-style="font-size:20px;flex-basis:20%;font-family: PingFang SC;" title="酒店出行" name="e">内容 3</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'a',
                val: "",
                data: [
                    {nr: "全部", flag: "a"},
                    {nr: "1-100", flag: "b"},
                    {nr: "100-500", flag: "c"},
                    {nr: "500-1000", flag: "d"},
                    {nr: "1000以上", flag: "e"},
                ]
            };
        },
        methods: {
            getwidth(v) {
                if (v == '2') {
                    return "width:84px"
                } else if (v == '3') {
                    return "width:94px"
                } else if (v == '4') {
                    return "width:87px"
                }else if(v== '1'){
                    return "width:65px"
                }

            },
            choose(v) {
                this.val = v
            },
            toDetails(){
                this.$router.push("/Detail")
            }

        }
    }
</script>

<style lang="less">
    .box {
        width: 492px;
        height: 100%;
        box-shadow: 0px 8px 16px 0 #F6F0F0;
        margin-left: 20px;
        background-color: white;
        margin-top: 35px;
        border-radius: 12px;

        .btn-box {
            width: 452px;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 32px;
            margin-left: 20px;
        }

        .btn {
            width: 59px;
            height: 26px;
            border-radius: 16px;
            border: solid 1px #CCC0C1;
            text-align: center;
            line-height: 26px;
            color: #CCC0C1;
            font-size: 14px;
        }

        .active {
            color: #C51729;
            border: solid 1px #C51729;
        }

        .zs-box {
            width: 492px;
            height: 214px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 25px;
        }

        .img-box {
            width: 146px;
            height: 214px;
            border: solid 1px #DCDCDC;
            border-radius: 12px;
        }

        .top-box {
            width: 100%;
            height: 146px;
            background-color: #F6F0F0;
        }

        .bottom-box {
            width: 100%;
            height: 68px;
        }

        .font-top {
            width: 129px;
            height: 20px;
            margin-left: 17px;
            font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #362E2F;
            font-family: "PingFang SC";

        }

        .font-middle {
            width: 128px;
            height: 20px;
            margin-left: 17px;
            font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top: 4px;
            margin-bottom: 4px;
            color: #C51729;
            font-family: "PingFang SC";
        }

        .font-bottom {
            width: 77px;
            height: 17px;
            margin-left: 17px;
            font-size: 12px;
            font-family: "PingFang SC";
            color: #362E2F;
        }
    }
</style>