function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price: { regularPrice }, displayAssets: { 0: { full_background } }, addInOrder = Function.prototype } =
    props
  const background = full_background

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        {
          background !== 'N/A' ?
            <img src={background} alt={displayName} />
            : <img src={`https://via.placeholder.com/240x240?text=${displayName}`} alt={displayName} />
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