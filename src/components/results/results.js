// -- NAME --

const name = 'results';

// -- DATA --

const data = function () {
    return {
        name: "",
        award:""
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
    }
};

// -- HOOKS --

function mounted() {

}

import {
    recognitionAward
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