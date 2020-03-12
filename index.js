var result = null;
switch (process.argv[2]) {
    case '1':
        console.log("Balanced Parantheses")
        result = require("./examples/balanced_parantheses")(process.argv[3]);
        break;
    default:
        console.log("Invalid option");
        process.exit(1);
}
console.log("Output:\n" + result);