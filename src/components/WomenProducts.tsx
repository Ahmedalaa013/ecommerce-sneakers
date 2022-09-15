import { useEffect } from "react";
import { connect } from "react-redux";
import { getWomenProducts } from "../actions";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const WomenProducts = (props: any) => {
  useEffect(() => {
    props.getWomenProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.allwomenProducts.map((product: any) => (
              <Link
                to={{ pathname: `/details/${product.id}` }}
                key={product.id}
              >
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <p>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </p>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mt-2">
                      {`${product.price}$`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { allwomenProducts: state.womenProducts };
};
export default connect(mapStateToProps, {
  getWomenProducts,
})(WomenProducts);
