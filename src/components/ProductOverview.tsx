import { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct, addToCart } from "../actions";
import Navbar from "./Navbar";

const ProductOverview = (props: any) => {
  useEffect(() => {
    let id = props.match.params.id;
    props.getProduct(id);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white ">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={props.product.image}
            alt={props.product.title}
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-3xl font-bold mb-2">
              {props.product.title}
            </h5>
            <p className="text-gray-500 text-base mb-4">
              {props.product.description}
            </p>
            <p className="text-gray-900 text-2xl font-bold">
              {`$${props.product.price}`}
            </p>
            <button
              type="button"
              onClick={() => {
                props.addToCart({
                  title: props.product.title,
                  image: props.product.image,
                  price: props.product.price,
                });
              }}
              className="group relative flex w-full justify-center rounded border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { product: state.productDetails };
};
export default connect(mapStateToProps, {
  getProduct,
  addToCart,
})(ProductOverview);
