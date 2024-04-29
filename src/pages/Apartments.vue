<template lang="">
    <AppHeader/>
    <main class="container">

        <section class="row justify-content-center">

            <div class="col-12">
               
            </div>
            <SingleCard class="card p-0 col-lg-3 col-sm-10 col-md-5 mx-4 my-5" v-for="apartment in apartments" :key="apartment.id"
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
            linkLabel="Reserve"
            />
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';

export default {
    name: 'Apartments',
    data(){
        return{
            apartments: [],
        }
    },
    methods:{
        getApartments(){
            axios.get('http://127.0.0.1:8000/api/guest/apartments', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartments = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },
    components:{
        SingleCard,
        AppHeader
    },

    created(){
        this.getApartments();
    }
}
</script>
<style lang="scss">

</style>