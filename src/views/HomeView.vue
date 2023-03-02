<template>
  <div class="container">
    <Header></Header>
    <div class="dashboard">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/SideBar.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
@import "../static/sass/define.scss";

.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: $sidebar-bg-color;
  height: 88vh;
  width: 100%;
}

.content {
  background-color: white;
  border-radius: 10px 0 0 10px;
  padding: 10px 20px;
}

.container {
  height: 100vh;
}
</style>
