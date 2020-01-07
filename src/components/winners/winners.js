// -- NAME --

const name = 'winners';

// -- DATA --

const data = function () {
    return {
        prize: "",
        // 阳光普照奖
        sunPrize: []
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
    getPrizeName() {
        this.prize = JSON.parse(localStorage.getItem("nameList") || "[]")
    },
    getSunPrize(){
        this.sunPrize = JSON.parse(localStorage.getItem("AwardName") || "[]")
    }
};

// -- HOOKS --

function mounted() {

}

// == EXPORT ==

export default {
    name: name,

    data: data,

    components: components,

    computed: computed,

    watch: watch,

    methods: methods,

    mounted: mounted,

    created() {
        this.getPrizeName()
    }
};