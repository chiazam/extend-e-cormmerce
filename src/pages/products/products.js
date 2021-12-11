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

        this.state = { product: undefined };

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

        return <section className="flex flex-col bg-white py-20 px-1/5 w-full">

            <h1 className="text-indigo-900 font-semibold text-4xl font-josefin-sans self-center">Product Details</h1>

            <div className="flex flex-wrap mt-4 w-full">



            </div>

        </section>
    }
}