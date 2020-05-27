// export default {
//     namespaced: true,
//     state: {
//         isLogin: true
//     },
//     mutations: {
//         loginChange(bool) {
//             state.isLogin = bool;
//         }
//     }
// };

export const state = () => ({
    isLogin: false
})
export const mutations = {
    loginChange(state,val) {
        state.isLogin = val
    }
}