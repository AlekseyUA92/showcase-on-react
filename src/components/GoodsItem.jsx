import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: { 0: { full_background } }
  } = props
  const background = full_background

  const { addInOrder } = useContext(ShopContext)

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        {
          background !== 'N/A' ?
            <img src={background} alt={displayName} />
            : <img src={`https://via.placeholder.com/240x240?text='Problem_with_ownloading_image'`} alt='Downloading...' />
        }
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action price-block">
        <button
          onClick={() => addInOrder({
            mainId,
            displayName,
            regularPrice
          })} className="btn">Купить</button>
        <span className="right" style={{ fontSize: '1.5rem' }}>{Math.floor(regularPrice * 0.36)} UAH</span>
      </div>
    </div>
  )
}

export default GoodsItem