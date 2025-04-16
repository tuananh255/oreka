import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
const priceRanges = [
    { label: 'Tất cả', value: '' },
    { label: 'Dưới 100.000', value: '0-100000' },
    { label: 'Từ 100.000 - 300.000', value: '100000-300000' },
    { label: 'Từ 300.000 - 1.000.000', value: '300000-1000000' },
    { label: 'Trên 1.000.000', value: '1000000-' }
  ];
const productState =[]
export default function CategoryProduct() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  const [filter, setFilter] = useState({ priceRange: '', name: '' });

    const filterProducts = (products) => {
        let filtered =products && products?.filter((product) => {
          const matchesName = product.title.toLowerCase().includes(filter.name.toLowerCase());
          const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(normalizeString(product.category)); // Chuẩn hóa danh mục sản phẩm
          let matchesPrice = true;
      
          if (filter.priceRange) {
            const [minPrice, maxPrice] = filter.priceRange.split('-').map((p) => parseFloat(p));
            matchesPrice = product.priceSale >= minPrice && (isNaN(maxPrice) || product.priceSale <= maxPrice);
          }
      
          return matchesName && matchesCategory && matchesPrice;
        });
      
       
      
        return filtered;
      };
  const filteredProducts = filterProducts(productState);
      const categoryState =[]
  return (
    <section className='bg-[#f3f3f3] py-5'>
      <div className="container">
        <div className="flex">
            <div className="w-[20%]">
                <div className="">
                    <div>
                    <h6 className="mb-2 pt-3 font-bold">Giá tiền</h6>
                    {priceRanges.map(range => (
                        <div key={range.value} className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priceRange"
                            value={range.value}
                            checked={filter.priceRange === range.value}
                            // onChange={handlePriceRangeChange}
                        />
                        <label className="form-check-label">
                            {range.label}
                        </label>
                        </div>
                    ))}
                    </div>
                    <div>
                    <h6 className="mb-2 pt-3 font-bold">Danh mục</h6>
                    <div key="all" className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                name="category"
                value="all"
                // checked={selectedCategories.length === 0}
                onChange={() => {
                //   setSelectedCategories([]);  // Khi chọn "Tất cả", bỏ chọn các danh mục khác
                }}
            />
            <label className="form-check-label">
                Tất cả
            </label>
            </div>
            {Array.isArray(categoryState) &&
                categoryState.map((category) => (
                    <div key={category._id} className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="category"
                        value={category.title}
                        // checked={selectedCategories.includes(normalizeString(category.title))} // So sánh với chuỗi chuẩn hóa
                        // onChange={() => handleCategorySelect(category.title)}
                    />
                    <label className="form-check-label">{category.title}</label>
                    </div>
                ))}
                    </div>
                </div>
            </div>
            <div className="w-[80%]">
                <div className="flex items-center justify-between">
                    <h6>Bán sách cũ</h6>
                    <select 
                        name="sortOrder" 
                        // value={sortOrder} 
                        // onChange={handleSortOrderChange} 
                        className="form-control"
                        style={{width:"200px"}}
                    >
                        <option value="">Lọc theo thứ tự</option>
                        <option value="asc">Giá tăng dần</option>
                        <option value="desc">Giá giảm dần</option>
                    </select>
                </div>
                <div className="flex flex-wrap justify-items-start gap-3 mt-4">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
