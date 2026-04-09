
export type PageTypeValue = 
    "Landing" | 
    "Login" | 
    "RoomView";

const PageType = Object.freeze({
  Landing: "Landing"    as PageTypeValue,
  Login: "Login"        as PageTypeValue,
  RoomView: "RoomView"  as PageTypeValue,
});

export default PageType;

