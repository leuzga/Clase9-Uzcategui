import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { ContextCard } from '../../Context/CardContext';

const ItemDetail: React.FC<any> = ({ itemProduct }): JSX.Element => {

  const { setProductObj, setQuantity, addItem } = React.useContext(ContextCard);

  function onAdd(count: number) {
    setQuantity(count)
    setProductObj(itemProduct);
    addItem(itemProduct,count);
  }



  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "98%", display: "flex", justifyContent: "center" }}>
        <Card
          sx={{ maxWidth: 500, objectFit: "contain", border: "none" }}
          variant="outlined"
        >
          <Paper
            elevation={3}
            sx={{ height: "97%", width: "97%", border: "1px solid #dfdfdf" }}
          >
            <CardMedia
              sx={{ objectFit: "contain", paddingTop: "1rem" }}
              component="img"
              height="200"
              width="100%"
              image={itemProduct.image}
              alt={itemProduct.altText}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {itemProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {itemProduct.description}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ padding: "1rem" }}
              >
                $ {itemProduct.price}
              </Typography>
              <ItemCount
                stockAvailable={itemProduct.stock}
                onAdd={(count: number) => onAdd(count)}
              />
            </CardContent>
          </Paper>
        </Card>
      </Box>
    </>
  );
};
export default ItemDetail;

