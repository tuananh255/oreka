import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    // const dispatch = useDispatch();
  const { id } = useParams();
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  const [quantity, setQuantity] =
    useState(1);
  const [comment, setComment] =
    useState("");
  const [count, setCount] = useState(1);
  const [
    packageQuantity,
    setPackageQuantity,
  ] = useState(0);

  const [
    mainImageIndex,
    setMainImageIndex,
  ] = useState(0);
  const [
    brandProduct,
    setBrandProduct,
  ] = useState([]);
  const aProduct =[]
  return (
    <section className='bg-[#f3f3f3]'>
        <div className="container pt-[100px]">
          <div className="row">
            <div className="col-6 d-flex gap-20">
              <div
                className=""
                style={{ width: "76px" }}>
                {/* {aProduct &&
                  aProduct?.images.map(
                    (e, index) => (
                      <img
                        className="mb-2 thumbnail"
                        width="76px"
                        height="76px"
                        src={e?.url}
                        key={index}
                        alt=""
                        onClick={() =>
                          setMainImageIndex(
                            index
                          )
                        }
                        style={{
                          cursor:
                            "pointer",
                          border:
                            mainImageIndex ===
                            index
                              ? "2px solid #007bff"
                              : "none",
                        }}
                      />
                    )
                  )} */}
              </div>
              <div
                className="relative images-product"
                style={{
                  margin: "0 auto",
                }}>
                <img
                  width="100%"
                  className="h-[370px]"
                //   src={mainImage}
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <h5 className="mb-2 text-[34px]">{aProduct?.title}</h5>
              </div>
              <div className="">
                {/* <ProductDescription
                  description={
                    aProduct &&
                    aProduct?.descriptionShort
                  }
                /> */}
              </div>
              <div className="flex gap-10 items-center">
                {/* <ReactStars
                  count={5}
                  size={24}
                  value={
                    aProduct?.totalrating
                  }
                  edit={false}
                  activeColor="#ffd700"
                /> */}
              </div>
              <div className="flex items-center gap-10 py-3">
                <h1 className="price">
                  {new Intl.NumberFormat(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  ).format(
                    aProduct?.priceSale
                  )}
                </h1>
                <h6 className="price-sale">
                  {new Intl.NumberFormat(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  ).format(
                    aProduct?.price
                  )}
                </h6>
                <p className="salee mb-0">
                  -12%
                </p>
              </div>
              <div className="">
                <p>
                  Thời gian giao hàng:{" "}
                  <strong>
                    7-10 ngày
                  </strong>
                </p>
                
                <p>
                  Số lượng tồn kho:{" "}
                  <strong>
                    {/* {packageQuantity > 0 ? packageQuantity : 0} */}
                  </strong>
                </p>
              </div>
              <div className="quantity-selector my-4">
                <button
                  className="button"
                //   onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control inline w-[120px] no-spinner" // Thêm class "no-spinner"
                  value={quantity}
                //   onChange={handleQuantityChange}
                  style={{
                    width: "60px",
                    textAlign: "center",
                  }}
                  min={1}
                />
                <button
                  className="button"
                //   onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
              {packageQuantity > 0 ? (
                <button
                  className="button-rq"
                //   onClick={() =>
                //     handleAddToCart()
                //   }
                  >
                  Thêm vào giỏ hàng
                </button>
              ) : (
                <button className="button-dis disabled">
                  Hết hàng
                </button>
              )}
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "100px",
            }}>
            <div className="infoProduct mb-5">
              <h5 className="text-[24px] mb-10">THÔNG TIN MIÊU TẢ</h5>
              <div className="">
                {/* <ProductDescription
                  description={
                    aProduct?.description
                  }
                /> */}
              </div>
            </div>
            <div className="infoProduct">
              <h5>ĐÁNH GIÁ SẢN PHẨM</h5>
              <div className="">
                <div className="review-form py-4">
                  <form
                    action=""
                    className="d-flex flex-column gap-20"
                    // onSubmit={
                    //   handleSubmit
                    // }
                    >
                    <div className="">
                      {/* <ReactStars
                        count={5}
                        size={24}
                        value={count}
                        edit={true}
                        activeColor="#ffd700"
                        onChange={(e) =>
                          setCount(e)
                        }
                      /> */}
                    </div>
                    <div className="m-2">
                      <textarea
                        placeholder="Comments"
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        value={comment}
                        onChange={(e) =>
                          setComment(
                            e.target.value
                          )
                        }></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                     
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <h4>
                      Danh sách đánh giá
                    </h4>
                    {/* {aProduct &&
                      aProduct?.ratings?.map(
                        (e, index) => (
                          <div
                            key={index}>
                            <div className="d-flex gap-10 align-items-center">
                              <ReactStars
                                count={5}
                                size={24}
                                value={
                                  e?.star
                                }
                                edit={
                                  false
                                }
                                activeColor="#ffd700"
                              />
                            </div>
                            <p className="mt-3">
                              {e?.comment}
                            </p>
                          </div>
                        )
                      )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="py-4">
              <h3 className="py-4">
                SẢN PHẨM CÙNG DANH MỤC
              </h3>
              <div className="d-flex flex-wrap row">
                {/* {brandProduct &&
                  brandProduct.map(
                    (product, index) => (
                      <Product
                        key={index}
                        item={product}
                      //   col={3}
                      />
                    )
                  )} */}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
