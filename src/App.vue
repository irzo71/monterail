<template>
  <div id="app">
    <app-header></app-header>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="inner">
            
            <router-view></router-view>
            <div id="example">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import "./assets/stylesheets/style.scss";
</style>
