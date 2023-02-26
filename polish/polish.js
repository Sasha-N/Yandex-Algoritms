const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    const str = data.toString().trim().split(" ").join("").split("");

    const st = [];
    const operators = ['*', '-', '+'];

    for (let i=0; i < str.length; i++) {
        if (!operators.includes(str[i])) {
            st.push(str[i]);
            continue;
        }

        let b = Number(st.pop());
        let a = Number(st.pop());
        let result;

        switch (str[i]) {
            case '*':
              result = a * b;
              break;
            case '+':
              result = a + b;
              break;
            case '-':
              result = a - b;
              break;
            default:
              break;
        }
        st.push(result);
    }

    fs.writeFile("output.txt", st.pop().toString(), (err) => { })
});