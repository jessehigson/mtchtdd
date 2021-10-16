const linkResolver = doc => {
  const productTypesMap = require("../data/product-types-map.json")

  // URL for a product type page
  if (doc.type === "product_type_page") {
    return `/products/${doc.uid}`
  }

  // URL for a product page
  if (doc.type === "product_page") {
    if (productTypesMap.hasOwnProperty(doc.uid)) {
      return `/products/${productTypesMap[doc.uid]}/${doc.uid}`
    }
  }

  // URL for a legal page
  if (doc.type === "legal_page") {
    return `/legal/${doc.uid}`
  }

  // URL for a about page
  if (doc.type === "about_page") {
    return `/about`
  }

  // URL for a contact page
  if (doc.type === "contact_page") {
    return `/contact`
  }

  // URL for a home page
  if (doc.type === "homepage") {
    return `/`
  }

  // URL for a product type index page
  if (doc.type === "product_type_index_page") {
    return `/products`
  }

  // URL for a where to buy page
  if (doc.type === "where_to_buy_page") {
    return `/where-to-buy`
  }

  // Backup for all other types
  return "/"
}

module.exports = linkResolver
