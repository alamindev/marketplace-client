 
export const state = () => ({
    tracks: []
});

export const getters = {
    allTracks(state) {
        return state.tracks;
    }
};

export const mutations = {
    SET_ALL_TRACK: (state, tracks) => (state.tracks = tracks), 
};

export const actions = {
    async fetchAllTracks({commit}) {
        const {data} = await this.$axios.get(
            'tracks'
          ); 
          commit('SET_ALL_TRACK', data.datas);
    }, 
};