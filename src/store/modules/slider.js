export default {
    actions: {},
    mutations: {},
    state: {
        sliderItems: [
            {id: 1, image: 'content.png'},
            {id: 2, image: 'content.png'},
            {id: 3, image: 'content.png'},
            {id: 4, image: 'content.png'},
          ]
    },
    getters: {
        allSliderItems(state) {
            return state.sliderItems
        }
    }
}