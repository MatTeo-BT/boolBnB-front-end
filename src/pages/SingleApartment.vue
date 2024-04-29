<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="col-5">
                    <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                    <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                        <span class="bnb d-sm-none d-md-inline-block">
                            boolbnb
                        </span>
                    </router-link>
                </div>
                <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                                <a class="nav-link active tag-home" href="#">Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: linkItems[1].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                                <a class="nav-link tag-search" href="#">
                                    Search
                                </a>
                            </router-link>
                        </li>
                      
                    </ul>
                </div> -->
            </div>
        </nav>

    </header>
    
    <main class="container">
        <section class="row justify-content-center card-container">
            <div class="card" id="carda">
                <h1 class="card-title ">
                    {{ apartment.title }}
                </h1>
                <div class="img-container">
                    <img v-if="apartment.img" :src="apartment.img" class="card-img-top mb-3 rounded" :class="fullLength ? '' : 'image-preview'" alt="...">
                </div>
                <div class="card-body">
                    <p class="address">
                        {{ apartment.address }}
                    </p>
                    <p class="info-container">
                        <span class="n-rooms">
                            {{ apartment.no_rooms }} rooms <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="n-beds">
                            {{ apartment.no_beds }} beds <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="n-bathrooms">
                            {{ apartment.no_bathrooms }} bathrooms
                        </span>
                    </p>
                    <p>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span class="text-star">No reviews yet</span>
                    </p>
                    <hr>
                   
                    <div class="user-info">
                        <p>
                            <span class="user-logo">
                                <i class="fa-solid fa-user fa-xl me-1"></i>
                            </span>
                            <span class="info-text">
                                Hosted by:
                            </span>
                            <span class="info-name">
                                {{ apartment.user.surname}} {{ apartment.user.name}}
                            </span>
                        </p>

                        <ContactForm/>
                        <ContactMe/>
                    </div>
                    <hr>
                    <!--Sezione dei filtri-->
                </div>
                <div class="user-info-container card-body">
                    <p><i class="fa-solid fa-door-open fa-xl"></i>Self check-in</p>
                    <p><i class="fa-solid fa-medal fa-xl"></i>{{ apartment.user.surname}} {{ apartment.user.name}} is Superhost.</p>
                    <p><i class="fa-solid fa-calendar-days fa-xl"></i>Free cancellation</p>
                </div>

                <hr>

                <div class="row col-12 d-flex justify-content-between price-card">
                    <div class="col-7 description-container">
                        <p class="description-text">
                            {{ apartment.description}}
                        </p>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <div class="price-form">
                            <p class="price-container">
                                <span class="price">
                                    {{ apartment.price }}&euro;
                                </span>
                                <span class="price-text">
                                    night.
                                </span>
                            </p>
                            <p class="d-flex justify-content-between">
                                <span class="bolder">
                                    Cleaning costs
                                </span>
                                <span class="tini">
                                    20&euro;/night
                                </span>
                            </p>
                            <p class="d-flex justify-content-between">
                                <span class="bolder">
                                Boolbnb Costs
                                </span>
                                <span class="tini">
                                    50&euro;
                                </span>
                            </p>
                            <p class="d-flex justify-content-between">
                                <span class="bolder">
                                    Tax
                                </span>
                                <span class="tini">
                                    30&euro;
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row pb-5 ">
                    <div class="col-12">
                        <hr>
                        <p class="fs-4 fw-semibold mt-4 mb-3"><i class="fa-solid fa-location-dot me-2"></i>Where you’ll be</p>
                        <p class="map-address">
                            {{ apartment.address }}
                        </p>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </section>

            <div class="price-container-fix">
                <p class="price-form-fix">
                    <span class="price-fix">
                        {{ apartment.price }}&euro;
                    </span>
                    <span class="text-fix">
                        night.
                    </span>
                </p>
            </div>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import ContactForm from './ContactForm.vue';


import tt from "@tomtom-international/web-sdk-maps";
import axios from 'axios';

