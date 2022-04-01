import Coin_table from "./Coin_table";

export default function MainPage() {
    return (
        <div>
            <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>

            <div class="d-flex bd-highlight my-3">
                <h2>All Cryptos</h2>
                <div class="ms-auto p-2 bd-highlight">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <Coin_table />
            </div>
        </div>
    )
}