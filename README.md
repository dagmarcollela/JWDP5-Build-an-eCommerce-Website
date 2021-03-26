# JWDP5-Build-an-eCommerce-Website

## Consuming an API

##### Api repository: [https://github.com/OpenClassrooms-Student-Center/JWDP5](https://)

### Prerequisites

You will need to have Node and `npm` installed locally on your machine.

### Installation

Clone this repo. From within the project folder, run `npm install`. You can then run the server with `node server`. The server should run on `localhost` with default port `3000`. If the server runs on another port for any reason, this is printed to the console when the server starts, e.g. `Listening on port 3001`.


### ARCHITECTURE

● A list view page, showing all items available for sale.
● A single product page (using URL query parameters), which will  dynamically
show the item selected by the user, display a description and price in dollars, and allow
users to personalize the product and add it to their cart.
● A cart page (using the localStorage JavaScript functionality), showing a summary
of products in the cart, the total price, and a form with which to submit an order.
● An order confirmation page, thanking the user for their order, showing the total
price and the order ID returned by the server.

### APIs

Although the MVP will be a single application, the back-end for three applications have
already been set up. Choose from the following:

● Handmade teddy bear store - http://localhost:3000/api/teddies
● Vintage camera store - http://localhost:3000/api/cameras **(USED)**
● Oak furniture store - http://localhost:3000/api/furniture