export default {
    name: 'SingleApartment',
    data(){
        return{
            apartment: {},
            id: '',
            linkItems: [
                {
                    label: 'Apartments',
                    routerName: 'apartments'
                },
                {
                    label: 'Search',
                    routerName: 'apartments-search'
                },
            ]
        }
    },
    methods:{
        getApartment(){
            axios.get(`http://127.0.0.1:8000/api/guest/apartments/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartment = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                //this.$router.push({ name: 'not-found' })
            })
        },
        createMap() {
            const map = tt.map({
                key: "9B3Txp0d4DICteHUwWohHtaZOMm3WCUY",
                container: "map",
                center: [this.apartment.longitude, this.apartment.latitude],
                zoom: 18
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());
            const marker = new tt.Marker({
                
            }).setLngLat([this.apartment.longitude, this.apartment.latitude]).addTo(map);
            console.log(marker.getElement())
        },
    },
    mounted() {
        this.createMap();
    },
    created(){
        this.getApartment();
    },

    components:{
        SingleCard,
        ContactForm,
        
        
    },

}
</script>
<style lang="scss" scoped>

    .position-container {
        position: relative;
    }
    #carda{
        border: none;
    }

    .card-title {
        margin-bottom: 1.5rem;
        margin-left: 2rem;
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
    }

    .img-container {
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
    }
    img {
        object-fit: cover;
        //height: 550px;
        //width: 650px;
    }

    .address {
        margin: 0 0 .5rem 0;
        font-size: 1.4rem;
        font-weight: 400;
    }

    .fa-circle {
        scale: .3;
        margin-right: .2rem;
    }

    .info-container {
        font-weight: 300;
        margin-bottom: .3rem;
    }

    .fa-star {
        scale: .9;
        margin-right: .3rem;
    }

    .text-star {
        font-weight: 300;
    }

    .info-text,
    .info-name {
        font-weight: 600;
        font-size: 1.2rem;
    }

    .user-info-container{
        i{
            scale: 1.2;
            margin-right: 1rem;
        }
        p{
            margin-bottom: 2rem;
            font-weight: 600;
            font-size: 1.1rem;
        }
    }

    .description-text{
        font-weight: 300;
        margin: .8rem;
        width: 50%;
    }

    .map-address{
        font-size: .9rem;
        font-weight: 300;
    }

    #map {
        width: 100%;
        height: 500px;
    }


    ul#searchResults{
        padding: 1rem;
        z-index: 1;
        border-radius: 10px;
        background-color: white;
        top: 50px;
        overflow: hidden;
        list-style: none;
        li {
            padding: .5rem; 
        }
    }

    //.container {
    //    width: 100%;
    //    display: flex;
    //    justify-content: center;
    //}

    .rounded-pill{
        border-color: white;
    }

    .search-bar{
        border: 1px solid lightgrey;
        border-radius: 35px;
    }

    .rounded-btn {
        border-radius: 15px;
    }

    .input-group{
        width: 50%;
    }
    div#my_container {
        width: 80%;
        margin: 0 auto;
    }

    /* Stili per la modale */

.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal.is-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
  }
  .navbar{
    height: 70px;
    width: 50%;
    padding-left: 2rem;
    margin-top: 3rem;
    border-radius: 3rem;
    background-color: white;
    margin: 0 auto;
    padding: 3rem;

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


    /*Card price Style*/

    .card-form {
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
        height: 500px;
        width: 350px;
        position: absolute;
        top: 1500px;
        right: 110px;
        margin: .2rem;
        //z-index: 1;
        //overflow: scroll;
    }

    .price-form {
        margin-right: 2rem;
        margin-top: .5rem;
        width: 80%;
        height: 230px;
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    }
    .price {
        font-weight: 600;
        font-size: 1.5rem;
    }
    .price-text {
        font-weight: 300;
        font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
        .price-form {
            display: none;
        }

        .description-container {
            width: 100%;
        }
        .price-container-fix {
            //display: block;
            width: 100%;
            height: 100px;
            position: fixed;
            z-index: 2;
        }
    }

    @media screen and (max-width: 992px) {
        .price-form {
            display: none;
        }

        .description-container {
            width: 100%;
        }

        .price-container-fix {
            //display: block;
            width: 100%;
            height: 60px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 16px;
            border-top: lightgrey ;
        }
        
        .price-fix {
        font-weight: 600;
        font-size: 1.3rem;
        }
        .text-fix {
            font-weight: 300;
            font-size: 1.1rem;
        }

        .price-form-fix {
            padding: 1rem;
        }
    }

    @media screen and (min-width: 1002px) {
        .price-container-fix {
            display: none;
        }
    }


</style>