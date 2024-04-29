<template lang="">
    <header>
      

    </header>
     <div id="my_container">
        <div class="d-flex justify-content-between align-items-center ps-4">
            <div>
                    <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                    <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                        <span class="bnb">
                            boolbnb
                        </span>
                    </router-link>
                </div>
                <div class="col-5 form-floating m-4 d-flex search-bar form-group p-2">
                    <input type="text" class="form-control rounded-pill position-relative" id="floatingInput" v-model="address" @keyup="handleInputChange" @keyup.enter="getApartments()">
                    <label for="floatingInput">Search by address</label>
                    <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2" @click="getApartments()">Cerca</button>
                    <ul id="searchResults" class="position-absolute d-none"></ul>
                </div>  

            <div>
               <!-- angolo prove -->
               <div class='row'>
                    <div>
                        <!-- Button trigger modal -->
                        <button type="button btn-filter" class="btn btn-danger rounded-btn" @click="showModal = true">
                            Choose your filter
                        </button>
                    
                        <!-- Modal -->
                        <div class="modal" :class="{ 'is-active': showModal }">
                            <div class="modal-background" @click="closeModal"></div>
                            <div class="modal-content">
                            <!-- Contenuto della modale -->
                            <div class="box">
                                    <div class="col-4 m-4">
                                        <div class="me-3">
                                            <label for="range" class="form-label mb-3">Distanza: <span class="primary-color fw-bold ">{{ range }} km</span></label>
                                            <input type="range" v-model="range" class="form-range" min="2" max="20" step="1" id="range">
                                        </div> 
                                        <div class="me-3">
                                            <label for="beds" class="form-label mb-3">Number of beds: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                            <input type="number" v-model="beds" class="form-control" step="1" id="beds">
                                        </div>
                                        <div class="me-3">
                                            <label for="rooms" class="form-label mb-3">Number of rooms: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                            <input type="number" v-model="rooms" class="form-control" step="1" id="rooms">
                                        </div>
                                        <div class="me-3">
                                            <label for="bathrooms" class="form-label mb-3">Number of bathrooms: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                            <input type="number" v-model="bathrooms" class="form-control" step="1" id="bathrooms">
                                        </div>
                                        <div class="col-5 mb-3" v-for="service in services">
                                            <div class="form-check">
                                                <input class="form-check-input my-check" type="checkbox" v-model="filteredServices" :value="service.id" :id="'Check-' + service.id">
                                                <label class="form-check-label" :for="'Check-' + services.id">
                                                    {{ service.name }}
                                                </label>
                                            </div>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn" data-bs-dismiss="modal" @click="getApartments()">Mostra</button>
                                        </div>
                                        <!-- <input type="checkbox" id="wifi" class="custom-checkbox" v-model="checkedFilters" value="wi-fi">
                                        <label for="wifi">Wi-Fi</label> -->
                        
                                        <!-- <input type="checkbox" id="parking" class="custom-checkbox" v-model="checkedFilters" value="parking">
                                        <label for="parking">Parking</label> -->
                        
                                        <!-- Aggiungi altre checkbox per gli altri servizi -->
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    <div class="container">
        <div class="row justify-content-center">
            <SingleCard class="p-0 col-3 mx-4 my-5" v-for="apartment in apartments" :key="apartment.id"
            :user_name="apartment.user.name" 
            :user_surname="apartment.user.surname" 
            :user_email="apartment.user.email" 
            :title="apartment.title" 
            :apartment_image="apartment.img"
            :apartment_sponsors="apartment.sponsors" 
            :no_rooms="apartment.no_rooms" 
            :no_beds="apartment.no_beds" 
            :no_bathrooms="apartment.no_bathrooms" 
            :square_meters="apartment.square_meters" 
            :address="apartment.address"
            :price="apartment.price" 
            :description="apartment.description || ''" 
            :linkRoute="{ name: 'single-apartment', params: { id: apartment.id }}" 
            linkLabel="Reserve" />

        </div>
        
    </div>

</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';

import SingleCard from '../SingleCard.vue';
import { store } from '../js/store';

export default {
    name: 'SearchBar',
    data(){
        return{
            showModal: false,
            apartments: [],
            services: [],
            filteredServices: [],
            address: '',
            range: 10,
            beds: 0,
            rooms: 0,
            bathrooms: 0,
            // filter: ['wi-fi', 'parking', 'sauna']
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

        handleInputChange() {
            let ulElement = document.getElementById('searchResults');
            ulElement.classList.remove('d-none');
            if (!this.address.trim()) {
                ulElement.classList.add('d-none');
                return;
            }
            const inputValue = this.address.trim().replace(" ", "+");
            const apiKey = '9B3Txp0d4DICteHUwWohHtaZOMm3WCUY';
            let coordinate = `https://api.tomtom.com/search/2/search/${inputValue}.json?key=${apiKey}&countrySet=IT`;

            fetch(coordinate)
                .then(response => response.json())
                .then(result => {
                    ulElement.innerHTML = '';
                    for (let i = 0; i < 4; i++) {
                        const li = document.createElement('li');
                        li.textContent = result.results[i].address.freeformAddress;
                        li.classList.add('resultItem');
                        li.addEventListener('click', () => {
                            this.address = result.results[i].address.freeformAddress;
                            ulElement.innerHTML = '';
                            ulElement.classList.add('d-none');
                        });
                        ulElement.appendChild(li);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        updateDataByFilter(updatedOptions){
            this.filter= updatedOptions
        },
        getApartments(){
            axios.get('http://127.0.0.1:8000/api/guest/apartments/search', {
                params: {
                    address: this.address,
                    beds: this.beds,
                    rooms: this.rooms,
                    bathrooms: this.bathrooms,
                    range: this.range,
                    services: this.filteredServices
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartments = response.data.results;
            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        },

        getServices() {
            axios.get('http://127.0.0.1:8000/api/apartment/services', {
                params: {
                }
            })
            .then( response => {
                console.log(response.data.results);
                this.services = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        checkFilter() {
            // Emetti l'evento con i filtri selezionati
            this.$emit('check-filter', this.checkedFilters);
        },

        closeModal() {
            this.showModal = false;
        }
    },

    created() {
        this.getServices();
        this.getApartments();
    },
        
    components: {
        SingleApartment,
        
        SingleCard,
        // FilterSearchBar,
    }
}
</script>

<style lang="scss" scoped>

    ul#searchResults{
        padding: 1rem;
        z-index: 1;
        border-radius: 10px;
        background-color: white;
        top: 60px;
        left: 10px;
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
        height: 70px;
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