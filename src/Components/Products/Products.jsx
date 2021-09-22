import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './Products-style'

import Product from './Product/Product'

const products = [
    {
        id: 1, name: "Sparx Men's Sm-648 Running Shoe", description: 'Sparx is a spectacular range of footwear from the house of Relaxo Footwears Ltd., a name trusted among millions of people in India and across the world for delivering unmatched quality. Since its inception, the company has established a benchmark for bringing the finest range of footwears.',
        price: '\u20B91,399.00', url: 'https://m.media-amazon.com/images/I/718bSZO8++L._UL1500_.jpg'
    },
    {
        id: 1, name: "Men's Loire-z1 Running Shoes", description: 'The product will be an excellent pick for you. It ensures an easy maintenance.',
        price: '\u20B91,899.00', url: 'https://m.media-amazon.com/images/I/61hMQOHmEIL._UL1100_.jpg'
    },
    {
        id: 1, name: "ASIAN Men's Future-01 Running Shoes", description: 'Lightweight & Breathable : Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience. Non Slip & Shockproof : Great engineering strikes a balance in style, made in the potent design and latest fashion trends. Made for long-term wear, with extra emphasis on providing cushion to the feet, removing heel strain. Comfort Sole & Flexible Walk : The outsoles are made by an air cushion, doubling the effect of shock absorption. Besides, these shoes perform excellent in durability and are also slip resistant. It provides push cushioning comfort for foot pain relief and helps relieve pressure while conforming to your every step.',
        price: '\u20B92,599.00', url: 'https://m.media-amazon.com/images/I/610fN3RyKFL._UL1100_.jpg'
    },
    {
        id: 2, name: 'HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD + 256GB SSD/Windows 10/144Hz/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1048AX',
         description: 'Sacrifice nothing with the thin and powerful HP Pavilion Gaming 15 Laptop. Experience high-grade graphics and processing power for gaming and multitasking, plus improved thermal cooling for overall performance and stability. Immerse yourself in the game with a micro-edge bezel display and custom-tuned audio. The perfect balance between work and play, so you can do it all.',
        price: '\u20B971,999.00', url: 'https://m.media-amazon.com/images/I/71VlaIUD10L._SX425_.jpg',
    },
    {
        id: 2, name: 'ASUS ROG Zephyrus G14, 14" (35.56 cms) FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/White/Anime Matrix/1.7 Kg), GA401II-HE127TS',
         description: 'ASUS ROG Zephyrus G14, 14" (35.56 cms) FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/White/Anime Matrix/1.7 Kg), GA401II-HE127TS',
        price: '\u20B981,990.00', url: 'https://m.media-amazon.com/images/I/91Oam4MucXL._SL1500_.jpg',
    },
    {
        id: 2, name: 'MSI Bravo 15 Ryzen 7 4800H 15.6" (39.62cms) FHD Gaming Laptop (16GB/512GB SSD/144 Hz/Windows 10/ RX5500M,GDDR6 4GB/Black/1.86 kg), A4DDR-212IN',
         description: 'AMD Ryzen7-4800H processor, upto 4.2 GHz Pre-loaded Windows 10, Home, 64Bit operating system with lifetime validity 15.6" FHD (1920*1080), IPS-Level 144Hz Thin Bezel Display Memory: 8*2 GB DDR4 RAM, 3200Mhz with Radeon RX5500M 4GB Graphics | Storage: 512GB NVMe M.2 SSD Light Design Gaming laptop with Backlight Keyboard (Red) This genuine MSI laptop comes with 1 year Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section MSI System Control ManagerMSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Nahimic 3 Dragon Center Gaming Mode MSI App player',
        price: '\u20B990,370.00', url: 'https://m.media-amazon.com/images/I/71b46EnIzBL._SL1500_.jpg',
    }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={9} md={6} lg={4} xl={3} xxl={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;