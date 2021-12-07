<template>
    <div>
        <div class="container">
            <h2 class="Products-title">Активационные товары</h2>   
            <div class="Products">
                <ProductItem
                    v-bind:product="product"
                    v-for="product in allProducts" :key="product.id"
                />
            </div>
        </div>
        <div class="bg-gray">
            <div class="container">
                <h2 class="Products-title">Бонусные товары</h2>
                <div class="Products">
                    <ProductItem
                        v-bind:product="product"
                        v-for="product in allProducts" :key="product.id"
                    />
                </div>
                <button class="Products__btn">Перейти ко всем категориям</button>
            </div>
        </div>
    </div>
</template>

<script>

import ProductItem from '@/components/ProductItem';
import {mapGetters, mapActions} from 'vuex';

export default {
    components: {
        ProductItem
    },
    computed: mapGetters(['allProducts']),
    methods: 
        mapActions(['fetchProducts']),

        async mounted() {
            this.fetchProducts();
        }
}
</script>

<style>
    .Products {
        display: flex;
        box-sizing: border-box;
        flex-wrap: wrap;
        justify-content: center;
    }
    .Products-title {
        margin: 30px 0;
    }
    .Products__btn {
        cursor: pointer;
        margin: 20px auto;
        border: 1px solid #7dc1d7;
        border-radius: 10px;
        padding: 10px;
        color: white;
        background: #7dc1d7;
    }
    .Products__btn:hover {
        color: #7dc1d7;
        background: white;
    }
    .bg-gray {
        padding-top: 10px;
        background: #ccc;
    }
</style>