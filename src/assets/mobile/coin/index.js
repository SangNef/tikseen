export { default as btc } from './btc.png';
export { default as usdt } from './usdt.png';
export { default as vndc } from './vndc.png';

import btc from './btc.png';
import asr from './asr.png';
import bch from './bch.png';
import bnb from './bnb.png';
import doge from './doge.png';
import eth from './eth.png';
import fida from './fida.png';
import fun from './fun.png';
import headal from './headal.png';
import hmstr from './hmstr.png';
import home from './home.png';
import huma from './huma.png';
import jto from './jto.png';
import kmno from './kmno.png';
import lqty from './lqty.png';
import pxpc from './pxpc.png';
import resolv from './resolv.png';
import rpl from './rpl.png';
import scr from './scr.png';
import sol from './sol.png';
import soph from './soph.png';
import sui from './sui.png';
import sxt from './sxt.png';
import t from './t.png';
import the from './the.png';
import uma from './uma.png';
import usd1 from './usd1.png';
import usdt from './usdt.png';
import vndc from './vndc.png';
import xrp from './xrp.png';

export const coins = [
    {
        code: 'BTC',
        name: 'Bitcoin',
        image: btc,
        usdt: 67000,
        change24h: 2.1,
        tabs: ['favorite', 'popular', 'up', 'volume'],
    },
    {
        code: 'ETH',
        name: 'Ethereum',
        image: eth,
        usdt: 3500,
        change24h: 1.5,
        tabs: ['favorite', 'popular', 'up', 'volume'],
    },
    {
        code: 'BNB',
        name: 'Binance Coin',
        image: bnb,
        usdt: 600,
        change24h: -0.8,
        tabs: ['favorite', 'popular', 'down', 'volume'],
    },
    {
        code: 'USDT',
        name: 'Tether',
        image: usdt,
        usdt: 1,
        change24h: 0,
        tabs: ['favorite', 'popular', 'volume'],
    },
    {
        code: 'VNDC',
        name: 'VNDC Stablecoin',
        image: vndc,
        usdt: 0.000042,
        change24h: 0,
        tabs: ['favorite', 'volume'],
    },
    {
        code: 'DOGE',
        name: 'Dogecoin',
        image: doge,
        usdt: 0.15,
        change24h: 4.2,
        tabs: ['popular', 'up', 'new'],
    },
    {
        code: 'XRP',
        name: 'Ripple',
        image: xrp,
        usdt: 0.52,
        change24h: -1.1,
        tabs: ['favorite', 'down', 'volume'],
    },
    {
        code: 'SOL',
        name: 'Solana',
        image: sol,
        usdt: 145,
        change24h: 3.7,
        tabs: ['favorite', 'popular', 'up', 'new'],
    },
    {
        code: 'SUI',
        name: 'Sui',
        image: sui,
        usdt: 1.2,
        change24h: 8.5,
        tabs: ['up', 'new'],
    },
    {
        code: 'JTO',
        name: 'Jito',
        image: jto,
        usdt: 3.1,
        change24h: -2.3,
        tabs: ['down', 'new'],
    },
    {
        code: 'FIDA',
        name: 'Bonfida',
        image: fida,
        usdt: 0.35,
        change24h: 12.4,
        tabs: ['up', 'new'],
    },
    {
        code: 'LQTY',
        name: 'Liquity',
        image: lqty,
        usdt: 1.8,
        change24h: -5.2,
        tabs: ['down', 'new'],
    },
    {
        code: 'UMA',
        name: 'UMA',
        image: uma,
        usdt: 2.5,
        change24h: 0.9,
        tabs: ['favorite', 'popular'],
    },
    {
        code: 'BCH',
        name: 'Bitcoin Cash',
        image: bch,
        usdt: 480,
        change24h: 1.2,
        tabs: ['popular', 'up', 'volume'],
    },
    {
        code: 'FUN',
        name: 'FunToken',
        image: fun,
        usdt: 0.005,
        change24h: 7.1,
        tabs: ['up', 'new'],
    },
    {
        code: 'SXT',
        name: 'SIX',
        image: sxt,
        usdt: 0.12,
        change24h: -3.2,
        tabs: ['down', 'new'],
    },
    {
        code: 'T',
        name: 'Threshold',
        image: t,
        usdt: 0.03,
        change24h: 0.5,
        tabs: ['new'],
    },
    {
        code: 'HOME',
        name: 'HomeCoin',
        image: home,
        usdt: 0.25,
        change24h: 2.2,
        tabs: ['new'],
    },
    {
        code: 'HUMA',
        name: 'Huma Finance',
        image: huma,
        usdt: 0.18,
        change24h: 1.1,
        tabs: ['new'],
    },
    {
        code: 'SOPH',
        name: 'SophiaVerse',
        image: soph,
        usdt: 0.09,
        change24h: 6.8,
        tabs: ['up', 'new'],
    },
    {
        code: 'SCR',
        name: 'Scorum',
        image: scr,
        usdt: 0.01,
        change24h: -1.5,
        tabs: ['down'],
    },
    {
        code: 'PXPC',
        name: 'Phoenix Protocol',
        image: pxpc,
        usdt: 0.07,
        change24h: 0.0,
        tabs: ['new'],
    },
    {
        code: 'RESOLV',
        name: 'Resolv',
        image: resolv,
        usdt: 0.02,
        change24h: 0.0,
        tabs: ['new'],
    },
    {
        code: 'RPL',
        name: 'Rocket Pool',
        image: rpl,
        usdt: 25.5,
        change24h: 2.5,
        tabs: ['up'],
    },
    {
        code: 'HEADAL',
        name: 'Headal',
        image: headal,
        usdt: 0.04,
        change24h: -0.8,
        tabs: ['down'],
    },
    {
        code: 'HMSTR',
        name: 'Hamster',
        image: hmstr,
        usdt: 0.0001,
        change24h: 0.0,
        tabs: ['new'],
    },
    {
        code: 'KMNO',
        name: 'Kamino',
        image: kmno,
        usdt: 0.11,
        change24h: 3.3,
        tabs: ['up', 'new'],
    },
    {
        code: 'THE',
        name: 'Thena',
        image: the,
        usdt: 0.21,
        change24h: -2.1,
        tabs: ['down'],
    },
    {
        code: 'USD1',
        name: 'USD1',
        image: usd1,
        usdt: 1.0,
        change24h: 0.0,
        tabs: ['volume'],
    },
];
