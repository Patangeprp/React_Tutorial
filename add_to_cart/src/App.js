import React,{useState} from 'react';
import Cards from './components/Cards';
import Data from './components/Data';
import { connect } from 'react-redux';
import './App.css'

function App({ items, addItem ,removeItem}) {

  const[count,setCount]=useState(0);

  const addItemToCart = (item) => {
    addItem(item);
    setCount(count+1);
  };

  const removeFromCart=(id)=>{
    removeItem(id);
    setCount(count-1);
  }

  return (
    <div className="App">
      <ul>
        <li>
          <h1 className='pizza'>The Pizza House</h1>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
          <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <span className='count'>{count}</span>
          <div className="modal fade" id="staticBackdrop" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Cart</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>
                        <div className='container'>
                          <div className="mobile-container">
                            <div className="mobile-card card1">
                              <img src={item.src} alt={item.name} className="mobile-image" />
                              <div className="mobile-details">
                                <h2 className="mobile-name">{item.name}</h2>
                                <h2 className="mobile-price">{item.price}</h2>
                                <p className="desc">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className='remove' onClick={removeFromCart} >Remove</button>
                      </li>
                      
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      {Data.map((element) => (
        <Cards
          key={element.id}
          src={element.src}
          name={element.name}
          price={element.price}
          description={element.description}
          onAddToCart={addItemToCart}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) =>
    dispatch({
      type: "add_Item",
      payload: item
    }),
    removeItem: (id) => 
      dispatch({ 
          type: "remove_Item", 
          payload: id 
      })
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
