import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";

const BbigMenu = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", my: 10 }}>
      <Card sx={{ border: 1, width: 300, padding: 6 }}>
        <Grid>
          <img src="book.svg"></img>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Хүргэлтийн төлөв хянах
          </Typography>
          <Typography>Захиалга бэлтгэлийн явцыг хянах</Typography>
        </Grid>
      </Card>
      <Card sx={{ border: 1, width: 300, padding: 6 }}>
        <Grid>
          <img src="tsag.svg"></img>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Шуурхай хүргэлт
          </Typography>
          <Typography>Захиалга бэлтгэлийн явцыг хянах</Typography>
        </Grid>
      </Card>
      <Card sx={{ border: 1, width: 300, padding: 6 }}>
        <Grid>
          <img src="nogoo.svg"></img>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Эрүүл, баталгаат орц
          </Typography>
          <Typography>Захиалга бэлтгэлийн явцыг хянах</Typography>
        </Grid>
      </Card>
      <Card sx={{ border: 1, width: 300, padding: 6 }}>
        <Grid>
          <img src="book.svg"></img>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Хоолны өргөн сонголт
          </Typography>
          <Typography>Захиалга бэлтгэлийн явцыг хянах</Typography>
        </Grid>
      </Card>
    </Box>
  );
};

export default BbigMenu;
