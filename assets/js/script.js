import {loadUsers} from './user.js';
import maClass from './classe.js';

const t = new maClass('Parent', 'Enfant')
t.custom = 58
t.publicFn()
console.log(t.prop)
const h = t.cb2
h()





// (async ()=>{

//     const res = await loadUsers()
//    const app = document?.getElementById('app')
//    if(!app) return

   

//    const onlyEvenID = res.filter(user => user.id % 2 === 0)
    
//    console.log(res.map(u=>({...u, test: u.id + 5})))
//    console.log(res.map(user => user.email).filter(u=> u.endsWith('gmail.com')).length)
//    console.log(res.findIndex(u => u.id % 2 === 0))
    
//   console.log(res.map(u=>({...u, test: u.id + 5})).reduce((acc, ligne)=> ligne.test + acc, 4))
   
//   let t = 4
//    const ul = document.createElement('ul')
//    res.map(u=>({...u, test: u.id + 5})).forEach( ({password,id, test}) => {
//             t += test
//             const li = document.createElement('li')
//             li.append(`Password : ${password}, test: ${test}, id: ${id}`)
//             ul.append(li)
        
    
//    })

//    console.log(t)
//    app.append(ul)
   
// })()



