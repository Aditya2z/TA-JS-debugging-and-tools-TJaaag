function add(num1, num2) {
    test(`Input must be a number`, () => {
        expect(num1).checkInputType('number');
        expect(num2).checkInputType('number');
    });
return num1 + num2;
};



//Testing Framework
function test(message, callback) {
    try{
        callback();
        console.log(`✅`, message);
    } catch(error) {
        console.error(error);
        console.log(`❌`, message);
    }
}

//Assertions Library
function expect(actual) {
    return {
        checkInputType: function (expected) {
            if(typeof actual !== expected) {
                throw new Error(`${actual} is not a ${expected}`);
            }
        },
        toEqual : function (expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

//Tests
test(`Input must be a number`, () => {
    expect(add(10, 10)).checkInputType('number');
})

test(`test for addition 10 + 10 = 20`, () => {
    expect(add(10,10)).toEqual(20);
})
test(`test for addition 25 + 25 = 50`, () => {
    expect(add(25,25)).toEqual(50);
})
test(`test for addition 52 + 52 = 104`, () => {
    expect(add(52,52)).toEqual(104);
})
test(`test for addition 52 + 25 = 77`, () => {
    expect(add(52,25)).toEqual(77);
})
test(`test for addition 65 + 45 = 110`, () => {
    expect(add(65,45)).toEqual(110);
})

//Multiply Function
function multiply(num1, num2) {
    test(`Input must be a number`, () => {
        expect(num1).checkInputType('number');
        expect(num2).checkInputType('number');
    });
return num1 * num2;
}

//Tests

test(`test for multiplication 2 * 10 = 20`, () => {
    expect(multiply(2, 10)).toEqual(20);
});
test(`test for multiplication 2 * 25 = 50`, () => {
    expect(multiply(2, 25)).toEqual(50);
});
test(`test for multiplication 2 * 52 = 104`, () => {
    expect(multiply(2, 52)).toEqual(104);
});
test(`test for multiplication 26 * 3 = 78`, () => {
    expect(multiply(26,3)).toEqual(78);
});
