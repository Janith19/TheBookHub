const cartItems = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 20, quantity: 1 },
    { name: 'Product 3', price: 15, quantity: 3 },
  ];
  
  const tbody = document.querySelector('tbody');
  const totalElement = document.querySelector('#total');
  
  function renderCart() {
    tbody.innerHTML = '';
  
    let total = 0;}
  
    cartItems.forEach(item => {
      const tr = document.createElement('tr');
  
      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      tr.appendChild(nameTd);
  
      const priceTd = document.createElement('td');
      priceTd.textContent = item.price;
      tr.appendChild(priceTd);
  
      const quantityTd = document.createElement('td');
      quantityTd.textContent = item.quantity;
      tr.appendChild(quantityTd);
  
      const itemTotalTd = document.createElement('td');
      const itemTotal = item.price * item.quantity;
      itemTotalTd.textContent = itemTotal;)
      tr.appendChild(itemTotalTd);
  
      const removeTd = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        const index = cartItems
      })