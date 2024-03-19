import AuctionHandler from "./auctionComponents/AuctionHandler"
import Auction from '../contracts-data/Auction.json'
const { auctionAddress } = require('../contracts-data/addresses.json')

export default function Auctions() {
    return (
        <main className="flex">
            <h1>Auction</h1>
            <AuctionHandler/>
        </main>
    )
}