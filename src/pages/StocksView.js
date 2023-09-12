import { useDispatch, useSelector } from "react-redux";
import { getAllStocks } from "../store/reducers/product";
import React, { useEffect } from "react";

const StocksView = () => {
  const stock = useSelector((s) => s.stock);
  const dispatch = useDispatch();
  // console.log(stock);

  useEffect(() => {
    dispatch(getAllStocks());
  }, []);

  return (
    // <div>
    //   <h2>List of Users</h2>

    //   {/* <ul>
    //     {user.stocks.map((user) => (
    //       <li key={user.id}>{user.name}</li>
    //     ))}
    //   </ul> */}
    // </div>

<div>
<h2>List of posts</h2>
{stock.loading && <div>Loading...</div>}
{!stock.loading && stock.error ? <div>Error: {stock.error}</div> : null}
{!stock.loading && stock.stocks.length ? (
  <ul>
    {stock.stocks.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
) : null}
</div>

    
  );
};

export default StocksView;
