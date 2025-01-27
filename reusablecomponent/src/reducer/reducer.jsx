export const reducer = (state, action) => {
      switch (action.type) {
            case 'ADD_TODO': return [...state, { id: Date.now(), ...action.payload }];
            case 'EDIT_TODO': return state.map((item) => (
                  action.payload.id === item.id ? { ...item, ...action.payload } : item
            ));
            case 'DELETE_TODO': return state.filter(item => item.id !== action.payload.id);
            default: return state;
      }
}