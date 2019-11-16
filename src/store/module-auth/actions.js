export function incrementCount ({ commit }) {
  commit('INCREMENT');
}

const decrementCount = ({ commit }) => {
  commit('DECREMENT')
}

// export {
//   incrementCount,
//   decrementCount
// }
