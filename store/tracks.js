 
export const state = () => ({
    tracks: [],
    search: [],
    isSearch: true
});

export const getters = {
    allTracks(state) {
        return state.tracks;
    },
    searchTrack(state) {
        return state.search;
    },
    isSearch(state) {
        return state.isSearch;
    }
};

export const mutations = {
    SET_ALL_TRACK: (state, tracks) => (state.tracks = tracks), 
    SET_ALL_SEARCH: (state, tracks) => (state.search = tracks), 
    SET_IS_SEARCH: (state, bool) => (state.isSearch = bool), 
};

export const actions = {
    async fetchAllTracks({commit}) {
        commit('SET_IS_SEARCH', false);
        const {data} = await this.$axios.get(
            'tracks'
          ); 
          commit('SET_ALL_TRACK', data.datas);
          commit('SET_IS_SEARCH', true);
    }, 
    async fetchSearchTracks({commit}, term) {
        commit('SET_IS_SEARCH', false);
        const {data} = await this.$axios.get(
            'tracks/search',  
            {params: {"q" : term}}
          ); 
          commit('SET_ALL_SEARCH', data.datas); 
          commit('SET_IS_SEARCH', true);
    }, 
};