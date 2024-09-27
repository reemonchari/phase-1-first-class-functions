function receivesAFunction(classes) {
    return classes()
}
console.log(receivesAFunction(classes = () => 'OOP'))

 function returnsANamedFunction() {
    function namedFunction(day){
    if (day === 'Monday'){
        return 'Go to class'
    }
    else if (day === 'Tuesday'){
        return 'Go for labs'
    }
    else {
        return 'Go to work'
    }
}
return namedFunction
}

function returnsAnAnonymousFunction() {
    return () => 'MAGIC!'

}
console.log(returnsAnAnonymousFunction()())
