import React, { useState } from 'react';

const Products = () => {
  // Sample product data ‼️(btw this is not a chatGPT Comments, i like to write them to make things easier)
  
  const allProducts = [
    {
      id: 1,
      name: "RTX 5080 Ti",
      category: "Graphics Cards",
      price: 1299.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/RTX%205080",
      description: "Next-generation graphics card with real-time ray tracing and AI-enhanced graphics",
      isNew: true,
      stock: 12
    },
    {
      id: 2,
      name: "RTX 5070 Super",
      category: "Graphics Cards",
      price: 899.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/RTX%205070",
      description: "High-performance graphics for gaming enthusiasts and content creators",
      isNew: true,
      stock: 24
    },
    {
      id: 3,
      name: "Intel Core i9-14900K",
      category: "Processors",
      price: 599.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/i9-14900K",
      description: "24-core processor with boost clock up to 5.8GHz for extreme performance",
      isNew: false,
      stock: 18
    },
    {
      id: 4,
      name: "AMD Ryzen 9 9950X",
      category: "Processors",
      price: 549.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Ryzen%209",
      description: "16-core processor optimized for gaming and content creation",
      isNew: true,
      stock: 15
    },
    {
      id: 5,
      name: "ROG Maximus Z890 Hero",
      category: "Motherboards",
      price: 449.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/ROG%20Motherboard",
      description: "Premium motherboard with advanced power delivery and cooling",
      isNew: false,
      stock: 10
    },
    {
      id: 6,
      name: "Samsung 990 PRO 2TB",
      category: "Storage",
      price: 229.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/SSD",
      description: "Ultra-fast NVMe SSD with read speeds up to 7,450 MB/s",
      isNew: false,
      stock: 30
    },
    {
      id: 7,
      name: "Corsair Dominator Platinum RGB 64GB",
      category: "Memory",
      price: 329.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/RAM",
      description: "High-performance DDR5 memory with customizable RGB lighting",
      isNew: false,
      stock: 22
    },
    {
      id: 8,
      name: "NZXT Kraken Elite 360",
      category: "Cooling",
      price: 249.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/AIO%20Cooler",
      description: "Advanced liquid cooling with LCD display and exceptional thermal performance",
      isNew: true,
      stock: 8
    },
    {
      id: 9,
      name: "Lian Li O11 Dynamic EVO",
      category: "Cases",
      price: 169.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/PC%20Case",
      description: "Premium PC case with innovative design and excellent airflow",
      isNew: false,
      stock: 14
    },
    {
      id: 10,
      name: "Seasonic PRIME TX-1000",
      category: "Power Supplies",
      price: 279.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/PSU",
      description: "1000W 80+ Titanium certified power supply with exceptional efficiency",
      isNew: false,
      stock: 20
    },
    {
      id: 11,
      name: "LG UltraGear 32GR93U",
      category: "Monitors",
      price: 899.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Monitor",
      description: "32-inch 4K 144Hz gaming monitor with OLED panel",
      isNew: true,
      stock: 7
    },
    {
      id: 12,
      name: "Logitech G Pro X Superlight 2",
      category: "Peripherals",
      price: 159.99,
      image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Mouse",
      description: "Ultra-lightweight wireless gaming mouse with HERO 2.0 sensor",
      isNew: false,
      stock: 25
    }
  ];

  // State for pagination and filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 6;

  // Get unique categories
  const categories = ["All", ...new Set(allProducts.map(product => product.category))];

  // Filter products based on category and search term
  const filteredProducts = allProducts.filter(product => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products-container">
      <h1 className="text-center mb-4">PC Components</h1>
      
      {/* Search and filter */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="form-select"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Product grid */}
      <div className="row">
        {currentProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 product-card">
              <div className="position-relative">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {product.isNew && (
                  <span className="position-absolute top-0 end-0 badge bg-danger p-2 m-2">NEW</span>
                )}
                {product.stock < 10 && (
                  <span className="position-absolute top-0 start-0 badge bg-warning p-2 m-2">Low Stock</span>
                )}
              </div>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="card-title">{product.name}</h5>
                  <span className="badge bg-primary">{product.category}</span>
                </div>
                <p className="card-text flex-grow-1">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* No products found message */}
      {currentProducts.length === 0 && (
        <div className="alert alert-info text-center">
          No products found matching your criteria.
        </div>
      )}
      
      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            
            <li className={`page-item ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Products