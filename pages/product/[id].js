import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Container, Box, Typography } from "@mui/material";

import GeneralInfo from "../../components/ProductPage/generalInfo";
import OverallRatting from "../../components/ProductPage/overallRatting";
import Reviews from "../../components/ProductPage/reviews";
import Specifications from "../../components/ProductPage/specifications";
import ProductContainer from "@/components/ProductContainer";

import {
  getProductForyou,
  getProductInfoImages,
  getProductInfo,
  getProductInfoStores,
  getProductOverallRatting,
  getProductReview
} from "pages/api/endpoints";

import axios from "axios";

export default function ProductPage(prop) {
  return (
    <>
      <Header />
      <SearchBar />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Box sx={{ backgroundColor: "background.paper", width: 1 }}>
          <GeneralInfo props={{ images: prop.images, product: prop.product, stores:prop.stores}} />
        </Box>
        <Box sx={{ width: 1 }}>
          <OverallRatting props={{overallScore: prop.product.overall_score, specGroups:prop.overallRatting}} />
        </Box>
        <Box sx={{ backgroundColor: "background.paper", width: 1 }}>
          <Specifications props={{product:prop.product}}/>
        </Box>
        <Box sx={{ width: 1 }}>
          <Reviews props={{rating:prop.product.review_score, reviews:prop.reviews}}/>
        </Box>
        <Box sx={{ backgroundColor: "background.paper", width: 1 }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 1,
              py: 10,
              gap: 5,
              alignItems: "center",
            }}
          >
            <Typography variant="title" component="div">
              Related Products
            </Typography>
            <ProductContainer api={getProductForyou} />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const [
    imagesRes,
    productRes,
    storesRes,
    overallRattingRes,
    reviewRes,
  ] = await Promise.all([
    axios.get(getProductInfoImages + id),
    axios.get(getProductInfo + id),
    axios.get(getProductInfoStores + id),
    axios.get(getProductOverallRatting + id),
    axios.get(getProductReview + id),

  ]);

  const product = productRes.data;
  const images = imagesRes.data;
  const stores = storesRes.data;
  const overallRatting = overallRattingRes.data;
  const reviews = reviewRes.data;

  return {
    props: {
      images,
      product,
      stores,
      overallRatting,
      reviews,
    },
  };
}