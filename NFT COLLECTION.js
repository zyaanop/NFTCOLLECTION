const NFTs = [];

function mintNFT (_name, _eyecolor, _styleType, _ring) {
    const NFT = {
        name: _name,
        eyecolor: _eyecolor,
        styleType: _styleType,
        ring: _ring
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("Name: " + NFTs[i].name);
        console.log("Eye Color: " + NFTs[i].eyecolor);
        console.log("Style Type: " + NFTs[i].styleType);
        console.log("Ring: " + NFTs[i].ring);
        console.log("---------------");
    }
}

function getTotalSupply() {
    console.log("Total NFTs minted: " + NFTs.length);
}

mintNFT("Saood", "red", "streetstyle", "Silver");
mintNFT("Masood", "blue", "casual", "Titanium");
mintNFT("Akhil", "green", "casual", "Platinum");

listNFTs();
getTotalSupply();
