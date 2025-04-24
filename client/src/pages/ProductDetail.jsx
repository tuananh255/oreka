import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProduct,getAProduct, ratingProduct } from '../features/products/productSlice';
import ProductDescription from '../components/ProductDescription';
import ReactStars from "react-rating-stars-component";
import Rating from '@mui/material/Rating';
import { getAllPackage } from "../features/packageProduct/packageProductSlice";
import {
  cart,
  getCart,
} from "../features/users/userSlice";
import toast from 'react-hot-toast';
export default function ProductDetail() {
    const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(()=>{
        window.scroll(0,0)
    },[])
  const [quantity, setQuantity] =useState(1);
  const [comment, setComment] =useState("");
  const [count, setCount] = useState(1);
  const [packageQuantity,setPackageQuantity,] = useState(0);
  const [mainImageIndex,setMainImageIndex,] = useState(0);
  const [brandProduct, setBrandProduct,] = useState([]);
  useEffect(()=>{
    window.scroll(0,0)
    dispatch(getAProduct(id))
  },[])
  const aProduct = useSelector((state) =>state.product?.AProduct?.findProduct);
    console.log("Ratings:", aProduct?.ratings);

  useEffect(() => {
    dispatch(getAProduct(id));
    dispatch(getAllPackage());
    dispatch(getAllProduct());
    window.scroll(0, 0);
  }, [id]);

  const packageProduct = useSelector((state) =>state.package.packages?.newPackageProduct);
  const allProduct =useSelector((state) => state.product?.products) || [];
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    setPackageQuantity(0);
    if (
      packageProduct &&
      packageProduct.length > 0
    ) {
      for (
        let i = 0;
        i < packageProduct.length;
        i++
      ) {
        if (
          packageProduct[i].productId
            ?._id === aProduct?._id
        ) {
          setPackageQuantity(
            packageProduct[i].quantity
          );
          break;
        }
      }
    }
  }, [packageProduct, aProduct]);
  const mainImage =
    aProduct?.images?.[mainImageIndex]
      ?.url || "";
  useEffect(() => {
    if (
      aProduct &&
      allProduct.length > 0
    ) {
      const filteredProducts =
        allProduct
          .filter(
            (product) =>
              product.category ===
                aProduct.category &&
              product._id !==
                aProduct._id
          )
          .slice(0, 4);
      setBrandProduct(filteredProducts);
    }
  }, [aProduct, allProduct]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      star: count,
      prodId: id,
      comment: comment,
    };
    dispatch(ratingProduct(data)).then(
      () => {
        dispatch(getAProduct(id)); // Refresh product data after rating
        toast.success(
          "Đánh giá thành công"
        );
        setComment(""); // Clear the comment field
        setCount(1); // Reset star count
      }
    );
  };
  const handleAddToCart = () => {
    if (user !== null) {
      // console.log({ productId: id, quantity: quantity, price: aProduct?.price })
      if (quantity > packageQuantity) {
        toast.warning("Không đủ số lượng sản phẩm có sẵn.");
        return; // Exit the function early
      }
      dispatch(
        cart({
          productId: id,
          quantity: quantity,
          price: aProduct?.price,
        })
      );
      setTimeout(() => {
        dispatch(getCart());
      }, 300);
    } else {
      toast.warning(
        "Vui lòng đăng nhập"
      );
    }
  };
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    
    if (value < 1) {
      setQuantity(1);
    } else if (value > packageQuantity) {
      setQuantity(value); // Giữ lại giá trị người dùng nhập
    } else {
      setQuantity(value);
    }
  };
  
  
  const incrementQuantity = () => {
    if (quantity < packageQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      toast.warning("Không đủ số lượng sản phẩm có sẵn.");
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  
  console.log(aProduct)
  return (
    <section className='bg-[#f3f3f3]'>
        <div className="container mt-5 pt-[100px]">
          <div className="row">
            <div className="col-6 d-flex gap-20">
              <div
                className=""
                style={{ width: "76px" }}>
                {aProduct &&
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
                  )}
              </div>
              <div
                className="relative images-product"
                style={{
                  margin: "0 auto",
                }}>
                <img
                  width="100%"
                  className="h-[370px]"
                  src={mainImage}
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <h5 className="mb-2 text-[34px]">{aProduct?.title}</h5>
              </div>
              <div className="">
                <ProductDescription
                  description={
                    aProduct &&
                    aProduct?.descriptionShort
                  }
                />
              </div>
              <div className="flex gap-10 items-center">
                <Rating
                  name="product-rating"
                  value={aProduct?.totalrating || 0}
                  precision={0.5}
                  readOnly
                />
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
                    {packageQuantity > 0 ? packageQuantity : 0}
                  </strong>
                </p>
              </div>
              <div className="quantity-selector my-4 flex">
                <button
                  className="button"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control inline w-[120px] no-spinner" // Thêm class "no-spinner"
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={{
                    width: "60px",
                    textAlign: "center",
                  }}
                  min={1}
                />
                <button
                  className="button"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
              {packageQuantity > 0 ? (
                <button
                  className="button-rq"
                  onClick={() =>
                    handleAddToCart()
                  }
                  >
                  Thêm vào giỏ hàng
                </button>
              ) : (
                <button className="button-rq disabled">
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
                <ProductDescription
                  description={
                    aProduct?.description
                  }
                />
              </div>
            </div>
            <div className="infoProduct">
              <h5>ĐÁNH GIÁ SẢN PHẨM</h5>
              <div className="">
                <div className="review-form py-4">
                  <form
                    action=""
                    className="d-flex flex-column gap-20"
                    onSubmit={
                      handleSubmit
                    }
                    >
                    <div className="">
                    <div className="">
                      <Rating
                        name="user-rating"
                        value={count}
                        precision={1}
                        onChange={(event, newValue) => {
                          setCount(newValue);
                        }}
                      />
                    </div>


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
                    {user !== null ? (
                        <button
                          className="button-rq"
                          type="submit">
                          Gửi
                        </button>
                      ) : (
                        <Link
                          className="text-primary"
                          style={{
                            fontWeight:
                              "600",
                          }}
                          to="/login">
                          Đăng nhập để
                          đăng ký
                        </Link>
                      )}
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <h4>
                      Danh sách đánh giá
                    </h4>
                    {aProduct &&
                      aProduct?.ratings?.map(
                        (e, index) => (
                          <div
                            key={index}>
                            <div className="d-flex gap-10 align-items-center">
                            <Rating
                              name={`rating-${index}`}
                              value={e?.star || 0}
                              precision={1}
                              readOnly
                            />
                            </div>
                            <p className="mt-3">
                              {e?.comment}
                            </p>
                          </div>
                        )
                      )}
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
