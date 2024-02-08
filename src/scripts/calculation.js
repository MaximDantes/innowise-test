const calculation = {
    calculateString(str) {
        //TODO remove eval
        return eval(str)
    },

    changeSign(str) {
        return this.calculateString(str) * -1
    },
}

export default calculation
