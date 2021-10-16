const Types = {
  changeLoader: 'MenuList/ initial loading process',
  getMenu: 'MenuList/ menu items loaded',
  error: 'MenuList/ request errors',
  addItem: 'Cart/ add item to cart',
  removeItem: 'Cart/ remove item from cart',
  setOrder: 'Cart/ post order to db',
  clearCart: 'Cart/clear cart',
  searchCategory: 'MenuList/ search Category by input value',
  getOrder: 'Order/ orders items loaded', // add new Action
  resetOrder: 'Order/ reset current order' // add new Action
}

export default Types;