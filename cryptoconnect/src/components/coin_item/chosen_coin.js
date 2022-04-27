import './Coin_item.css';

export default function Chosen_coins() {

  return (
    <div class="container-fluid" >
      <div class="row" >
        <div class="col-2">
          <img src="https://s3.envato.com/files/246339957/bitc%20isolate%202.jpg" alt="crypto sybols" class="img-thumbnail" width="30%"/>
          <h2>BTC/USD</h2>
        </div>
        <div class="col-3 crypto_price_component" >
          <h2 class="crypto_price" >$39.324</h2>
          <h4>$39.000</h4>
        </div>
        <div class="col-2 crypto_price_component">
          <h4 class="crypto_price_label">24H Change</h4>
          <div>
            <button type="button" class="btn btn-success">+1.22%</button>
          </div>   
        </div>

        <div class="col-2 crypto_price_component">
          <h4 class="crypto_price_label">24H High</h4>
          <h5>$40.332</h5>          
        </div>

        <div class="col-2 crypto_price_component">
          <h4 class="crypto_price_label">24H Low</h4>
          <h5>$35.000</h5>          
        </div>

      </div>

      <div class="crypto-chart">
        <img src="https://public.bnbstatic.com/image/cms/article/body/202203/a5a614f6a2f4a68d4a39af3a91f6eb6e.png" class="img-fluid pt-3" alt="Responsive image" width="70%"  />
      </div>
    </div>
)

}