class A{

    constructor(){
        this.test = 'coucou les loulous'
    }


    #test(){
        alert('jkjkj')
    }

    coucou(_arg){
        this.#test()
    }

    
}


export default class B extends A{

}




