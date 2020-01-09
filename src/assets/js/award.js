// 配置文件

// 打乱数组
let sortRandom = (arr) => {
    arr.sort(function () {
        return Math.random() - 0.5;
    });
    return arr;
}

// 奖项
export const recognitionAward = val => {
    let res = {
        // "draw_1": "特别奖",
        "draw_2": "一等奖",
        "draw_3": "二等奖",
        "draw_4": "三等奖"
    }
    return res[val];
}

export const recognitionImg = val => {
    let res = {
        // "draw_1": require("../../assets/images/特别奖.png"),
        "draw_2": require("../../assets/images/一等奖.png"),
        "draw_3": require("../../assets/images/二等奖.png"),
        "draw_4": require("../../assets/images/三等奖.png")
    }
    return res[val];
}

// 特别奖名单
export const specialAwardName = () =>{
    return "王子馨"
}

// 一等奖除外名单
export const firstPrizeOf = (v) =>{
    return (v == "王建" || v == "伏冬哲" || v == "瞿绪标")
}

// 存储次数
export const storageAward = () => {
    let res = {
        // draw_1: 1,
        draw_2: 1,
        draw_3: 3,
        draw_4: 5
    };
    let award = localStorage.getItem("AwardNumber");
    res = award ? JSON.parse(award) : res;
    localStorage.setItem("AwardNumber", JSON.stringify(res));
}

// 存储名单
export const storagePeople = () => {
    let people = [
        "王建",
        "伏冬哲",
        "瞿绪标",
        "吴继红",
        "胡佳伟",
        "邵林林",
        "包义虎",
        "黄蓓",
        "贾永铭",
        "徐泽宇",
        "邹伟",
        "田阳迪",
        "兰海",
        "王博文",
        "王凯",
        "邵群",
        "田家兵",
        "邬金顺",
        "张小冲"
    ];
    let award = localStorage.getItem("AwardName");
    if (award) {
        award = sortRandom(JSON.parse(award))
    }
    people = award ? award : people;
    localStorage.setItem("AwardName", JSON.stringify(people));
}

// 中奖名单
export const winnersName = () => {
    let list = [ {
        award: "一等奖",
        thePrize: "",
        winners: "",
        icon: require("../../assets/img/draw/一等奖.png"),
        class: "firstPrize"
    }, {
        award: "二等奖",
        thePrize: "",
        winners: [],
        icon: require("../../assets/img/draw/二等奖.png"),
        class: "secondPrize"
    }, {
        award: "三等奖",
        thePrize: "",
        winners: [],
        icon: require("../../assets/img/draw/三等奖.png"),
        class: "thirdPrize"
    }]

    let nameList = localStorage.getItem("nameList");
    list = nameList ? JSON.parse(nameList) : list;
    localStorage.setItem("nameList", JSON.stringify(list));
}

export const recognitionAwardNumber = val => {
    let res = JSON.parse(localStorage.getItem("AwardNumber") || "{}")
    return res[val];
}