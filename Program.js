function patternPrint() {
    let rows = 5;
    let count = 1;

    for (let i = 1; i <= rows; i++) {
        let rowOutput = "";
        for (let j = 1; j <= i; j++) {
            rowOutput += count + " ";
            count++;
        }
        console.log(rowOutput.trim());
    }
}

patternPrint();