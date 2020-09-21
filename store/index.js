export const state = () => ({
  latest_tracks: [], 
  top_in_genres: [], 
  feature_tracks: [],  
});
export const getters = {
    authenticated(state) {
      return state.auth.loggedIn
    }, 
    user(state) {
        return state.auth.user
    },
    get_latest_tracks(state){
      return state.latest_tracks
    },
    get_top_in_genres(state){
      return state.top_in_genres
    },
    get_feature_tracks(state){
      return state.feature_tracks
    }
}
 
export const mutations = {
  FETCH_LATEST_TRACKS: (state, datas) => (state.latest_tracks = datas),   
  FETCH_TOP_IN_GENRES: (state, datas) => (state.top_in_genres = datas),   
  FETCH_FEATURE_TRACKS: (state, datas) => (state.feature_tracks = datas),   
};


export const actions = {
  async fetch_latest_tracks({commit}){ 
    const {data} = await this.$axios.get(
      'latest-tracks'
    ); 
      commit('FETCH_LATEST_TRACKS', data.datas);  
  }, 
  async top_in_genres({commit}){
    const {data} = await this.$axios.get(
      'top-genres'
    ); 
      commit('FETCH_TOP_IN_GENRES', data.datas);  
  }, 
  async fetch_feature_tracks({commit}){
    const {data} = await this.$axios.get(
      'feature-tracks'
    ); 
      commit('FETCH_FEATURE_TRACKS', data.datas);  
  }, 
};