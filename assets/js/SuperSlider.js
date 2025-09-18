export default class Slider{

    #sliderWrapper
    #slider
    #slides

    #startX = 0
    #scrollLeft = 0
    #index = 0

    static options = {nbSlide:3,gap:20,queries:{}}

    constructor($id,$options={}){
        this.options = {...Slider.options,...$options}
        this.#sliderWrapper = document?.querySelector(`#${$id}`)
        this.#slider = this.#sliderWrapper.querySelector('.slides')
        document.documentElement.style.setProperty('--width', this.#computeSingleSlideWidth()+"px")
        document.documentElement.style.setProperty('--gap', this.options.gap+"px")
        this.#slider.addEventListener('mousedown', this.#startDrag)

        window.addEventListener('resize', ()=>{
            console.log(window.innerWidth)
        })

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
        this.#slider.classList.add('active')
        this.#startX = e.pageX
        this.#scrollLeft = this.#slider.scrollLeft
        this.#slider.addEventListener('mousemove', this.#dragging)
        this.#slider.addEventListener('mouseup', this.#stopDrag)
        this.#slider.addEventListener('mouseleave', this.#stopDrag)
    }

    #dragging = e =>{
        const deviation = e.pageX - this.#startX
        this.#slider.scrollLeft = this.#scrollLeft - deviation
    }

    #stopDrag = () =>{
        this.#slider.classList.remove('active')
        this.#adjustSlider()
        this.#slider.removeEventListener('mousemove', this.#dragging)
        this.#slider.removeEventListener('mouseup', this.#stopDrag)
        this.#slider.removeEventListener('mouseleave', this.#stopDrag)
    }

    #adjustSlider = ()=>{
        const width = this.#computeSingleSlideWidth() + this.options.gap
        this.#index = Math.round( this.#slider.scrollLeft / width )
        this.#slider.scrollLeft = width * this.#index
    }



}