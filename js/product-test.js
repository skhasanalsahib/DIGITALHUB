const products = [
  {
    id: 1,
    name: "Blender",
    price: "Free",
    thumbnail: "https://placeholder.co/275/CEE2EE?text=Product",
    shortDescription:
      "Blender is a free and open-source 3D creation suite that supports the entire 3D pipeline. With its powerful tools, you can create stunning 2D/3D content with ease.",
    longDescription:
      "Blender is a free and open-source 3D computer graphics software tool set that runs on Windows, MacOS, BSD, Haiku, IRIX and Linux. It is used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games. For more information visit https://blender.org",
    inStock: true,
  },
  {
    id: 2,
    name: "GIMP",
    price: "Free",
    thumbnail: "https://via.placeholder.com/150",
    shortDescription:
      "GIMP is a free and open-source image editor that provides the tools needed for high-quality image manipulation.",
    longDescription:
      "GIMP is a free and open-source raster graphics editor used for image retouching and editing, free-form drawing, converting between different image formats, and more specialized tasks. For more information visit https://www.gimp.org",
    inStock: true,
  },
  {
    id: 3,
    name: "Audacity",
    price: "Free",
    thumbnail: "https://via.placeholder.com/150",
    shortDescription:
      "Audacity is a free, open-source, cross-platform audio software for multi-track recording and editing.",
    longDescription:
      "Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems. Developed by a group of volunteers as open-source software. For more information visit https://www.audacityteam.org",
    inStock: true,
  },
  {
    id: 4,
    name: "Inkscape",
    price: "Free",
    thumbnail: "https://via.placeholder.com/150",
    shortDescription:
      "Inkscape is a professional vector graphics editor for Windows, macOS, and Linux.",
    longDescription:
      "Inkscape is a free and open-source vector graphics editor used to create vector images, primarily in Scalable Vector Graphics (SVG) format. It offers a rich set of features and is widely used for artistic and technical illustrations. For more information visit https://inkscape.org",
    inStock: true,
  },
  {
    id: 5,
    name: "LibreOffice",
    price: "Free",
    thumbnail: "https://via.placeholder.com/150",
    shortDescription:
      "LibreOffice is a powerful office suite – its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity.",
    longDescription:
      "LibreOffice is a free and open-source office suite, a project of The Document Foundation. It includes applications for word processing, creating and editing spreadsheets, slideshows, diagrams, and drawings, working with databases, and composing mathematical formulas. For more information visit https://www.libreoffice.org",
    inStock: true,
  },
];

const productGrid = document.querySelector(".featured-products-grid");
const productCard = document.createElement("a");
productCard.classList.add("product-card");
// productCard.style.height = "150px";
// productCard.style.width = "150px";
// productCard.style.backgroundColor = "red";

const productImgWrapper = document.createElement("div");
productImgWrapper.classList.add("product-img-wrapper");

const productImg = document.createElement("img");
productImg.classList.add("product-img");
productImg.src = products[0].thumbnail;

const productDetails = document.createElement("div");
productDetails.classList.add("product-details");

const productTitle = document.createElement("h4");
productTitle.classList.add("product-title");
productTitle.textContent = products[0].name;

const productPrice = document.createElement("p");
productPrice.classList.add("product-price");
productPrice.textContent = products[0].price;

productDetails.append(productTitle, productPrice);
productImgWrapper.append(productImg);
productCard.append(productImgWrapper, productDetails);
productGrid.appendChild(productCard);

