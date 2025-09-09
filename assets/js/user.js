

const USERS_API = 'https://api.escuelajs.co/api/v1/users';

const loadUsers = async () =>{
    let res = await fetch(USERS_API)
    res = await res.json()
    return res
}

const y = ()=>{
    alert('y')
}

const a = function(){
    alert('a')
}

const z = _text =>{
    alert(_text)
}

const t = 'test var';

export{
    z,
    y,
    a,
    t,
    loadUsers
}