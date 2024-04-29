import { createRouter, createWebHistory } from 'vue-router';
import Apartments from '../../pages/Apartments.vue';
import SingleApartment from '../../pages/SingleApartment.vue';
import SearchBar from '../search/SearchBar.vue';
import Payment from '../Payment.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'apartments',
            component: Apartments
        },
        // {
        //     path: '/contact-us',
        //     name: 'contact-us',
        //     component: ContactForm
        // },
        // {
        //     path: '/guest/apartments',
        //     name: 'apartments',
        //     component: Apartments
        // },
        {
            path: '/apartments/:id',
            name: 'single-apartment',
            component: SingleApartment
        },
        {
            path: '/apartments-search',
            name: 'apartments-search',
            component: SearchBar
        },
        {
            path: '/payment',
            name: 'payment',
            component: Payment
        },
    ]

});

export { router }