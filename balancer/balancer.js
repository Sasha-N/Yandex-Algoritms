const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    const str = data.toString().trim();

    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    function check(str) {
        const st = [];
        for (let i = 0; i < str.length; i++) {
            if (isClosedBracket(str[i])) {
                if (brackets[str[i]] !== st.pop()) return "no";
            } else {
                st.push(str[i]);
            }
        }

        if (st.length === 0) return "yes";

        return "no";
    }

    function isClosedBracket(ch) {
        return [')', ']', '}'].indexOf(ch) > -1;
    }

    fs.writeFile("output.txt", check(str), (err) => { })
});