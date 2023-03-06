<template>
    <div class="sidebar">
        <div class="logo-grapper">
            <div class="logo">
                <img src="../assets/logo-drink.png" alt="">
            </div>
        </div>
        <div class="menu-items">
            <router-link to="/members" active-class="active" class="side-btn">
                <div class="link-container">
                    Members
                </div>
            </router-link>
            <router-link to="/events" active-class="active" class="side-btn">
                <div class="link-container">
                    Events
                </div>
            </router-link>
            <router-link to="/statistics" active-class="active" class="side-btn">
                <div class="link-container">
                    Statistics
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideBar",
}
</script>
<style lang="scss">
@import "../static/sass/define.scss";

.logo-grapper {
    display: flex;
    justify-content: center;
    z-index: 10 !important;

    .logo {

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-left: 6px;
}

.menu-items>* {
    margin-top: 40px;
}

.side-btn {
    border: none;
    padding: 16px 16px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    background-color: transparent;
    text-decoration: none;
    z-index: 10;
}

.side-btn:focus {
    outline: none;
}

.side-btn:hover {
    font-weight: 600;
}

.side-btn.active {
    position: relative;
    background-color: white;
    font-weight: 600;
    // margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before,
.side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
    z-index: 0;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: $sidebar-bg-color;
    z-index: 1
}
</style>