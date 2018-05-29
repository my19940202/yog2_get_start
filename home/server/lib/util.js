// 重新熟悉一下 nodejs的写法
module.exports.generateArr = function (len) {
    var numArr = [];
    len = len ? len : 10;
    for( var i=1; numArr.push(i++) < len;);
    return numArr;
}

module.exports.Square = class Square {
    constructor(width) {
        this.width = width;
    }

    area() {
        return this.width * this.width;
    }
};

// module.exports 和 exports的区别
// exports是引用 module.exports的值。module.exports 被改变的时候，exports不会被改变
exports.a = function(){
    console.log('a')
}

module.exports.a = 2;
exports.a = 1 