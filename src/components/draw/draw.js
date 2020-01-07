// -- NAME --

const name = 'draw';

// -- DATA --

const data = function () {
    return {
        itemsDraw: [],
        transparency: []
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

};

// -- METHODS --

const methods = {
    // 开启扭蛋机
    clickDraw(val) {
        recognitionAward(val)
        this.$emit("openDraw", val)
    },
    getTransparency(val) {
        this.transparency = JSON.parse(localStorage.getItem("AwardNumber") || "[]")
        let total = 0;

        for (const key in this.transparency) {
            if (this.transparency.hasOwnProperty(key)) {
                const element = this.transparency[key];
                if (element == 0) {
                    total++;
                    let i = key.charAt(key.length - 1)
                    setTimeout(() => {
                        $(`.draw_ul>li:nth-child(${i})`).css("opacity", "0.5")
                    }, 0)
                    if (total===4){
                        if(val){
                            setTimeout(() => {
                                this.$emit('showSun')
                            },0)
                        }else{
                            setTimeout(() => {
                                this.$emit('showSun')
                            }, 7000)
                        }
                    }
                }
            }
        }
    }
};

// -- HOOKS --

function mounted() {
    // 奖特效
    setTimeout(() => {
        this.itemsDraw = ["draw_1", "draw_2", "draw_3", "draw_4"]
    }, 0)

    this.getTransparency(1)
}

// == EXPORT ==
import {
    recognitionAward
} from "../../assets/js/award.js"

export default {
    name: name,

    data: data,

    components: components,

    computed: computed,

    watch: watch,

    methods: methods,

    mounted: mounted
};