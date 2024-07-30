import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

export default function Home() {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleOpenDialog = (product) => {
        setSelectedProduct(product);
        setOpen(true);
        setQuantity(1);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        } else {
            setQuantity(1);
        }
    };

    const getTotalPrice = () => {
        if (selectedProduct) {
            return selectedProduct.price * quantity;
        }
        return 0;
    };

    const addToCart = () => {
        handleCloseDialog();
    };

    const Products = [
        {
            name: "Product 1",
            height: 20,
            width: 5.0,
            price: 500,
            quantity: 1,
            image: "imagesP/Product1.webp",
            Details: 'It is used to darken, thicken, lengthen, and/or define the eyelashes. Normally in one of three forms—liquid, powder, or cream—the modern mascara product has various formulas; however, most contain the same basic components of pigments, oils, waxes, and preservatives.',
        },
        {
            name: "Product 2",
            height: 20,
            width: 5.0,
            price: 2002,
            quantity: 1,
            image: "imagesP/Product2.webp",
            Details: 'Concealer is similar to foundation except its generally thicker and hides dark circles, age spots, blemishes and more by hiding pigments and blending these imperfections into the skin. You should always apply concealer on top of your foundation so it doesnt smudge. Oh, and less is more.',
        },
        {
            name: "Product 3",
            height: 20,
            width: 5.0,
            price: 1000,
            quantity: 1,
            image: "imagesP/Product3.webp",
            Details: "Blusher is one makeup product that adds some colour to your skin. Without it, your face may look dull and pale. Depending on your skin tone, choose a good blush shade and add that colour to your face.",
        },
        {
            name: "Product 4",
            height: 20,
            width: 5.0,
            price: 4500,
            quantity: 1,
            image: "imagesP/Product5.jpeg",
            Details: "Lipstick is a cosmetic product used to apply coloration and texture to lips, often made of wax and oil. Different pigments are used to produce color, and minerals such as silica may be used to provide texture.",
        },
    ];

    return (
        <Grid container spacing={2}>
            {Products.map((item, index) => (
                <Grid item sm={3} key={index}>
                    <Card style={{ padding: "10px", margin: '10px' }}>
                        <CardMedia
                            sx={{ height: 500 }}
                            image={item.image}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography variant="h6">{item.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Height: {item.height}, Width: {item.width}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Price: ${item.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"sx={{marginLeft:'125px'}}  onClick={() => handleOpenDialog(item)}>Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}

            {open && <Dialog open={open} onClose={handleCloseDialog}>
                {selectedProduct && (
                    <>
                        <DialogTitle>{selectedProduct.name}</DialogTitle>
                        <DialogContent>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={selectedProduct.image}
                                title={selectedProduct.name}
                            />
                            <Typography variant="body1" sx={{ marginTop: "15px", marginBottom: '20px' }}>
                                {selectedProduct.Details}
                            </Typography>
                            <TextField
                                fullWidth
                                type="number"
                                label="Quantity"
                                variant="outlined"
                                value={quantity}
                                onChange={handleQuantityChange}
                                sx={{ marginBottom: '15px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min: 1,
                                }}
                            />
                            <Typography variant="body2" color="textSecondary">
                               <b>Total Price: ${getTotalPrice()}</b> 
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' onClick={addToCart}>Add To Cart</Button>
                            <Button onClick={handleCloseDialog}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>}
        </Grid>
    );
}
