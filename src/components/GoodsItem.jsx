function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, displayAssets, addInOrder = Function.prototype} =
    props
  const fullBackground = displayAssets[0].full_background
  const {regularPrice} = price 

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={fullBackground} />
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
        <span className="right" style={{fontSize: '1.5rem'}}>{Math.floor(regularPrice*0.36)} UAH</span>
      </div>
    </div>
  )
}

export default GoodsItem

// {
//     "mainId": "CID_A_047_Athena_Commando_F_Windwalker",
//     "displayName": "Windwalker Echo",
//     "displayDescription": "May the winds lead you home.",
//     "displayType": "Outfit",
//     "mainType": "outfit",
//     "offerId": "v2:/cd39fedc23d9718487b9b153525cf5c73786446420fda7e11e4c5797f5ebaeb6",
//     "displayAssets": [
//         {
//             "displayAsset": "DAv2_CID_A_047_F_Windwalker",
//             "materialInstance": "MI_CID_A_047_F_Windwalker",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_047_F_Windwalker/MI_CID_A_047_F_Windwalker.png",
//             "flipbook": null,
//             "background": "https://media.fortniteapi.io/images/cosmetics/19fb294c23029dae4739d0945ad1fcd1/v2/MI_CID_A_047_F_Windwalker/background.png",
//             "full_background": "https://media.fortniteapi.io/images/cosmetics/19fb294c23029dae4739d0945ad1fcd1/v2/MI_CID_A_047_F_Windwalker/info.en.png"
//         }
//     ],
//     "firstReleaseDate": "2021-09-08",
//     "previousReleaseDate": null,
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//         "regularPrice": 800,
//         "finalPrice": 800
//     },
//     "rarity": {
//         "id": "Uncommon",
//         "name": "UNCOMMON"
//     },
//     "series": null,
//     "banner": {
//         "id": "Unreal",
//         "name": "Unreal!",
//         "intensity": "High"
//     },
//     "offerTag": {
//         "id": "tattooreactivity",
//         "text": "tattooreactivity"
//     },
//     "granted": [
//         {
//             "id": "CID_A_047_Athena_Commando_F_Windwalker",
//             "type": {
//                 "id": "outfit",
//                 "name": "Outfit"
//             },
//             "name": "Windwalker Echo",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "UNCOMMON"
//             },
//             "series": null,
//             "description": "May the winds lead you home.",
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/19fb294c23029dae4739d0945ad1fcd1/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/19fb294c23029dae4739d0945ad1fcd1/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/19fb294c23029dae4739d0945ad1fcd1/v2/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/19fb294c23029dae4739d0945ad1fcd1/v2/info.en.png"
//             },
//             "set": {
//                 "id": "BreezeTune",
//                 "name": "Wind Song",
//                 "partOf": "Part of the Wind Song set."
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Source.ItemShop",
//                 "Cosmetics.Filter.Season.17",
//                 "Cosmetics.UserFacingFlags.Reactive",
//                 "Cosmetics.Set.BreezeTune"
//             ]
//         }
//     ],
//     "priority": -1,
//     "section": {
//         "id": "Featured",
//         "name": "Featured",
//         "landingPriority": 70
//     },
//     "groupIndex": 0,
//     "storeName": "BRWeeklyStorefront",
//     "tileSize": "Normal",
//     "categories": [
//         "Panel 01"
//     ]
// },
