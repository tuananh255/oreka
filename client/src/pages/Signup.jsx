import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    
    <section className='bg-[#f3f3f3]'>
        <div className='container flex py-5'>
            <div class="relative flex-1">
                <img class="mx-auto pt-16" src="https://static.oreka.vn/d/_next/static/images/banner_login-815970500699766c2df2ffbb98a94b27.png" alt="banner login"/>
            </div>
            <div className="bg-white w-[400px] p-4 rounded-2xl">
                <form action="" className='mx-auto w-[350px]'>
                    <h6 className='text-center'>Đăng ký</h6>
                    <div className="mb-3 relative">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nhập địa chỉ Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="form-control pr-[120px]"
                                    id="exampleInputEmail1"
                                    // value={emailRegister}
                                    // onChange={(e)=>setEmailRegister(e.target.value)}
                                    aria-describedby="emailHelp"
                                    placeholder="Nhập địa chỉ email"
                                />
                            
                            </div>
                        </div>
                        
                        <div className="">
                            <label htmlFor="name" className="form-label">Nhập tên</label>
                            <input placeholder='Nhập tên'  type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                            <div className="relative">
                                <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Nhập mật khẩu"
                                className="form-control pr-10 w-full"
                                />
                                <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? 'Ẩn' : 'Hiện'}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className=" btn btn-ban hover:cursor-pointer text-white w-100">Đăng ký</button>
                        </div>
                        <div className="flex mt-4">
                            <p className='me-2 text-[#999]'>Bạn đã có sẵn tài khoản?</p> <Link to="/dang-nhap" className='xem'>Đăng nhập</Link>
                        </div>
                </form>
            </div>
        </div>
    </section>
  )
}
