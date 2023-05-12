const generateRandomUser = () => {
   const array = ['Munira' , 'Akter']
   const items = ['firstName' , 'lastNAme' , 'Email']
   const res =  items.reduce((acc,cur,index) => {
        acc[cur] = array[index] ?? ''
        return acc

    },{})

    return res;

}

console.log(generateRandomUser())