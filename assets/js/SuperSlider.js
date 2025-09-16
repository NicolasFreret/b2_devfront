export default class Slider{

    #sliderWrapper
    #slider
    #slides

    #startX = 0

    static options = {nbSlide:3,gap:20}

    constructor($id,$options={}){
        this.options = {...Slider.options,...$options}
        this.#sliderWrapper = document?.querySelector(`#${$id}`)
        this.#slider = this.#sliderWrapper.querySelector('.slides')
        document.documentElement.style.setProperty('--width', this.#computeSingleSlideWidth()+"px")

        this.#slider.addEventListener('mousedown', this.#startDrag)

    }


    #getSliderWidth = ()=>{
       return this.#slider.getBoundingClientRect().width
    }

    #computeTotalGap = ()=>{
       return this.options.gap * (this.options.nbSlide - 1)
    }

    #computeSingleSlideWidth = () =>{
        return (this.#getSliderWidth() - this.#computeTotalGap()) / this.options.nbSlide
    }

    #startDrag = e =>{
        e.preventDefault()
        this.#startX = e.pageX
        this.#slider.addEventListener('mousemove', this.#dragging)
        this.#slider.addEventListener('mouseup', this.#stopDrag)
        this.#slider.addEventListener('mouseleave', this.#stopDrag)



    }

    #dragging = e =>{
        console.log(e.pageX)
    }

    #stopDrag = () =>{
        this.#slider.removeEventListener('mousemove', this.#dragging)
        this.#slider.removeEventListener('mouseup', this.#stopDrag)
        this.#slider.removeEventListener('mouseleave', this.#stopDrag)
    }


}