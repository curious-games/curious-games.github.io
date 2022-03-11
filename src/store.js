import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [],
    homesections: []
  },
  actions: {
    loadGames ({commit}) {
      axios.get('/data/games.json')
      .then(data => { let games = data.data 
        commit('SET_GAMES', games)
      })
      .catch(error => { console.log(error) })
    },
    loadHomeSections ({commit}) {
      axios.get('/data/home.json')
      .then(data => { let homesections = data.data 
        commit('SET_HOMESECTIONS', homesections)
      })
      .catch(error => { console.log(error) })
    },
  },
  mutations: {
    SET_GAMES (state, games) { state.games = games },
    SET_HOMESECTIONS (state, homesections) { state.homesections = homesections },
  },
})