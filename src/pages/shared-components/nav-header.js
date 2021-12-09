import { Component } from "react";
import { CartSvg } from "../../components/svgs/cart";
import { DownCaret } from "../../components/svgs/down-caret-svg";
import { HeartSvg } from "../../components/svgs/heart-svg";
import { MailBoxSvg } from "../../components/svgs/mail-box-svg";
import { PhoneSvg } from "../../components/svgs/phone-svg";
import { ProfileSvg } from "../../components/svgs/profile-svg";

export class NavHeader extends Component {

    render() {
        return <header className="flex flex-col">
            <TopHeader />
        </header>
    }
}

class TopHeader extends Component {

    render() {
        return <div className="flex justify-between text-gray-200 text-sm font-josefin-sans bg-violet  px-1/5 py-3.5">
            <section className="flex space-x-12">
                <div className="flex items-center space-x-3">
                    <MailBoxSvg className="w-3.5 h-3" />
                    <p >
                        mhhasanul@gmail.com
                    </p>
                </div>

                {/* 12 space here */}
                <div className="flex items-center space-x-3">
                    <PhoneSvg className="w-3.5 h-3" />
                    <p>
                        (12345)67890
                    </p>
                </div>
            </section>


            <section className="flex items-center">
                <div className="flex items-center mr-5">
                    <p className="mr-1">English</p>
                    <DownCaret className="w-3 h-3"/>
                </div>

                <div className="flex items-center mr-5">
                    <p className="mr-1">USD</p>
                    <DownCaret className="w-3 h-3"/>
                </div>

                <div className="flex items-start mr-5">
                    <p className="mr-1">Login</p>
                    <ProfileSvg className="w-4 h-4"/>
                </div>

                <div className="flex items-center mr-7">
                    <p className="mr-1">Wishlist</p>
                    <HeartSvg className="h-3.5 w-3.5 fill-current text-white"/>
                </div>

                <CartSvg className="text-white fill-current h-6 w-6"/>
            </section>
        </div>
    }
}

// class BottomHeader extends Component{

//     render(){
//         return <div className="text-white bg-violet px-2/5">
//             hello
//         </div>
//     }
// }



//https://tailwindcss.com/docs/text-color