const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl: 'assets/images/pillow.jpeg',
      price: 19.99,
      description: 'A soft pillow.'
    },
    {
      title: 'A Carpet',
      imageUrl: 'assets/images/carpet.jpg',
      price: 89.99,
      description: 'A nice carpet.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
