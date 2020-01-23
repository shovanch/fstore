const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/HrTNGkt/h9-600.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/Zm9Ycgx/s5-600.jpg",
      id: 2,
      linkUrl: "shop/shoes"
    },
    {
      title: "watches",
      imageUrl: "https://i.ibb.co/H2p5XYZ/w15-600.jpg",
      id: 3,
      linkUrl: "shop/watches"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/2P8pjdG/wm18-600.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/tsHxfmk/m4-600.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

// No action here, as we are just returning the state
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
