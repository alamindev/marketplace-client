 
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
    ADD_NEW_TRACK: (state, track) => state.tracks = state.tracks.push(track),
    DELETE_TRACK: (state, id) => (state.tracks = state.tracks.filter(track => track.id !== id)),
};

export const actions = {
    async fetchAllTracks({commit}) {
        const {data} = await this.$axios.get(
            'seller/tracks'
          ); 
          commit('SET_ALL_TRACK', data.datas);
    },
    async deleteTrack({commit}, id) {
         await this.$axios.delete(
            'seller/tracks/delete/'+id
          ); 
          commit('DELETE_TRACK', id);
    }
};