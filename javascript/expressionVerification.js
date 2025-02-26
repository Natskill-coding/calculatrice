export function verificationStart(expression) {
    const listSymbols = ['+', '−', '×', '÷', '.', ')']
    if(listSymbols.includes(expression[0])) {
        return false
    } else {
        return true
    }
}

export function verificationEnd(expression) {
    const listSymbols = ['+', '−', '×', '÷', '.', '(']
    if(listSymbols.includes(expression[expression.length - 1])) {
        return false
    } else {
        return true
    }
}

export function verificationDoubleSymbol(expression) {
    const listSymbols = ['+', '−', '×', '÷', '.']
    for(let i = 0; i < expression.length - 1; i += 1) {
        if(listSymbols.includes(expression[i])) {
            if(listSymbols.includes(expression[i + 1])) {
                return false
            }
        }
    }
    return true
}

export function verificationParentheses(expression) {
    let stack = []
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == '(') {
            stack.push(expression[i])
        } else if(expression[i] ==')') {
            if(stack.length == 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length == 0
}

export function verificationDiviseZero(expression) {
    for(let i = 0; i < expression.length - 1; i++) {
        if(expression[i] == '÷') {
            if(expression[i + 1] == '0') {
                return false
            }
        }
    }
    return true
}