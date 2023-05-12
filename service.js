
// Generate random Number
const generateRandom = (start = 0, end = 999) => {
    let difference = end - start;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + start;
    return rand;
}


/**
 * 
 * @param {User[]} userarray 
 * @returns user object
 */
const generateRandomUser = (userarray) => {
    const items = ['firstName' , 'lastName' , 'email' , 'avatar' , 'age' , 'address']
    return items.reduce((acc,cur,index) => {
         if(userarray[index]){
             acc[cur] = userarray[index]
         }
         return acc
     },{})
 }



const getStringObj = (str, regx, name) => {
    return {
        [name]: {
            length:str.match(regx).toString().replaceAll(',' , '').length,
            value: (str.match(regx).toString()).replaceAll(',',' ')

        }
    }
}

const analyseStringParams = (string) => {
    const array = [/\d+/g, /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, /[a-zA-Z]/g];
    let fields = ['number', 'symbol', 'letters']
    return array.map((item, index) => {
        let number = getObj(string, item, fields[index]);
        return {
            ...number
        }
    })
}

module.exports = {
    generateRandom,
    generateRandomUser
}