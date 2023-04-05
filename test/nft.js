const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Tests uStaking', function () {
  let owner;
  let nftContract;
  let NftFactory;
  let user1;
  let user2;
  let user3;
  let user4;

  before(async () => {
    [owner, user1, user2, user3, user4] = await ethers.getSigners();

    NftFactory = await ethers.getContractFactory('NFT', owner);
    nftContract = await NftFactory.deploy(
      'BNBTEAM',
      'BNBT',
      'ipfs://QmciCo39MddAA5m7tjyZE8yBRqEYSHDAffX95Y7sqda31L/',
    );
    await nftContract.deployed();
  });

  it('Should be deployed nft contract', async function () {
    expect(nftContract.address).to.be.properAddress;
  });

  it('Should be deployed mint nft', async function () {
    await expect(() =>
      nftContract.connect(user1).mint({ value: 5000000000000000 }),
    ).to.changeEtherBalance(user1, -5000000000000000);
  });

  it('Should be deployed owner nft by address', async function () {
    const addressOwner = await nftContract.connect(user1).ownerOf(0);
    expect(addressOwner).to.be.equal(user1.address);
  });
});
