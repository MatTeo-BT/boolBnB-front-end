<template >
    <!--
    <div>
        <div class="card-body">
            <h1 class="card-title mb-3">
                {{ title }}
            </h1>


            <img v-if="apartment_image" :src="apartment_image" class="card-img-top mb-3" :class="fullLength ? '' : 'image-preview'" alt="...">
            
            <p class="card-text" v-if="fullLength && description">
                {{ description }}
            </p>
            <p v-else>
                {{ description.substring(0, 120) }}...
            </p>
            <p>
                Owner info:
                <ul>
                    <li>
                        {{ user_name}}.
                    </li>            
                    <li>
                        {{ user_surname}}.
                    </li>
                    <li>
                        {{ user_email}}.
                    </li>
                </ul>
            </p>
            <p>
                The house has:
                <ul>
                    <li>
                        {{ no_rooms}} rooms
                    </li>            
                    <li>
                        {{ no_beds}} beds
                    </li>
                    <li>
                        {{ no_bathrooms}} bathrooms
                    </li>
                </ul>
            </p>
            <p>
                The house has: {{ square_meters }} square meters.
            </p>
            <p>
                The house address is: {{ address }}.
            </p>
            
    


            <div class="w-100 d-flex mb-3" v-if="linkRoute">
                <router-link :to="linkRoute" class="btn btn-primary">
                    {{ linkLabel }}
                </router-link>
            </div>
        </div>
    </div>
    style="width: 17rem;"
    -->
    <main class="container">
        <section class="row justify-content-center">
            <div class="card carda" v-if="linkRoute">
                <router-link class="link" :to="linkRoute">
                    <div class="img-container br">
                        <img v-if="apartment_image" :src="apartment_image" class="img-fluid rounded-4 card-cover" :class="fullLength ? '' : 'image-preview'" alt="...">
                        <div class="sponsor-text-container" v-if="apartment_sponsors.length > 0">
                            <span>Sponsorizzato</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ title }}
                        </h5>
                        <p class="address">
                            {{ address }}
                        </p>
                        <p class="price-container">
                            <span class="price">
                                {{ price }}&euro;
                            </span>
                            <span class="text">
                                night.
                            </span>
                        </p>
                        
                        <!-- <div class="d-flex mb-3" v-if="linkRoute">
                            <router-link :to="linkRoute">
                                {{ linkLabel }}
                                <img v-if="apartment_image" :src="apartment_image" class="card-img-top mb-3 rounded" :class="fullLength ? '' : 'image-preview'" alt="...">
                        </div> -->
                    </div>
                </router-link>
            </div>
        </section>
    </main>
    
    
</template>

<script>

export default {
    data() {
        return {

        }
    },
    
    props:{
        title: {
            required: true,
            type: String,
        },
        user_name: {
            required: true,
            type: String,
        },
        user_surname: {
            required: true,
            type: String,
        },
        user_email: {
            required: true,
            type: String,
        },
        no_rooms: {
            required: true,
            type: Number,
        },
        no_beds: {
            required: true,
            type: Number,
        },
        no_bathrooms: {
            required: true,
            type: Number,
        },
        square_meters: {
            required: true,
            type: Number,
        },
        address: {
            required: false,
            type: String,
        },
        price: {
            required: true,
            type: String,
        },
        description: {
            required: false,
            type: String,
        },
        apartment_sponsors: {
            required: false,
            type: Array,
        },
        apartment_image: {
            required: true,
            type: [String, File]
        },
        linkRoute: {
            required: false,
            type: [ Object, String ]
        },
        linkLabel: {
            required: false,
            type: String,
        },
        fullLength: {
            required: false,
            type: Boolean,
        },
    }
}
</script>
<style lang="scss" scoped>

    .card{
        border: 0;
    }

    .card-body{
        //margin: 0;
        padding: .5rem 0 0 0 ;
        justify-content: flex-start;
    }

    .img-container{
        position: relative;
        overflow: hidden;
    }

    img{
        object-fit: cover;
        height: 340px;
    }

    .sponsor-text-container {
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: white;
        border: 1px solid white;
        border-radius: 35px;
        padding: .1rem .5rem;
    }

    //img.image-preview {
        //height: 200px;
    //}
    //img{
        //height: 400px;
        //object-fit: cover;
        //margin-bottom: 3rem;
    //}
    

    .address {
        color: #717171;
        margin: 0 0 .5rem 0;
    }

    .price {
        font-weight: 600;
    }
    .text {
        font-weight: 300;
    }
    .link{
        text-decoration: none;
        color: black;   
    }

    
</style>