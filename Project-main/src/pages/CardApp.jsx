import './CardApp.scss';
import Card from './card';

function App() {
  return (
    <div className="Mainwrapper">
      <div className="wrapper5">
        <Card
          img="https://d1iczm3wxxz9zd.cloudfront.net/f9acd8b9-661d-4023-bb54-c6c9328102fe/000000-0000000000/110510913049265352142588456078823445933585298399839865759640777255046588285704/ITEM_PREVIEW1.jpg"
          title="Wright Ave"
          description="Located in the Southern hills of California, this beaut of a house will only cost you 35 btc"
        />

        <Card
          img="https://uncrate.com/p/2021/03/mars-house-1.jpg"
          title="Mars-House-NFT"
          description="Non-fungible tokens are on the rise and now contemporary artist Krista Kim has introduced the first NFT digital dwelling with Mars House."
        />

        <Card
          img="https://www.nxsttv.com/nmw/wp-content/uploads/sites/107/2021/04/DSC0022.jpg?w=876"
          title="Thousand Oaks Home NFT"
          description="The home, located in a suburb of Los Angeles, is the “world’s first REAL property + NFT,” according to the listing.The four-bedroom, two-bathroom home is 1,800-sq.-ft. and costs $1.15 million."
        />

        <Card
          img="https://d1iczm3wxxz9zd.cloudfront.net/f9acd8b9-661d-4023-bb54-c6c9328102fe/000000-0000000000/110510913049265352142588456078823445933585298399839865759640777255046588285704/ITEM_PREVIEW1.jpg"
          title="Wright Ave"
          description="Located in the Southern hills of California, this beaut of a house will only cost you 35 btc"
        />

        <Card
          img="https://uncrate.com/p/2021/03/mars-house-1.jpg"
          title="Mars-House-NFT"
          description="Non-fungible tokens are on the rise and now contemporary artist Krista Kim has introduced the first NFT digital dwelling with Mars House."
        />

        {/* <Card
          img="https://www.nxsttv.com/nmw/wp-content/uploads/sites/107/2021/04/DSC0022.jpg?w=876"
          title="Thousand Oaks Home NFT"
          description="The home, located in a suburb of Los Angeles, is the “worlds first REAL property + NFT,” according to the listing.The four-bedroom, two-bathroom home is 1,800-sq.-ft. and costs $1.15 million."
        /> */}

      </div>
    </div>
  );
}

export default App;