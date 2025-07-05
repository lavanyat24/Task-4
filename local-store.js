const items = [
      { name: "Laptop", category: "electronics", price: 700 },
      { name: "Book - JS", category: "books", price: 30 },
      { name: "Phone", category: "electronics", price: 400 },
      { name: "Book - HTML", category: "books", price: 25 }
    ];

    function filterProducts() {
      const category = document.getElementById("category").value;
      const sort = document.getElementById("sort").value;
      let filtered = category === "all" ? [...items] : items.filter(i => i.category === category);

      if (sort === "low") filtered.sort((a, b) => a.price - b.price);
      if (sort === "high") filtered.sort((a, b) => b.price - a.price);

      document.getElementById("products").innerHTML = filtered.map(
        item => `<div class="card"><h3>${item.name}</h3><p>$${item.price}</p></div>`
      ).join('');
    }

    window.onload = filterProducts;