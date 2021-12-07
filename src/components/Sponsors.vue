<template>
    <div class="bg-blue">
            <div class="container">
                <div class="Footer-sponsors">
                    <img class="Footer-sponsor" src="@/assets/mitsubishi.svg" alt="mitsubishi logo"/>
                    <img class="Footer-sponsor" src="@/assets/turkish.png" alt="turkish logo"/>
                    <img class="Footer-sponsor" src="@/assets/xbox.png" alt="xbox logo"/>
                    <img class="Footer-sponsor" src="@/assets/netflix.png" alt="netflix logo"/>
                    <img class="Footer-sponsor" src="@/assets/yandex.png" alt="yandex logo"/>
                </div>
            </div>
        </div>
</template>

<style>
    .Footer-sponsors {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    .Footer-sponsor {
        margin: 10px;
    }
    .bg-blue {
        background: #cdf3ff;
    }
</style>