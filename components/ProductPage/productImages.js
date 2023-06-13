
import { styled } from '@mui/system';
import {useState} from "react";

import { Box } from "@mui/material";

const Image = styled("img")`
    margin: auto;
    max-width: 50px;
    max-height: 50px;
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
  `;
const BigImage = styled("img")`
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1;
  border-radius: 10px;
  object-fit: contain;
  object-position: center;
`;
const ImageButtons = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 0;
  `;
const ImageButton = styled(Box)`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #000;
    ` : `
      border-color: transparent;
    `}
    padding: 2px;
    padding-bottom: 0;
    cursor: pointer;
    border-radius: 5px;

  `;
const BigImageWrapper = styled("div")`
  text-align: center;
`;

export default function ProductImages({images,thumbnail}) {
  const thumbnailImage = [thumbnail]
  const [activeImage,setActiveImage] = useState(images[0]? images[0].image : thumbnailImage[0]);
  return (
    <>
    <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image.image}
            active={image.image===activeImage}
            onMouseEnter={() => setActiveImage(image.image)}>
            <Image src={image.image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      
    </>
  );
} 