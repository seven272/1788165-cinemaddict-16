const filtrateListCards = (arrCards) => {

  const cardToFilterMap = {
    'All movies': () => {
      const allCards = arrCards.filter((card)=>card).length;
      return allCards;
    },

    'Favorite': () => {
      const favoriteCards = arrCards.filter((card)=>card.isFavorite === true).length;
      return favoriteCards;
    },
    'History': () => {
      const historyCards = arrCards.filter((card)=>card.isHistory === true).length;
      return historyCards;
    },
    'Watchlist': () => {
      const watchlistCards = arrCards.filter((card)=>card.isWatchlist === true).length;
      return watchlistCards;
    },
  };
  return cardToFilterMap;
};

export const generateFilter = (cards) => {
  const newObj = filtrateListCards(cards);
  return Object.entries(newObj).map(([filterName, countCards]) => ({
    name: filterName,
    count: countCards(),
  })
  );
};

