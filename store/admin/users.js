 
export const state = () => ({
    users: [], 
});

export const getters = {
    allLatestUsers(state) {
        return state.users;
    }, 
};

export const mutations = {
    SET_LATEST_USER: (state, users) => (state.users = users),  
    DELETE_USER: (state, id) => (state.users = state.users.filter(user => user.id !== id)),
    ACTIVE_DEACTIVE:   (state, users) => (state.users = users),
};

export const actions = {
    async fetchAllLatestUsers({commit}) {
        const {data} = await this.$axios.get(
            'admin/users'
          ); 
          commit('SET_LATEST_USER', data.datas); 
    },
    async deleteUser({commit}, id) {
        await this.$axios.delete(
           'admin/users/delete/'+id
         ); 
         commit('DELETE_USER', id);
   },
    async activeDeactive({commit}, id) {
     const {data} =   await this.$axios.post(
           'admin/users/active-deactive/'+id
         ); 
         commit('ACTIVE_DEACTIVE', data.users);
   }
     
};