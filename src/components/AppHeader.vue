<template lang="">
    <header >
        <section class="jumbotron pt-4">
       
        
    <section > 
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex justify-contet-evenly">
                <div>
                    <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                        <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                        <span class="bnb d-sm-none d-md-inline-block">
                            boolbnb
                        </span>
                    </router-link>
                </div>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle rounded-pill me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user me-1"></i>User
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                        <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">subscribe</a></li>
                    </ul>
                </div>
            </div>
           
        </nav>
        <section class="header-text text-white">
        <h1 class="text-center mt-5 mb-4"> Recharge energies in our unique BnB</h1>
        <div class="text-center">
            <p>
                Elevate your well-being by booking with us, <br>
                where every detail is designed to <br> 
                offer you a break from  daily stress.
            </p>
           
            <router-link :to="{name: linkItems[1].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                <a class="btn btn-danger cerca tag-search br fs-5" href="#">
                    Book now!
                </a>
            </router-link>
            
            

            
        </div>
        
    
    </section>
    </section>
</section>
    </header>
</template>
<script>
import SearchBar from './search/SearchBar.vue';
export default {
    components: {
        SearchBar
    },
    data() {
        return {
            linkItems: [
                {
                    label: 'Apartments',
                    routerName: 'apartments'
                },
                {
                    label: 'Search',
                    routerName: 'apartments-search'
                },
                // {
                //     label: 'Contact US',
                //     routerName: 'contact-us'
                // },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.jumbotron {
    position: relative; /* Assicura che i pseudoelementi siano posizionati correttamente */
    width: 100%;
    height: 800px;
    background-image: url(../../public/img/baita-valon-sotto-le-stelle.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
}

   

/* Aggiustiamo il contenuto all'interno della jumbotron per essere visibile sopra il livello semi-trasparente */
.jumbotron .content {
    position: relative;
    z-index: 1; /* Assicura che il contenuto sia sopra l'overlay */

    
}
.br{
    border-radius: 3rem;
}

.navbar{
    /*height: 60px;*/
    width: 50%;
    padding-left: 2rem;
    margin-top: 3rem;
    border-radius: 3rem;
    background-color: white;
    margin: 0 auto;

}

img.logo{
    vertical-align: bottom;
    width: 40px;
    height: 40px;
}

span.bnb{
    color: #FF385C;
    font-size: 1.4rem;
}

.tag-home,
.tag-search{
    font-weight: 400;
    margin-right: 1rem;
    font-size: 1.4rem;
}

//nav#boolBnB-logo{
//    width: 40%;
//}



</style>