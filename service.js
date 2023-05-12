
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
    const string = str.match(regx) || [];
    return{
            charecter : name,
            length: string.toString().replaceAll(',' , '').length,
            value:  string.toString().replaceAll(',',' ')

        }
    
}

const analyseStringParams = (string) => {
    const array = [/\d+/g, /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, /[a-zA-Z]/g];
    let fields = ['number', 'symbol', 'letters']
    const obj =  array.map((item, index) => {
        return getStringObj(string, item, fields[index]);
    })
    return obj
}

module.exports = {
    generateRandom,
    generateRandomUser,
    analyseStringParams
}