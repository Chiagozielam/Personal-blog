---
title: "Let, Const, Var - How They Differ"
date: "Oct 8, 2019"
keywords: "spillcode, spillili, programming, maths, difficult, variable declarations, let, const, var, block scope, universal scope, bubbling, encapsulation"
image: "https://miro.medium.com/max/2000/1*kZXDtoVrpI8Ynwjo2jtKSA.png"
---

*In this tutorial, I would gradually walk you through understanding the concept behind the various kinds of variable declarations, how they work, and the best scenarious to make use of them*

### PREREQUISITES
- I expect that you have begun learning the basics of JavaScript and wish to have a better understanding of variable declarations and how they work.


### INTRODUCTION

`Var`, for many years has been the *goto* guy for declaring variables. A lot of new things were added to JavaScript as many knew it in 2015 with the emergence of ES6. While many people have adopted some of these changes ( of which many are mind blowing ), many people sill find it confusing on when to use which and what exactly the difference is. If this is you ( or you just want to enjoy an awesome article by me 😊 ), Let's begin!

### Key Concepts
I will be using these concept as we procees, so it's nice youget used to them upfront.
- **Scope**: The scope refers to where variables and functions are accessible from in different parts of the whole program  or code. We would discuss the two types of scope later in this tutorial, which includes the ***local scope*** and the ***block scope***
- **Block**: A code block is a grouping of two or more statements. This is done by enclosing the statements between opening and closing curly braces. Once a block of code has been created, it becomes a logical unit that can be used any place that a single statement can. Anything within a pair of curly braces is a block of code.  
- **Hoisting** : Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.  
>>
`NOW WE BEGIN....`

### VAR
`Var` was the boss. Yes! before ES6, var reigned as king in the JavaScript universe. But as time went on, there were few flaws found in the `var` declaration type, and something had to be done. `var`  is both locally / functionally scoped and globally scoped: This means that When a variable is declared with the keyword `var` outside of a function, it is globally available for use throughout the whole program ( be it inside of a function or outside ), and when a variable is declared with the `var` keyword inside  a function call, the variable is scoped locally and is only available inside the function declaration.  
Let's look at an example:
---
```
var name = "Daniel Don";  
function sayNameAndAge(){  
    var age = 2000;`  
    console.log("My name is " + name + ", I'm " + age)   
};  
sayNameAndAge()`*// My name is Daniel Don, I'm 2000*  
console.log(age)`*// error: age is not defined*
```
---

  
In the example above, when we try to log ***age*** outside of the function it is declared in, this gives us an error, while the variable declared outside the function is still available inside the function call. This further explains what we mean by the local or global scope.  
  
One problem with using the `var` keyword is the variables declared with it could be **Redeclared** or **Updated**  
This means that two variables could be declared with the same name in the same scope and there won't be an error. This could lead to several problems when you probably forget that you already have a variable with a particular name and then you use the same name to declare a new variable, no error is thrown now, but later on as you proceed coding, you having strange output results you never bargained for. These kind of errors led to the the emergence of the new ways to declare variables.

### LET
The `let` variable declaration type was created and has almost replaced every scenario you would have to use the `var` before now. Variables declared with the `let` keyword could be **Updated** but not **Redefined**:  
>>
```
let idea = "I want to build the new facebook!"  
let idea = "I think I now prefer to build google from scratch!"

// Error: Cannot redefine variables defined with the let keyword
 ```
>>
The above example would throw an **error** as you cannot redefine variables declared with the let keyword  
>>
```
let idea = "I'll just buy the world"  
idea = " I'll settle for planet earth!"  

console.log(idea) // I'll settle for planet earth!
```
>>
This worked because here we are updating the value of the variable already declared without redefining it.  
The above examples helps us solve the problems we encountered when defining keywords with `var`, no more redefining variables unknowingly because not it would throw an **error**.  
The `let` keyword also defines blocked scoped variables. This means that variables would only be available or accessable in between the two curly braces where it is defined and variables mutated inside an child function or scope still maintains its original value when used again from the parent scope.   
To explain this, I'll give an example:  
>>
>>
```
 function() {  
   let number = 1`  
   function() {  
      number = 2;  
      console.log(number`*// 2)  
    }  
   console.log(number)// 1  
}
```  
>>
In the above example we see that the variable ***number*** remains as **1** in the main block even after it was changed to **2** in an inner block. This tells us that when using the `let` keyword, same variable could be assigned different values depending on the scope it is being used in. This is a plus, because sometimes we need functionalities like this where we do not want to change the original value of our variable but only change it in a specific scope in our program.  
The `let` keyword is now widely adopted instead of the `var` keyword because of the problem it solves and the advantages it comes with.

### CONST
 Variables declared with the `const` keyword are very similar to  the variables declared with the `let` keyword, All the properties stated above for the `let` keyword is the same for the var keyword, except, Variables declared with the `const` keyword are **constants** and such, the value of a constant can't be changed through reassignment, and it can't be redeclared.  
 Here is an example:  
>>
```
const number = 42;  
number = 55 // Uncaught TypeError: Assignment to constant variable.
```  
>>
Here, we try to reassign another value to the already decalared **constant** variable, this doesn't work but returns a ***TypeError***.  
>>
The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered, This is same for when the content is an array.  
Let's look at an example where we add an extra item to an array declared with the `const` keyword
>>
```
const arr = [1, 2, "cat", "universe"];  
arr.push("Mutation");  
console.log(arr); // [1, 2, "cat", "universe", "Mutation"]  
```

>>

Let's try another example, this time with an object:

>>
```
const obj = {name: "Daniel Don", hobby: "Watching movies", currentMovie: "Blacklist 5"};  
obj.dream = "To make money"  
console.log(obj);` *//{name: "Daniel Don", hobby: "Watching movies", currentMovie: "Blacklist 5", dream: "To make* *money"}*
```
>>

The `const` variable declaration type has really saved a lot of lives 😅, now you can be sure that anytime you ( or someone else with your code ) unknowingly try to reassign or redeclare a variable, it throws an error and points you to the right direction.

### KET NOTES
1. `let` and `const` were introduced in ES6.
2. Variables declared with the `var` keyword can be redefined and reassigned in the same scope.
3. Variables declared with the `var` keyword are scoped both globally and functionally, depending on the use case
4. `const` and `let` are block scoped
5. Variables declared with the `let` keyword can be reassigned but cannot be redefined in the same scope, while the `const` variables can neither be reassigned or redefined in the same scope.
6. the `const` variable type could still be mutated, example: when it stores an object or an array.

>>
Thanks for reading!  
Follow me on [Twitter](https://twitter.com/spillcode) and tell me how this helped you, or leave a comment and a reaction!