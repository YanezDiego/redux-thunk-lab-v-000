export default function catReducer(state = {
  loading: false,
  pictures: []
}, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return{
        ...state,
        leading: true
      };

      case "FETCH_CATS":
        return {
          loading: false,
          pictures: action.payload
        };

    default:
    return state;

  }
}
