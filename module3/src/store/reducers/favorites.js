const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          name: 'facebook/react',
          description:
            'descricao descricao descricao descricao descricao descricao descricao descricao',
          url: 'http://github.com/facebook.com/react',
        },
      ];
    default:
      return state;
  }
}
