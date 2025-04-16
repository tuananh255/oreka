import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Product({title,img,location,price}) {
  const titleProduct = "Nghĩ Như Hoàng Đế La Mã: Triết Lý Khắc Kỷ Của Marcus Aurelius - Donald Robertson. Một cuốn sách rất hay nói về nội tâm, sự bình tĩnh, và cách lãnh đạo như một vị vua.";

  // Cắt title thành 30 từ
  const truncateByWords = (str, maxWords) => {
    const words = str.split(' ');
    if (words.length <= maxWords) return str;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <div className="w-[244px] h-[424px] border">
        <Link to='/oreka/san-pham' className='product'>
            <img
                src="https://static.oreka.vn/250-250_583bf6fe-622e-40b3-bc6a-4ed7132c817c.webp"
                alt=""
            />
        </Link>
      <div className="p-2 mt-4">
        <Link to='/oreka/san-pham'>
            <p className="text-[14px]">
            {truncateByWords(titleProduct, 11)}
            </p>
        </Link>
        <h6 className='font-semibold pt-1 pb-2'>120.000đ</h6>
        <div className="flex items-center">
            <FaLocationDot className='me-2 text-[14px] text-[#999]'/> 
            <span>Hồ chí minh</span>
        </div>
      </div>
    </div>
  );
}
