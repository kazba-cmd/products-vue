<template>
    <div class="ProductItem">
        <div class="flex-center">
            <span v-if="product.discount==='discount'" class="ProductItem-discount item__red">{{product.discount}}</span>
            <span v-else-if="product.discount==='new'" class="ProductItem-discount item__green">{{product.discount}}</span>
            <button class="ProductItem-like__btn" v-on:click="$emit('addToBasket', product.id)">
                <img class="ProductItem-like" src="@/assets/redheart.png" v-if="product.like" alt="like"/>
                <img src="@/assets/heart.png" v-else alt="dislike"/>
            </button>
        </div>
        <img class="ProductItem-image" :src="require(`@/uploads/${product.image}`)"/>
        <p class="ProductItem-name">{{product.name}}</p>
        <p class="ProductItem-price"><b>{{product.price}} ТГ</b></p>
        <router-link class="ProductItem-info" :to="{name: 'ProductPage', params: {id: product.id}, query: product}">Подробнее</router-link>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
        }
    }
}
</script>

<style>
    .ProductItem {
        width: 220px;
        text-align: left;
        display: flex;
        padding: 10px;
        margin: 10px;
        border: 2px solid #ccc;
        flex-direction: column;
        box-sizing: border-box;
        background: white;
    }
    .ProductItem-info {
        text-decoration: none;
        margin-left: auto;
    }
    .ProductItem-discount {
        color: white;
        padding: 0 3px;
        border-radius: 10px;
        padding: 2px 10px;
    }
    .item__red {
        background: #e01563;
       
    }
    .item__green {
        background: #3eb991;
    }
    .ProductItem-like {
        width: 20px;
    }
    .ProductItem-like__btn {
        cursor: pointer;
        padding: 0;
        background: white;
        border: none;
    }
    .ProductItem-image {
        margin: 10px 0;
        border-radius: 10px;
    }
    .ProductItem-name {
        font-size: 16px;
        color: #ccc;
    }
    .ProductItem-price {
        font-size: 22px;
    }
    .flex-center {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>