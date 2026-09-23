/*============================================================================
============================== CONFIGURATION =================================
============================================================================*/
const num = [10, 20, 5, 25, 30, 5, 2, 17];

const names = [
    "Farrell",
    "Abner",
    "Hanif",
    "Daffa",
    "Adi"
];

const user = [
    { id: 1, name: "Farrell", age: 19 },
    { id: 2, name: "Hanif", age: 19 },
    { id: 3, name: "Daffa", age: 19 },
    { id: 4, name: "Abner", age: 19 },
    { id: 5, name: "Adi", age: 19 }
];

const config = {
    appName: "Farrell's Utility Library",
    version: "1.0.0",
    debug: true
};

function debug(value) {
    if(config.debug) {
        console.log(value)
    };
};


/*============================================================================
============================== ENTER THE GAME !!! ============================
============================================================================*/

function numToBoolean (number) {
	return Boolean(number);
};

function checkOddsOrEvens(number) {
    if (number % 2 === 0) {
        return `${number} is an evens number!`;

    } else { 
        return `${number} is an odds number!`; 

    }
};

function isEmpty(value) {
    if (
        value === null || 
        value === undefined || 
        typeof value === "number"|| 
        typeof value === "boolean" 
    ) return false;

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    for (let key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            return false;
        }
    }

    return true;
};

console.log(isEmpty(''));