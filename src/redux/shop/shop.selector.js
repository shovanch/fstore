import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParams =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
