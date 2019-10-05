// Displays the sub-navigation links for each category

import React from 'react';
import {Route, Links} from 'react-router-dom';

export function Home() {
  return (
    <div className="sub-nav">
    </div>
  );
}

export function Mac() {
  return (
    <div className="sub-nav">

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookair__ej39du0gz4uq_large.svg" />
      <a href="#">MacBook Air</a>
      <span>New</span>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg" />
      <a href="#">MacBook Pro</a>
      <span>New</span>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac__dkswmjfqeziq_large.svg" />
      <a href="#">iMac</a>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/imac_pro__eer4bfwlutme_large.svg" />
      <a href="#">iMac Pro</a>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_pro__bn92faz71k6a_large.svg" />
      <a href="#">Mac Pro</a>
      <span>New</span>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/macmini__c6u0it831y0y_large.svg" />
      <a href="#">Mac mini</a>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg" />
      <a href="#">Compare</a>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg" />
      <a href="#">Pro Display XDR</a>
      <span>New</span>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg" />
      <a href="#">Accessories</a>

      <img src="https://www.apple.com/v/mac/home/ai/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg" />
      <a href="#">Catalina</a>
    </div>
  );
}

export function IPad() {
  return (
    <div className="sub-nav">
      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipadpro_light__dxq7nxjgsd2e_large.svg" />
      <a href="#">iPad Pro</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipadair_light__gan6yfrffc66_large.svg" />
      <a href="#">iPad Air</a>
      
      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipad_light__expohijp19si_large.svg" />
      <a href="#">iPad</a>
      <span>New</span>

      <img src="https://www.apple.com(/v/ipad/home/au/images/chapternav/ipadmini_light__bxpulkud30s2_large.svg" />
      <a href="#">iPad mini</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipad_comp_light__f80dzq6i8sq6_large.svg" />
      <a href="#">Compare</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg" />
      <a href="#">Apple Pencil</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg" />
      <a href="#">Smart Keyboard</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipad_acc_light__ebtftz3r2rwy_large.svg" />
      <a href="#">Accessories</a>

      <img src="https://www.apple.com/v/ipad/home/au/images/chapternav/ipados_light__f5xv7yr98tm6_large.svg" />
      <a href="#">iPadOS</a>
    </div>
  );
}

export function IPhone() {
  return (
    <div className="sub-nav">
      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_11_pro_dark__cchxb3bv66vm_large.svg" />
      <a href="#">iPhone 11 Pro</a>
      <span>New</span>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_11_dark__exagpxb8zh4y_large.svg" />
      <a href="#">iPhone 11</a>
      <span>New</span>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_xr_dark__gmkx1gdvqqum_large.svg" />
      <a href="#">iPhone X<span className="small-r">R</span></a>
      {/* Make the r smaller */}

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_8_dark__d4f1b8j5cwia_large.svg" />
      <a href="#">iPhone 8</a>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_comp_dark__ganfgd3pa9m6_large.svg" />
      <a href="#">Compare</a>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_apple_card_dark__fsk0oaya7eqi_large.svg" />
      <a href="#">Apple Card</a>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_airpods_dark__b5yw8pv4m4z6_large.svg" />
      <a href="#">AirPods</a>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_acc_dark__b5fvf10sbhci_large.svg" />
      <a href="#">Accessories</a>

      <img src="https://www.apple.com/v/iphone/home/ac/images/chapternav/iphone_ios_dark__bb9g9sts3q76_large.svg" />
      <a href="#">iOS 13</a>
    </div>
  );
}

export function Watch() {
  return (
    <div className="sub-nav">
      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg" />
      <a href="#">Apple Watch<br />Series 5</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_nike__mkjgkrrlq2ye_large.svg" />
      <a href="#">Apple Watch<br />Nike</a>
      <span>New</span>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_hermes__b1zeoxbn0df6_large.svg" />
      <a href="#">Apple Watch<br />Hermès</a>
      <span>New</span>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg" />
      <a href="#">Apple Watch<br />Edition</a>
      <span>New</span>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_edition__botzv6l1ftua_large.svg" />
      <a href="#">Apple Watch<br />Series 3</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_compare__bjddtmfseahe_large.svg" />
      <a href="#">Compare</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_bands__f5qi8icu6suq_large.svg" />
      <a href="#">Bands</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_airpods__gdoguo6cstua_large.svg" />
      <a href="#">AirPods</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_accessories__fix8lwwxvtu2_large.svg" />
      <a href="#">Accessories</a>

      <img src="https://www.apple.com/v/watch/home/u/images/overview/watch_nav_watch_os__fctkp231ik6e_large.svg" />
      <a href="#">WatchOS</a>
    </div>
  );
}

export function Tv() {
  return (
    <div className="sub-nav"></div>
  );
}

export function Music() {
  return (
    <div className="sub-nav"></div>
  );
}

export function Support() {
  return (
    <div className="sub-nav"></div>
  );
}

export function SearchBar() {
  return (
    <div className="sub-nav"></div>
  );
}

export function ShoppingCart() {
  return (
    <div className="sub-nav"></div>
  );
}