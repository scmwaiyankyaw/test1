const PI = 3.14
function add(a, b){
    return a + b
}

function div(a, b){
    if(b === 0) return "Cannot divided by zero"
    else return a/b
}

module.exports = {PI:PI, div:div, add:add}
