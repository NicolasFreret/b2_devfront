class A{

    #var2

    constructor($n){
        console.log($n)
        this.#var2 = 'super en action'
    }


    static test(){
        
        alert(new A().ttt)
    }

    publicFn(){
        alert(this.#var2)
    }

    coucou(_arg){
        this.test()
    }

    
}


export default class B extends A{

    #maProp

    constructor($n, $e){
        super($n)
        //super.publicFn()
        console.log($e)
        //document.querySelector('#test').addEventListener('click', this.cb.bind(this))
        //document.querySelector('#test').addEventListener('mouseover', this.cb2)

        this.variableTest = "Mon super Texte !"
    }

    cb(){
        alert(this.variableTest)
        console.log('tradi')
    }

    publicFn(){
        super.publicFn()
        console.log('je suis coucou B')
    }

    cb2 = () =>{
            console.log(this.variableTest)
        }

    get maProp() {
        return this.#maProp
    }

   
    set maProp($mot){
     
        if(typeof($mot) !== "string") return
        this.#maProp = $mot
        console.log(this.#maProp)
    }

    static retest = 'je suis static'

    static fn(){
        alert(B.retest)
    }
}




