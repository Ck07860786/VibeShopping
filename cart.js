

    
        const cartItemsElement = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        const addToCartButtons = document.querySelectorAll(".add-to-cart");

        const cart = [];

        addToCartButtons.forEach(button => {
            button.addEventListener("click", addToCart);
        });

        function addToCart(event) {
            const productName = event.target.getAttribute("data-name");
            const productPrice = parseFloat(event.target.getAttribute("data-price"));

            cart.push({ name: productName, price: productPrice });
            updateCart();
        }

        function updateCart() {
            cartItemsElement.innerHTML = "";
            let total = 0;

            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.name} - $${item.price}`;
                cartItemsElement.appendChild(listItem);
                total += item.price;
            });

            totalPriceElement.textContent = total.toFixed(2);
        }
