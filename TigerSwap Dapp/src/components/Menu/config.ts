import { MenuEntry} from '@pancakeswap-libs/uikit'
// import { Link } from 'react-router-dom'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Tiger Dex',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',  // https://exchange.tigerswapfinance.com/
      },
      {
        label: 'Liquidity',
        href: '/swap',  // https://exchange.tigerswapfinance.com/#/pool
      },
    ],
  },
  {
    label: 'Tiger Farms',
    icon: 'FarmIcon',
    href: '/farms', // /farms
  },
  {
    label: 'Tiger Staking',
    icon: 'PoolIcon',
    href: '/pools', //  /nests
  },
   {
     label: 'Tiger Vaults',
     icon: 'TigervaultIcon',
     href: '/vaults', // /pools
   },
   {
    label: 'Tiger Bank',
    icon: 'TigerbankIcon',
    href: '/bank', // /bank
  },
   {
     label: 'Tiger Lottery',
     icon: 'TicketIcon',
     href: '/lottery', // /lottery
   },
   {
    label: 'Tiger BET - Soon',
    icon: 'TigerbetIcon',
    href: '/bet', // /bet
  },
  {
    label: 'Tiger Games - Soon',
    icon: 'TigergamesIcon',
    href: '/game', // /games
  },
   {
     label: 'Tiger NFTs',
     icon: 'NftIcon',
     href: '/nft', // /nft
   },
  
   {
    label: 'Tiger DAO',
    icon: 'TigerdaoIcon',
    href: '/tigerdao', // /dao
  },

  {
    label: 'Tiger Pad',
    icon: 'TigerpadIcon',
    href: 'tigerpad', // /pad
  },

  {
    label: 'Market & Trades',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: '#',
      },
      {
        label: 'View on CoinGecko',
        href: '#',
      },
      {
        label: 'View on CoinMarketCap',
        href: '#',
      },
      {
        label: 'CEX listing - Soon',
        href: '#',
      },
      // {
      //   label: 'Trade on Bittrue-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Hotbit-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Probit-Soon',
      //   href: '#',
      // },
      // {
      //   label: 'Trade on Gate.io-Soon',
      //   href: '#',
      // },
    ],
  },
  {
    label: 'Join Tiger Army',
    icon: 'TigerarmyIcon',
    items: [
      {
        label: 'Apply as Dev',
        href: 'https://forms.gle/Rp1KVbQUcYm1JvY98',
      },
      {
        label: 'Apply as Designer',
        href: 'https://forms.gle/MPQuFQReSHuhjfPm9',
      },
      {
        label: 'Apply as NFT Artist',
        href: 'https://forms.gle/sKHPzxgTD6NL2tPr6',
      },
      {
        label: 'Apply as Influencer',
        href: 'https://forms.gle/28TE4PJGHnnA5PKp9',
      },
      {
        label: 'Marketing & Promos',
        href: 'https://forms.gle/bSwHYSYPyeaJkmTo7',
      },
      {
        label: 'Others',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreboxIcon',
    items: [
      {
        label: 'Vote',
        href: '#',
      },
      {
        label: 'Website',
        href: 'https://tigerswap.global/',
      },
      {
        label: 'Tiger Documentation',
        href: 'https://docs.tigerswap.global/',
      },
      {
        label: 'Whitepaper',
        href: 'https://docs.tigerswap.global/fundamentals/tokenomics-and-techpaper',
      },
      {
        label: 'Audits',
        href: 'https://docs.tigerswap.global/useful-links/security-audits-and-addresses',  // https://www.tigerswapfinance.com/files/Audit.pdf
      },
      {
        label: 'Github',
        href: 'https://github.com/TigerSwapEx',
      },
      {
        label: 'Contact Us',
        href: 'https://docs.tigerswap.global/useful-links/contact-us',
      },
    ],
  },
  {
    label: 'Partnerships',
    icon: 'HandshakeIcon',
    href: 'https://forms.gle/vXLB1YfSJnJrURvR9',
   
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    href: '/info',
  },{
    label: 'Online Store',
    icon: 'ShopIcon',
    href: 'https://merch.tigerswap.global',
  },

  
]

export default config
