
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

module.exports = {
    generateRandom,
    generateRandomUser
}