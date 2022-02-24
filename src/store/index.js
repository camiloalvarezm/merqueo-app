import {
  createStore
} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    productList: [],
    cartQuantity: 0,
    totalPrice: 0,
  },
  mutations: {
    updateProductList(state, payload) {
      state.productList = payload
    },
    updateCartQuantity(state, payload) {
      state.cartQuantity = payload
    },
    updateTotalPrice(state, payload) {
      let totalPrice = 0
      for (let item of payload) {
        totalPrice += item.quantity * item.price
      }
      state.totalPrice = totalPrice
    },
  },
  actions: {
    getProductList({
      commit
    }) {
      axios
        .get('https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b')
        .then((response) => {
          const { data } = response.data
          commit('updateProductList', data)
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  getters: {
    // filterProducts({ productList }, payload) {
    //   console.log(productList, payload)
    // }
  },
  modules: {}
})