import React, { useEffect, useState } from "react";
import bluePens from "../images/pens3.jpg";
import goldenPens from "../images/pens1.jpg";
import colorfulPens from "../images/pens2.jpg";
import pencils from "../images/pencil.jpg";
import calculator from "../images/calculator.jpg";
import stickyNotes from "../images/sticky-notes.jpg";
import highlighters from "../images/highlighters.jpg";
import landscapeCopybooks from "../images/landscape-copybooks.jpg";
import natureCopybooks from "../images/nature-copybooks.jpg";
import multicoloredPencils from "../images/multicolored-pencils.jpg";
import brushes from "../images/brushes.jpg";
import watercolor from "../images/watercolor.jpg";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([
    {
      name: "blue pens",
      price: 4,
      quantity: 0,
      src: bluePens,
      description: "Blue ink ballpoint pens, pack of 2",
    },
    {
      name: "golden pens",
      price: 6,
      quantity: 0,
      src: goldenPens,
      description: "Automatic oil-based blue ink ballpoint pens, pack of 2",
    },
    {
      name: "colorful pens",
      price: 8,
      quantity: 0,
      src: colorfulPens,
      description: "Blue oil-based ink ballpoint pens (multicolor), pack of 5",
    },
    {
      name: "pencils",
      price: 4,
      quantity: 0,
      src: pencils,
      description: 'Graphite pencils (hardness "B"), pack of 3',
    },
    {
      name: "claculator",
      price: 15,
      quantity: 0,
      src: calculator,
      description: "Claculator (size: 195*143*37 mm)",
    },
    {
      name: "sticky notes",
      price: 3,
      quantity: 0,
      src: stickyNotes,
      description: "Block of multicolor sticky notes, 100 sheets",
    },
    {
      name: "highlighters",
      price: 10,
      quantity: 0,
      src: highlighters,
      description:
        "Fluorescent water-based ink multicolor highlighters, pack of 4",
    },
    {
      name: "landscape copybooks",
      price: 10,
      quantity: 0,
      src: landscapeCopybooks,
      description: "A5 format notebooks (48 sheet), pack of 5",
    },
    {
      name: "nature copybooks",
      price: 10,
      quantity: 0,
      src: natureCopybooks,
      description: "A5 format notebooks (48 sheet), pack of 5",
    },
    {
      name: "multicolored pencils",
      price: 10,
      quantity: 0,
      src: multicoloredPencils,
      description:
        "Pencils with multicolor soft lead, 7 colors per pencil, pack of 3",
    },
    {
      name: "brushes",
      price: 12,
      quantity: 0,
      src: brushes,
      description: "Artistic synthetic brushes, pack of 3",
    },
    {
      name: "watercolor",
      price: 24,
      quantity: 0,
      src: watercolor,
      description: "High-quality honey-based watercolor paint, 24 colors",
    },
  ]);

  const [total, setTotal] = useState({ number: 0, sum: 0 });

  const handleQuantityChange = (event, name) => {
    let p = products.map((x) => {
      if (x.name === name) {
        if (
          isNaN(event.target.value) ||
          event.target.value === "" ||
          Number(event.target.value) < 0
        ) {
          console.log(isNaN(x.quantity));
          return { ...x, quantity: 0 };
        } else {
          return { ...x, quantity: Number(event.target.value) };
        }
      } else {
        return x;
      }
    });
    setProducts(p);
  };

  const handleCartClick = (name) => {
    let p = products.map((x) => {
      if (x.name === name) {
        return { ...x, quantity: 1 };
      } else {
        return x;
      }
    });
    setProducts(p);
  };

  const handleIncrement = (name) => {
    let p = products.map((x) => {
      if (x.name === name) {
        return { ...x, quantity: x.quantity + 1 };
      } else {
        return x;
      }
    });
    setProducts(p);
  };

  const handleDecrement = (name) => {
    let p = products.map((x) => {
      if (x.name === name) {
        return { ...x, quantity: x.quantity - 1 };
      } else {
        return x;
      }
    });
    setProducts(p);
  };

  useEffect(() => {
    const numberOfProducts = products.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    const sumOfProducts = products.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    setTotal({ number: numberOfProducts, sum: sumOfProducts });

    // let p = products.map((x) => {
    //   if (isNaN(x.quantity) || x.quantity === "") {
    //     console.log(isNaN(x.quantity));
    //     return { ...x, quantity: 0 };
    //   } else {
    //     return x;
    //   }
    // });
    // setProducts(p);
  }, [products]);

  return (
    <div className="content Shop">
      <Cart number={total.number} sum={total.sum} />
      <h2>Shop</h2>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.name}
              index={products.indexOf(product)}
              name={product.name}
              src={product.src}
              description={product.description}
              quantity={product.quantity}
              price={product.price}
              handleQuantityChange={handleQuantityChange}
              handleCartClick={handleCartClick}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
