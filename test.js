const getObj = (str, regx, name) => {
    return {
        [name]: {
            length:str.match(regx).toString().replaceAll(',' , '').length,
            value: (str.match(regx).toString()).replaceAll(',',' ')

        }
    }
}

const generateRandomUser = (string) => {
    const array = [/\d+/g, /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, /[a-zA-Z]/g];
    let fields = ['number', 'symbol', 'letters']
    return array.map((item, index) => {
        let number = getObj(string, item, fields[index]);
        return {
            ...number
        }
    })
}

console.log(generateRandomUser('!@sa#1$sa1d213'))