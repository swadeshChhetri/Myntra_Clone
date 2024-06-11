const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag_summary');
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

  bagSummaryElement.innerHTML = `
    <div class="bag_details_container">
    <div class="price_header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price_item">
      <span class="price_item_tag">Total MRP</span>
      <span class="price_item_value">₹${totalMRP}</span>
    </div>
    <div class="price_item">
      <span class="price_item_tag">Discount on MRP</span>
      <span class="price_item_value priceDetail_base_discount">-₹${totalDiscount}</span>
    </div>
    <div class="price_item">
      <span class="price_item_tag">Convenience Fee</span>
      <span class="price_item_value">₹99</span>
    </div>
    <hr>
    <div class="price_footer">
      <span class="price_item_tag">Total Amount</span>
      <span class="price_item_value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn_place_order">
    <div class="css_xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.bag_items_container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });H
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  return`
  <div class="bag_item_container">
    <div class="item_left_part">
      <img class="bag_item_img" src="${item.image}">
    </div>
    <div class="item_right_part">
      <div class="company">${item.company}</div>
      <div class="item_name">${item.item_name}</div>
      <div class="price_container">
        <span class="current_price">Rs ${item.current_price}</span>
        <span class="original_price">Rs ${item.original_price}</span>
        <span class="discount_percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return_period">
        <span class="return_period_days">${item.return_period} days</span> return available
      </div>
      <div class="delivery_details">
        Delivery by
        <span class="delivery_details_days">${item.delivery_date}</span>
      </div>
    </div>
  

    <div class="remove_from_cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
  
}
