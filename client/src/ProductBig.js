import React from "react";
// import Star from "@material-ui/icons/Star";
import { useStateValue } from "./contexts/StateProvider";
import "./ProductBig.css";
import Info from "./Info";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import OpacityIcon from "@material-ui/icons/Opacity";

function ProductBig({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        // rating: rating, !!!!!if you want to use again, add to the props
        image: image,
      },
    });
  };

  return (
    <div className="productbig">
      <div className="productbig__topImage">
        <div className="productbig__topImageTitle">
          <span>Introducing: </span>
        </div>
        <span className="productbig__topImageText">Gravity Origin</span>
        <span className="productbig__topImageTextTwo">#1 LED Light</span>
        <span className="productbig__topImageTextTwo">Find out why below:</span>
      </div>
      <Info />
      <div className="productbig__reasons">
        <div className="productbig__easy">
          <span className="title"> #1: Easy To Use</span>
          <span className="productbig__reasonsinfo">
            {" "}
            Our Gravity Origin LED Light uses the most intuitive software out
            there: WLED. Inside the box contains a custom RGB LED Light strip
            that is ready to go straight out the box. Hook it up through your
            phone, and voila! You can now pick the numerous amounts of patterns
            and colors that we offer.{" "}
          </span>
        </div>
        <div className="productbig__wifi">
          <span className="title"> #2: Wifi Enabled </span>
          <span className="productbig__reasonsinfo">
            {" "}
            This LED light is special. We especially took in account ease of use
            when designing this product. One of the major things that make this
            LED light so enjoyable to use is the fact that it is 100% controlled
            through wifi.{" "}
          </span>
        </div>
        <div className="productbig__controller">
          <span className="title"> #3: No Controller </span>
          <span className="productbig__reasonsinfo">
            {" "}
            As mentioned previously, the Gravity Origin LED light strip is
            contolled through your phone through the WLED software. No need to
            scramble around your room in order to find an old controller{" "}
          </span>
        </div>
        <div className="productbig__water">
          <span className="title"> #4: Water Proof </span>
          <span className="productbig__reasonsinfo">
            {" "}
            One of the main reasons LED lights die is because of accidental
            spillage on the strip. This completely ruins a persons day. We
            wanted to make sure that this is prevented for our customers. We
            carefully picked out the best LED strips for waterproofing in the
            Gravity Origin LED light.{" "}
          </span>
        </div>
        <div className="productbig__color">
          <span className="title"> #5: Tons of patterns </span>
          <span className="productbig__reasonsinfo">
            {" "}
            Not convinced? This LED light strip is one of the most dense LED
            light per meter out there. This high number of LED lights allows for
            some truly incredible color brightness and accuracy. In addition, we
            jam packed the Gravity Origin with over 80 unique patterns. This
            combination make the the most flashy and good looking Led light
            strip out there.{" "}
          </span>
        </div>
        <div className="productbig__cart">
          <span className="title"> What are you waiting for? </span>
          <span className="title">Add to cart below:</span>
        </div>
      </div>
      <div className="productbig__info">
        <img className="productbig__Image" src={image} alt="" />
        <div className="productbig__right">
          <p className="productbig__cardInfo">{title}</p>
          <p className="productbig__cardInfo">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div>
            The perfect LED lights for any occasion. Over 100 custom design
            patterns. Wireless connection to control lights through custom phone
            software. The best led strip out there. Easy to install. Best in
            class for ease of use. Uses the WLED software.
          </div>
          {/* <div className="product__rating">
          Creating an array of size $rating
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div> */}
          <button className="productbig__button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBig;
