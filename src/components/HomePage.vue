<template>
    <!--
    <header>
        <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="d-flex">
                <div class="header-container">
                <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                <a class="navbar-brand fw-semibold bnb ps-2 fs-4" href="#">boolbnb</a>
            </div>
            <Searchbar/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item " v-for=" (link,index) in linkItems " :key="index">
                            <router-link :to="{name: link.routerName}" class="nav-link active text-dark">
                                {{ link.label }}
                            </router-link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    -->
    <apartments/>
</template>
<script>
import Apartments from '@/pages/Apartments.vue'
import AppHeader from './AppHeader.vue';


export default {
    data(){
        return {
  
        Apartments,
        linkItems: [
                
                {
                    label: 'Apartments',
                    routerName: 'apartments'
                },

            ]

        }
    },
    components: {
        Apartments,
        AppHeader
    }
    
}
</script>
<style lang="scss" scoped>
  img.logo{
    vertical-align: bottom;
    width: 6%;
  }
  a.bnb{

    color: #FF385C;
  }
  .header-container{
    padding-left: 4.5rem;
  }
</style>