// -- NAME --

const name = 'twistedEggMachine';

// -- DATA --

const data = function () {
    return {
        Draw_Number_Egg: 0,
        thisDrawNumber: 0,
        ican: true,
        // 抽奖人员
        drawPeople: JSON.parse(localStorage.getItem("AwardName") || "[]")
    };
};

// -- COMPUTED --

const computed = {

};

// -- COMPONENTS -- 

const components = {

}

// -- WATCH --

const watch = {
    thisDrawNumber(newVal) {
        if (newVal === 0) {
            console.log("次数为0")
        }
    }
};

// -- METHODS --

const methods = {
    // 随机排序
    sortRandom(arr) {
        arr.sort(function () {
            return Math.random() - 0.5;
        });
        return arr;
    },
    // 范围随机数
    randomNum(maxNum, minNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1);
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
            default:
                return 0;
        }
    },
    closeEgg() {
        this.$emit("closeDraw")
    },
    // 小球晃动
    ballMoving(fn) {
        for (let i = 1; i <= 11; i++) {
            $(".qiu_" + i).removeClass("diaol_" + i);
            $(".qiu_" + i).addClass("wieyi_" + i);
        }

        setTimeout(function () {
            for (let i = 1; i <= 11; i++) {
                $(".qiu_" + i).removeClass("wieyi_" + i);
            }
        }, 3100);

        if (fn) fn();
    },
    // 小球动画结束及掉落
    drop(number) {
        setTimeout(function () {
            switch (number) {
                case 1:
                    $(".zjdl").children("span").addClass("diaL_one");
                    break;
                case 2:
                    $(".zjdl").children("span").addClass("diaL_two");
                    break;
                case 3:
                    $(".zjdl").children("span").addClass("diaL_three");
                    break;
                case 4:
                    $(".zjdl").children("span").addClass("diaL_four");
                    break;
            }
            $(".zjdl").removeClass("none").addClass("dila_Y");
        }, 3100)

        //动画结束 

        setTimeout(() => {
            this.ican = true;
            $(".zjdl").addClass("none").removeClass("dila_Y");
            $(".zjdl").children("span").removeAttr('class');
        }, 4500)
    },
    // 设置中奖名单
    setWinnersName(list) {
        let i_list = JSON.parse(localStorage.getItem("nameList") || "[]")
        let draw = recognitionAward(list.thisDraw)
        i_list.forEach(v => {
            if (v.award == draw) {
                if (v.winners instanceof Array) {
                    v.winners.push(list.resNameRandom)
                } else {
                    v.winners = list.resNameRandom
                }
            }
        })

        localStorage.setItem("nameList", JSON.stringify(i_list))
        setTimeout(() => {
            this.$emit('updatedWinner')
        }, 3000)
        console.log(list, i_list, recognitionAward(list.thisDraw))
    },
    draw() {
        if (!this.ican || !this.thisDrawNumber) return;
        this.ican = false;
        this.thisDrawNumber--;
        let res = JSON.parse(localStorage.getItem("AwardNumber") || "{}");
        res[this.thisDraw] = this.thisDrawNumber;
        localStorage.setItem("AwardNumber", JSON.stringify(res));
        this.$emit('updatedDraw')

        // 随机扭蛋机出蛋动画
        this.Draw_Number_Egg = Math.floor(4 * Math.random() + 1);
        let that = this;
        let resNameRandom;

        if (this.thisDraw !== "draw_1") {

            // 随机排序数组
            this.drawPeople = this.sortRandom(this.drawPeople);

            let arr = []
            if (this.thisDraw === "draw_2") {
                for (var i = this.drawPeople.length - 1; i >= 0; i--) {
                    if (firstPrizeOf(this.drawPeople[i])) {
                        arr.push(this.drawPeople[i])
                        this.drawPeople.splice(i, 1)
                        console.log(this.drawPeople, i, arr)
                    }
                }
            }
            // 抽奖及存储
            let resNumberRandom = this.randomNum(this.drawPeople.length - 1, 0);
            resNameRandom = this.drawPeople[resNumberRandom];
            if (firstPrizeOf(resNameRandom)) {
                console.log("chong")
            }
            if(arr){
                arr.forEach(v => {
                    this.drawPeople.push(v)
                });
            }
            this.drawPeople.splice(resNumberRandom, 1)
            localStorage.setItem("AwardName", JSON.stringify(this.drawPeople));

            console.log(resNameRandom, this.drawPeople, "999999999999")
        }

        this.ballMoving(() => {
            this.drop(this.Draw_Number_Egg)
        })

        // 开启倒计时结果
        setTimeout(function () {
            that.$emit("openCountDown")
            let val;

            // 固定特等奖
            if (that.thisDraw !== "draw_1") {
                val = {
                    resNameRandom,
                    thisDraw: that.thisDraw
                }
            } else {
                val = {
                    resNameRandom: specialAwardName(),
                    thisDraw: that.thisDraw
                }
            }
            that.setWinnersName(val)

            console.log("shhshsh", val)
            // 公布名单
            that.$emit('triggerBrotherMethod', val)
            setTimeout(function () {
                if (that.thisDrawNumber === 0) {
                    that.closeEgg()
                }
            }, 3000)
        }, 3500)
    }
};

// -- HOOKS --

function mounted() {
    let that = this;

    this.thisDrawNumber = recognitionAwardNumber(this.thisDraw)
    console.log(this.thisDrawNumber, this.thisDraw, 111111)

    $(document).ready(function () {
        $(".game_go").click(function () {
            that.draw()
        });
    });
}

// == EXPORT ==

import {
    recognitionAwardNumber,
    specialAwardName,
    recognitionAward,
    firstPrizeOf
} from "../../assets/js/award.js"

export default {
    name: name,

    data: data,

    components: components,

    computed: computed,

    watch: watch,

    methods: methods,

    mounted: mounted,

    props: ["thisDraw"]
};