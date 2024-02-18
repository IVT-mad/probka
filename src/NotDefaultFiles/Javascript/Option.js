import React, { useEffect, useState } from 'react';
import SingleRadioButton from './Radio';
import '../Styles/Option.css'
import SingleCheckbox from './Radio';
import more from '../Images/2623471-200.png'

const Option = () => {
  const [productList, setProductList] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const csvFilePath = process.env.PUBLIC_URL + '/menu.csv';
        const response = await fetch(csvFilePath); // Adjust the path accordingly
        const csvData = await response.text();
        console.log('CSV Data:', csvData, 'Suka');

        const lines = csvData.trim().split('\n');
        const productList = lines.slice(1).map((line, index) => {
          const [name, calories] = line.split(';');

          const parsedCalories = parseFloat(calories);

          return {
            name,
            calories: calories/100,
          };
        }).filter(Boolean); // Remove null entries

        setProductList(productList);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  const reduceToFiveProducts = () => {
    setVisibleProducts(5);
  };

  return (
    <div>
      {productList.slice(0, visibleProducts).map((product, index) => (
        <div key={index}>
          <p className='ItemProduct'>{product.name} <div className='Display-inline'>{product.calories}$ <SingleCheckbox /></div></p>
          <hr />
        </div>
      ))}

      {visibleProducts < productList.length ? (
        <>
          <div className='moreorless'><img onClick={loadMoreProducts} className='Button1' src={more} alt='Load More'></img>
          <img onClick={reduceToFiveProducts} className='Button2' src={more} alt='Show Only 5'></img>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Option;
