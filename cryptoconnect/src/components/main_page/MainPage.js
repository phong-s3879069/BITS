import Coin_table from "./Coin_table";

export default function MainPage() {
    return (
        <div>
            <div class="jumbotron" width="80%">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
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