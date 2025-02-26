import * as expressionVerification from './expressionVerification.js'



let expression = ''
const displayExpression = document.querySelector('#expression')
const displayResult = document.querySelector('#result')




function evaluateExpression(expression) {
    try {
        return math.evaluate(expression)
    } 
    catch(error) {
        console.error("Erreur lors de l'évaluation de l'expression", error.message)
        return 'Erreur ! Voir console.'
    }
}

function normalizeExpression(expression) {
    return expression
        .replace(/−/g, "-") 
        .replace(/×/g, "*") 
        .replace(/÷/g, "/")
}




document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const btnValue = event.target.textContent
        expression += btnValue
        displayExpression.textContent = expression
    })
})

document.querySelector('#ac').addEventListener('click', (event) => {
    expression = ''
    displayExpression.textContent = ''
    displayResult.textContent = ''
})

document.querySelector('#delete').addEventListener('click', (event) => {
    expression = expression.slice(0, expression.length - 1)
    displayExpression.textContent = expression
})

document.querySelector('#confirm').addEventListener('click', (event) => {
    if(expression == '') {
        displayResult.textContent = 'Veuillez saisir une expression !'
    }
    else { 
        if(expressionVerification.verificationStart(expression) && 
        expressionVerification.verificationEnd(expression) &&
        expressionVerification.verificationDoubleSymbol(expression) &&
        expressionVerification.verificationParentheses(expression) &&
        expressionVerification.verificationDiviseZero(expression)) {
            displayResult.textContent = evaluateExpression(normalizeExpression(expression))
        } 
        else {
            displayResult.textContent = 'Expression incorrecte !'
        }
    }    
})