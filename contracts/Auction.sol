// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// interface for NexToken.sol
interface tokenContract {
    function buyToken(address to, uint amount) external;
    function sellToken(address to, uint amount) external;
}

// interface for NexNFT.sol
interface nftContract {
    function safeMint(address to, string memory uri) external;
    function burn(uint tokenId) external;
    function prevTokenId() external view returns(uint);
}

contract Auction {
    // constants
    uint public constant price = 0.1 ether;

    // Contract addresses
    tokenContract public nexToken;
    nftContract public nexNFT;

    // storage 
    address public owner;
    uint public highestBid;
    address public winner;
    address[] public participants;
    string[] public tokenUris;

    // modifier
    modifier onlyOwner() {
        require(owner == msg.sender, "you are not the owner!");
        _;
    }

    constructor (
        address _nexToken,
        address _nexNFT
    ) {
        owner = msg.sender;
        nexToken = tokenContract(_nexToken);
        nexNFT = nftContract(_nexNFT);
        nexNFT.safeMint(address(this), "hello");
    }

    // buying and selling of tokens
    function purchaseTokens(uint amount) public payable {
        require(msg.value >= price * amount, "Not enough ether sent");
        nexToken.buyToken(msg.sender, amount * 1 ether);
    } 

    function sellTokens(uint amount) public {
        nexToken.sellToken(msg.sender, amount * 1 ether);
        payable(msg.sender).transfer(price * amount);
    }

    // Setting up the details
    function winnerDetails(address _winner, uint _highestBid) public onlyOwner {
        winner = _winner;
        highestBid = _highestBid;
    }

    // pariticipant registration
    function register(string memory _tokenUri) public {
        require(msg.sender != address(0));
        participants.push(msg.sender);
        tokenUris.push(_tokenUri);
    }

    // minting NFT
    function mintNFT() external  {
        require(msg.sender == winner);
        require(highestBid != 0);

        // burn tokens
        nexToken.sellToken(msg.sender, highestBid * 1 ether);
        
        uint i;
        uint parcLength = participants.length;
        for (; i < parcLength;) {
            if (winner == participants[i]) {
                break;
            }
        }

        // burn NFT
        uint id = nexNFT.prevTokenId();
        nexNFT.burn(id);

        // mint NFT
        string memory uri = tokenUris[i];
        nexNFT.safeMint(address(this), uri);

        // Transfer eth to owner
        payable(owner).transfer(highestBid * price);

        // reset storage
        winner = address(0);
        highestBid = 0;
        delete participants;
        delete tokenUris;
    }   

    // fallback function
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata 
    ) external pure returns (bytes4) {        
        return this.onERC721Received.selector;
    }
}