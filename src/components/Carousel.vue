<template>
<div class="wrapper">
    <div class="v-carousel" :style="{ 'margin-left': '-'+(100*currentSlideIndex)+'%'}" >
        <CarouselItem
            v-for="item of allSliderItems"
            :key="item.id"
            :item_data = "item"
        />
    </div>
    <div class="pos-absolute">
        <button class="v-carousel__btn" @click="prevSlide">Prev</button>
        <button class="v-carousel__btn" @click="nextSlide">Next</button>
    </div>
    
</div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem';
import {mapGetters} from 'vuex';
export default {
    name: 'v-carousel',
    computed: mapGetters(['allSliderItems']),
    components: {
        CarouselItem
    },
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    methods:  {
        prevSlide() {
            if( this.currentSlideIndex>0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.allSliderItems.length-1) {
                this.currentSlideIndex=0
            } else {
                this.currentSlideIndex++
            }
        }
    }
}
</script>

<style>
    .wrapper {
        position: relative;
        max-width: 1200px;
        overflow: hidden;
        margin: 20px auto;
    }
    .v-carousel {
        display: flex;
        transition: all ease .5s;
    }
    .pos-absolute {
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .v-carousel__btn {
        cursor: pointer;
        border: none;
        color: white;
        background: #ccc;
        padding: 5px 10px;
        margin: 0 10px;
        border-radius: 10px;
    }
    .v-carousel__btn:hover {
        color: #ccc;
        background: white;
        text-shadow: 1px 1px 3px black;
    }
</style>