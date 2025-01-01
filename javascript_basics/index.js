console.log('hello world');

var x;

function add() {
    var x = 9;
    if(x < 10) {
        console.log(x); // 9
        var x = 20;
        console.log(x); // 20
    }
}

// hoisting
function add1() {
    var x; // hoisting
    x = 9; // x = 9
    if(x < 10) {
        // var x; // hoisting
        console.log(x); // 9
        x = 20; // 20
        console.log(x); // x = 20
    }
}

function add2() {
    let x = 9; // x = 9
    if(x < 10) {
        console.log(x); // 9
        x = 20; // 20
        console.log(x); // x = 20
    }
}

add();
add1();
add2();
