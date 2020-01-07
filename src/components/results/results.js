// -- NAME --

const name = 'results';

// -- DATA --

const data = function () {
    return {
        name: "",
        award:"",
        src:""
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
    close() {
        this.$emit("closeResults")
    },
    // 设置奖项
    getNameOrAward(val) {
        this.name = val.resNameRandom
        this.award = recognitionAward(val.thisDraw)
        this.src = recognitionImg(val.thisDraw)
    }
};

// -- HOOKS --

function mounted() {

}

import {
    recognitionAward,
    recognitionImg
} from "../../assets/js/award.js"

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