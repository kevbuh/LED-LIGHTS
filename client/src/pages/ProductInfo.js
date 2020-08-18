import React, { useEffect } from "react";
import { useStateValue } from "../contexts/StateProvider";
import "../css/ProductInfo.css";
import Info from "../Components/Why";

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
          <span className="title"> #2: WiFi Enabled </span>
          <span className="productbig__reasonsinfo">
            {" "}
            This LED light is special. We especially took in account ease of use
            when designing this product. One of the major things that make this
            LED light so enjoyable to use is the fact that it is 100% controlled
            through WiFi.{" "}
          </span>
        </div>
        <div className="productbig__controller">
          <span className="title"> #3: No Controller </span>
          <span className="productbig__reasonsinfo">
            {" "}
            As mentioned previously, the Gravity Origin LED light strip is
            contolled through your phone through the WLED software. No need to
            scramble around your room in order to find an old controller!{" "}
          </span>
        </div>
        <div className="productbig__water">
          <span className="title"> #4: Waterproof </span>
          <span className="productbig__reasonsinfo">
            {" "}
            One of the main reasons LED lights die is because of accidental
            spillage on the strip. This completely ruins a person's day. We
            wanted to ensure that this is prevented for our customers. We
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
      <div className="tech">
        <div className="productbig__info">
          <img className="productbig__Image" src={image} alt="" />
          <div className="productbig__right">
            <p className="productbig__cardInfo">{title}</p>
            <p className="productbig__cardInfo">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="productbig__productInfo">
              The perfect LED lights for any occasion. Over 100 custom design
              patterns. Wireless connection to control lights through custom
              phone software. The best LED strip out there. Easy to install.
              Best in class for ease of use. Uses the WLED software.
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
        <div className="tech__title">Technical Info</div>
        <div>
          <ul className="tech__list">
            <span>Bright</span>
            <span>5 Volts</span>
            <span>Long-Lasting</span>
            <span>300 LEDs per strip</span>
            <span>60 lights per meter</span>
            <span>Uses WLED software</span>
            <span>5 meters, or 16.4 feet per strip</span>
            <span>Low Power Consumption</span>
            <span>16 Million different colors</span>
            <span>Over 100 different patterns</span>
            <span>Excellent luminous efficiency</span>
            <span>Lifespan of over 40,000 hours</span>
            <span>Removable IP65 weatherproof covering</span>
            <span>
              RGBW(red, green, blue, white), an upgrade for an addition of white
              light.
            </span>
            <span>
              Self Adhesive tape on the back makes it easy to install.
            </span>
          </ul>
        </div>
      </div>
      <div>
        <div className="tech__description">Description</div>
        <div className="tech__bigInfoDiv">
          <span className="tech__bigInfo">
            These LED strips are special. With waterproof capabilities, these
            can be used for any situation. Feel free to set them up outside, or
            inside of your own room. Get creative with it! Uses high-quality LED
            light strips made specifically for extended use with bright colors.
            We have engineered some of the best patterns and color accuracy with
            these lights. There are 60 LEDS per meter, each are fully
            addressable. Feel free to upload your own special code or submit a
            pull request on our github page. With the WLED software, there is no
            need for any clunky remote. These strips come in a size of 5M. In
            addition, there is a custom made, tried and true microcontroller
            designed especially for RGB LED lights. Don't worry, we address all
            of these engineering solutions in house in order to make your
            customer experience great. Simply download the WLED software onto
            any modern device with WiFi capabilities, and plug into your nearest
            wall outlet! The Gravity Origin strip is made with a special PCB
            material, meant for twisting and curves in the LED strip. Fully
            RGBW, there are more than 16 Million color combinations with this
            strip. Standing for Red, Green, Blue, White, this strip is an
            upgraded version to your typically LED strip. It also comes with
            quality adhesive tape to make sure the strip will stay onto most
            surfaces. This strip itself is flat and ideal for an easy stick on
            to most surfaces. One tip, make sure you know exactly where you want
            the strip to go. If you don't, then the LED strip's adhesive tape
            will be compromised and warranty will be voided.{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductBig;
