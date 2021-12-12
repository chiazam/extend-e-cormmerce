import { Component } from "react";
import PropTypes from 'prop-types';
import { CartSvg } from "../../components/svgs/cart";
import { HeartSvg } from "../../components/svgs/heart-svg";
import { ZoomSvg } from "../../components/svgs/zoom-svg";
// import chair1 from "../../images/chair-1.png";
// import chair2 from "../../images/chair-2.png";
// import chair3 from "../../images/chair-3.png";
// import chair4 from "../../images/chair-4.png";
import { ajax } from "../../others/ajax";
import { useParams } from "react-router-dom";

export let ProdHooks = (props) => {

    return <Products params={useParams()} />

};

export class Products extends Component {

    constructor(props) {

        super(props);

        this.state = { product: {} };

        this.updateProduct = (data) => {

            const element = data.res.data;

            this.setState({
                product: {
                    category: element['category'],
                    id: element['id'],
                    image: element['image'],
                    price: "$" + element['price'],
                    name: element['title'],
                    desc: element['description']
                }
            });

            console.log(this.state.product);

        }

        this.url_params = this.props.params.id;

        ajax(`https://fakestoreapi.com/products/${this.url_params}`, this.updateProduct);

    }

    render() {

        console.log(this.state.product);

        return <section className="flex flex-col bg-white py-20 px-16 w-full">

            <h1 className="text-indigo-900 font-semibold text-4xl font-josefin-sans self-center">Product Details</h1>

            <div className="flex max-w-3xl mt-4 w-full m-auto shadow-product h-92">

                <section class="flex p-1 w-3/6">

                    <section class="flex w-2/6 flex-col">

                        <section class="h-2/6 m-1 rounded-md border overflow-hidden">

                            <img src={this.state.product.image} alt="" className="object-cover w-full h-full" />

                        </section>

                        <section class="h-2/6 m-1 rounded-md border overflow-hidden">

                            <img src={this.state.product.image} alt="" className="object-cover w-full h-full" />

                        </section>

                        <section class="h-2/6 m-1 rounded-md border overflow-hidden">

                            <img src={this.state.product.image} alt="" className="object-cover w-full h-full" />

                        </section>

                    </section>

                    <section class="flex-1 m-1 rounded-md border overflow-hidden">

                        <img src={this.state.product.image} alt="" className="object-cover w-full h-full" />

                    </section>

                </section>

                <section class="flex flex-1 p-1 items-center justify-center">

                    <section class="w-5/6">

                        <h3 className="text-lg text-brand-blue tracking-wide font-bold font-lato"> {this.state.product.name} </h3>

                        <p className="text-blue-900 text-base font-josefin-sans mt-3">

                            <section className="text-brand-pink">{this.state.product.price}</section>

                        </p>

                        <p className="text-blue-900 text-base font-josefin-sans mt-3">

                            <section className="font-bold">Category</section>

                            <section><span class="text-sm">{this.state.product.category}</span></section>

                        </p>

                        <p className="text-blue-900 text-base font-josefin-sans mt-3">

                            <section className="font-bold">Description</section>

                            <section> <span class="text-sm">{this.state.product.desc}</span></section>

                        </p>

                        <p className="bg-violet rounded-full text-white text-base flex justify-center items-center font-josefin-sans mt-3 cursor-pointer">

                            <section>Add To Cart</section>

                            <section className="p-2 mx-2"> <CartSvg className="h-3.5 w-3.5 fill-current text-white"/> </section>

                        </p>

                    </section>

                </section>

            </div>

        </section>
    }
}