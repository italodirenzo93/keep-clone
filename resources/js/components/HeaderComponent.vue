<template>
    <header class="header">
        <div id="brand">
            <button class="sidebar-toggle" aria-label="Toggle sidebar" v-on:click="sidebarOpen = !sidebarOpen">
                <i class="fas fa-bars"></i>
            </button>
            <a href="#" class="logo">
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="keep" />
                <span class="logo-text">Keep</span>
            </a>
        </div>
  </header>
</template>

<style>
.header {
    grid-area: header;
    background-color: white;
    border-bottom: 1px solid #dadce0;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
}

.sidebar-toggle {
  border: none;
  background: none;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.4em;
  line-height: 24px;
  vertical-align: middle;
  color: #5f6368;
}
.sidebar-toggle:hover,
.sidebar-toggle:active,
.sidebar-toggle:focus {
  background-color: rgba(60,64,67,0.08);
}

.logo {
  text-decoration: none;
}

.logo > img {
  vertical-align: middle;
  border: 0;
  padding-right: 4px;
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 22px;
  display: inline-block;
  color: #5f6368;
  vertical-align: middle;
}
</style>