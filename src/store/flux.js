const getState = ({ setStore, getActions, getStore }) => {
    return {
      store: {
        favorite: [],
        
      },
      actions: {
        addFavorite: (name) => {
          const { favorite } = getStore();
          if (!favorite.includes(name)) {
            const newFavorites = [...favorite, name];
            setStore({ favorite: newFavorites });
            console.log(newFavorites);
          }
        },
        removeFavorite: name => {
          const store = getStore();
          const newFavorites = store.favorite.filter(item => item !== name);
          setStore({favorite: newFavorites});
        }
      },
  
    };
  };
  export default getState;