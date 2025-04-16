import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Dropzone from "react-dropzone";

export default function Seller() {
    useEffect(()=>{
            window.scroll(0,0)
        },[])
  return (
    <section className='bg-[#f3f3f3] py-5'>
      <div className="container">
        <h3 className='font-extrabold'>Đăng bán</h3>
        <p>Mô tả các mặt hàng một cách trung thực và nhận được khoản thanh toán đảm bảo 100%.</p>
        <div className="flex items-center mt-3">
            <h4>Bước 1 </h4>
            <FaArrowRight className='mx-3'/> 
            <h4>Bước 2</h4>
        </div>
        
        <form action="" className='bg-white p-4'>
            <div className="mb-3">
                <label htmlFor="Ảnh" className='font-bold mb-2 text-[14px]'>Ảnh</label>
                <Dropzone
                //   onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                >
                {({ getRootProps, getInputProps }) => (
                    <section className='border w-100 py-5 cursor-pointer'>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className='text-center'>
                        Xin vui lòng tải ảnh lên
                        </p>
                    </div>
                    </section>
                )}
                </Dropzone>
            </div>
            <div className="mb-3 w-[50%]">
                <label htmlFor="Danh mục" className='font-bold mb-2 text-[14px]'>Danh mục</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Danh mục</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3 w-[50%]">
                <label htmlFor="Tên sản phẩm" className='font-bold mb-2 text-[14px]'>Tên sản phẩm</label>
                <input placeholder='Nhập vào'  type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3 w-[50%]">
                <label htmlFor="Tình trạng" className='font-bold mb-2 text-[14px]'>Tình trạng</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Tình trạng</option>
                    <option value="Mới">Mới</option>
                    <option value="Như mới">Như mới</option>
                    <option value="Tốt">Tốt</option>
                    <option value="Trung bình">Trung bình</option>
                    <option value="Kém">Kém</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button type="submit" className=" btn btn-ban hover:cursor-pointer text-white w-100">Tiếp theo</button>
            </div>
        </form>
      </div>
    </section>
  )
}
