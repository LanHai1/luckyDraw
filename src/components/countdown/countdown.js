// -- NAME --

const name = 'countdown';

// -- DATA --

const data = function () {
    return {
        img1: false,
        img2: false,
        img3: true
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
    close(){
        this.$emit("closeCountDown")
    }
};

// -- HOOKS --

function mounted() {
    // 倒计时动画
    let countDownImg3 = $(".countdown_box>.img_3")
    let countDownImg2 = $(".countdown_box>.img_2")
    let countDownImg1 = $(".countdown_box>.img_1")
    countDownImg3.css({
        "animation": "move1 1s"
    })
    setTimeout(() => {
        this.img3 = this.img1 = false
        this.img2 = true
        countDownImg2.css({
            "animation": "move1 1s"
        })
        setTimeout(() => {
            this.img3 = this.img2 = false
            this.img1 = true
            countDownImg1.css({
                "animation": "move1 1s"
            })
            setTimeout(()=>{
                this.close()
                this.$emit("openResults")
            },1000)
        }, 1000)
    }, 1000)
}

// == EXPORT ==

export default {
    name: name,

    data: data,

    components: components,

    computed: computed,

    watch: watch,

    methods: methods,

    mounted: mounted
};
1