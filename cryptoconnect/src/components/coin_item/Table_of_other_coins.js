import Other_Coins from "./Other_Coins";

export default function Table_of_other_coins() {
    const count = [1,2,3,4,5]
    return (
        <div>
            <div class="container">
            <table class="table">
                <tbody>
                    {count.map((count) => {
                        return (
                            <Other_Coins/>
                        )
                    })}
                    

                </tbody>
            </table>
                
            </div>
        </div>
    )
}