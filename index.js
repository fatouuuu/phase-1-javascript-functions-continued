// code your solution here

//     defines saturdayFun function declaration as specified

saturdayFun(); //hoisting 
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun("bathe my dog") //default argument can be overriden 

//    defines mondayWork function expression as specified
function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}

//    defines wrapAdjective function according to the specification
function wrapAdjective(wrapIn = '*'){
    const innerFunction = function flairString (adjective = 'special'){
        adjective = wrapIn + adjective + wrapIn;
        return `You are ${adjective}!`
    } 
    return innerFunction;
}