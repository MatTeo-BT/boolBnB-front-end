<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-danger" @click="showModal = true">
      Choose your filter
    </button>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <!-- Contenuto della modale -->
        <div class="box">
          <ul>
            <div>
              <input type="checkbox" id="wifi" class="custom-checkbox" v-model="checkedFilters" value="wi-fi">
              <label for="wifi">Wi-Fi</label>

              <input type="checkbox" id="parking" class="custom-checkbox" v-model="checkedFilters" value="parking">
              <label for="parking">Parking</label>

              <!-- Aggiungi altre checkbox per gli altri servizi -->

            </div>
          </ul>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedFilters: ['wi-fi', 'parking', 'sauna']
    };
  },

  props: {
            no_beds: {
                required: true,
                type: Number
            },

            // check_filter:{
            //   required: true,
            //   type: String
            // },

            no_rooms:{
                required: true,
                type: Number
            },

            no_bathrooms:{
                required: true,
                type: Number
            },

            services: {   
                required: true,
                type: Array
            } 
        },

  methods: {
    checkFilter() {
      // Emetti l'evento con i filtri selezionati
      this.$emit('check-filter', this.checkedFilters);
    },

    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
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
</style>


