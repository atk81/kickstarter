# KICKSTARTER CLONE USING BLOCKCHAIN
## What is Kickstarter?
 > Kickstarter is a funding site which is aiming for independent designers and those who has an idea but no money, to be funded. The type of projects has many variations, from projects that are just idea and the projects that are finished but can’t be distributed because of financial situations.

## How Does it works?
 > Founder of the project creates a kickstarter page for his/her project, where he/she explains the project, tells the community how it will be done, and status of project. Page also contains how much money needed and how much money donated. If aimed money can be raised, money goes to developer, if it couldn’t it won’t. Also there is a rewarding system for donators. If someone donates certain amount of money, they will get the product when it’s done.

## Problem with kickstarter
 > The reason companies and products can’t survive when they land on market is because of kickstarter’s pre-pay system. Usually when developer raises money, they hire some people so they can develop a better product faster. They set up a company. Hire more people, rent an office, make deals, hire more people. Remember when I told you there is a rewarding system? Yeah, that is the problem here. People give money to developers, and they expect product in return. But until the company finishes product, they are going bankruptcy already. They are spending the money that isn’t their own. Kickstarter’s system is like a loan. When companies will send their products to users, the profit margin that is left from whole money won’t be enough to survive, so they will take more loan from someone else or bank. And to pay that loan they have to sell more product. So this cycle usually doesn’t happen. Usually companies reschedule landing constantly and then end the project.

## Solution of Kickstarter using blockchain
 > In this contract, the Manager has the responsibility to create a spending request to an outside vendor. We going to say that all the people who were contributed to the campaign have to vote on every spending request and then the manager will be sent the money to the vendor. For example, the manager says that I need 100$ to buy something like battery casings then the manager will make to create the spending request inside the contract then all depend on the contributors who contribute their money for this product that they will approve of that spending request. If enough contributors approve the request the money is automatically transferred in the vendor account.

## Install Kickstarter clone dapp
    You need to install nodejs and npm for configuration.
```bash
    # Clone Repo.
    $ git clone www.github.com/ashutoshkush81/kickstarter.git  
    # Install Dependencies
    $ npm install
    # Move to ethereum dir.
    $ cd ethereum
    # Compile contract
    $ node compile.js
    # Deploy Contract
    $ node deploy.js
    # Move to home dir
    $ cd ..
    # Deploy the dapps on the local Machine
    npm run dev
```

 Note: 
 Before deploy the project you need do some changes to use the project on your local machine.

 1. Download chrome/firefox extension name <b>metamask</b>.
 2. You need some ether before deploy your contract. For get some free ether use <b>https://faucet.rinkeby.io/</b>.
 To get test-ether you need to post your account address to your social account, And copy your post link to given form. You will get free test-rinkeby ether.
 3. Create an account on <b>https://infura.io/</b>, then create an new app and copy the link provided by the infura api of *<b>rinkeby network</b>*.
 4. Move to ethereum/deploy.js
 5. Change the <b>metamask seed phrase</b>(Provided by metamask account) and <b>infura api endpoint</b>.
 6. You need to also change the <b>infura api endpoint</b> in ethererum/web3.js.
 7. You good to go.
 

