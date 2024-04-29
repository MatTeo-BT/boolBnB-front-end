<script>
import AppFooter from './components/AppFooter.vue';
  export default{
    components: { 
      AppFooter,
    }
}
</script>

<template>
    
<router-view>
</router-view>

<AppFooter/>

</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
