<template>
    <div class="container">
        <div class="Header">
            <a href="#">
                <img src="@/assets/logo.svg" class="header-logo"  alt="logo"/>
            </a>
            <div>
                <input class="header-input" type="text" placeholder="Поиск"/>
            </div>
            <div class="header-location">Алматы</div>
            <div class="header-profile">Мой профиль</div>
        </div>
    </div>
</template>

<style>
    .Header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-top: 10px;
    }
    .header-logo {
        width: 50px;
        margin: 10px;
    }
    .header-input {
        width: 300px;
        padding: 10px;
        border: none;
        padding-left: 10px;;
        background: #EEE;
    }
    .header-location {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .header-location:hover {
        box-shadow: 1px 1px 0 5px #ffffe4;
    }
    .header-location::before {
        content: url('../assets/location.svg');
        display: flex;
        align-items: center;
        width: 25px;
    }
    .header-profile {
        display: flex;
        cursor: pointer;
        align-items: center;
        box-sizing: border-box;
        max-width: 180px;
        font-size: 16px;
        padding: 10px;
        border-radius: 20px;
        background: #CDF3FF;
    }
    .header-profile::before {
        content: url('../assets/emotion.svg');
        width: 30px;
        height: 30px;
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 5px;
        background: white;
        border-radius: 100%;
    }
    .header-profile::after {
        content: url('../assets/arrow-down.svg');
        width: 10px;
        margin: 0 5px;
    }
    .header-profile:hover {
        box-shadow: 1px 0 0 2px #4067e6;
    }
</style>