

let data = [{ test: 6 }, { test: 2 }, { test: 8 }, { test: 3 }, { test: 8 }, { test: 1 }, { test: 0 }, { test: 4 }]

function sortArr() {
    console.log("check0");
    for (let i = 0; i < data.length - 1; i++) {

        for (let j = 0; j < data.length - 1; j++) {
            if (data[j + 1].test < data[j].test) {
                let temp = { ...data[j] };
                console.log("check", temp);
                data[j] = { ...data[j + 1] };
                data[j + 1] = temp
            }
        }
    }

}
sortArr()
console.log("data", data);