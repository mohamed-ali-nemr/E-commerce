import React from "react";
import { stockData } from "../components/data";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </div>

            // <div key={key}>
            //   <Stock
            //     id={key}
            //     title={data.title}
            //     price={data.price}
            //     body={data.body}
            //     image={data.image}
            //     author={data.author}
            //   />
            // </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
// const Stock = ({ title, price, body, image, author }) => {
  if (!company) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
          <td>
            <h4>{stockPrice}</h4>
          </td>
          <td>
            <p>{timeElapsed}</p>
          </td>
        </tr>
      </tbody>

      {/* <tbody>
        <tr>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h5>{price}</h5>
          </td>
          <td>
            <h4>{body}</h4>
          </td>
          <td>
            <p>{image}</p>
          </td>
          <td>
            <p>{author}</p>
          </td>
        </tr>
      </tbody> */}
    </table>
  );
};
