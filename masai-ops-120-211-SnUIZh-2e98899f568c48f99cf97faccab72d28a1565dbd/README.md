# JS-Inventory-Management

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should be able to submit the form with product details 1 2 marks
 ✅ should be able to submit the form with product details 2 - 1 marks
 ✅ onclicking the show products button redirect to products page(/inventory.html) - 1 mark
 ✅ onclicking add more products button  redirect to index page (/index.html) - 1 marks
 ✅ check if data added to localstorage successfully-2 marks
 ✅ check if data shown on inventory page correctly - 2 mark
 ✅ check remove functionality is working - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules

## Folder structure

- index.html
- inventory.html
- src
  - scripts
    - index.js
    - inventory.js
- styles
  - index.css
  - inventory.css
- README.md
- package.json
- cypress (ignore the file under cypress)

### You haven't taught cypress to run the testcases locally , you can see the passed/ failed test cases and test errors on CP itself.

## Description
[VideoExplainer](https://coding-platform.s3.ap-south-1.amazonaws.com/prod/submissions/46115/output/video/js201-b20-c1.cy.js.mp4)

Create an inventory managemnet system where a user can add products on one page, maintain the data in local storage and and see list of products on a different page. The user should also be able to delete any product from the list

- Index.html

  - Create a form which will accept name, brand, price, and image link from the user
    - the following are the input fields with corresponding ids
    - name - `product_name`
    - brand - `product_brand`
    - price - `product_price`
    - imageLink - `product_image`
    - an input tag with type as `button` and value as `Add Product`
  - On submit invoke `getFormData` function (given in index.js file) and get the data . (Note: make sure you are preventing the default behaviour of the form to refresh the page- you can refer to[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event))
  - Invoke `addData` function and pass name, brand, price and image as arguments.
  - `addData` function should take the form data and store the data in local storage as array of items with a key called `data`
  - follow the below schema to store the data in local storage
    ```
    {
     name
     brand
     price
     image
    }
    ```
  - There should be another button `Show products` with id as `show_products`
  - on clicking the `Show products` button `redirectToInventoryPage` function should be invoked and the page redirects to this path `/inventory.html`

  <img width="722" alt="Screenshot 2022-10-07 at 7 49 23 PM" src="https://user-images.githubusercontent.com/39851506/194578310-2d28a640-42ec-48ca-84b5-4bd50b07a1d1.png">

- Inventory.html

  - This page should show all the products present in grid format (3 columns) from the local storage.
  - on inventory page loads invoke `append` function
  - `append` function is used to get the produts from the local storage and append the data to the main `div` with id `products_data` (given in inventory.html)
  - The user should be able to remove products onclicking the `remove product` button of each product.
  - To achieve this onclicking the remove product button invoke `remove` function and pass the index of the product as an argument.
  - - There should be another button `Add more products` with id as `add_product` in inventory page.
  - on clicking the `Add more products` button `redirectToIndexPage` function should be invoked and the page redirects to this path `/index.html`

![](https://i.imgur.com/7iTR8kp.png)

- you can add styling to index and inventory in index.css and inventory.css under `styles` folder

**Note:- Do not use any other names for the methods other than mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
