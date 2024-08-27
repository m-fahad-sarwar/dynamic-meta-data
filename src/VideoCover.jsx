import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const videos = {
  image1:
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  image2:
    "https://images.unsplash.com/photo-1587586062323-836089e60d52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3Vyc3xlbnwwfHwwfHx8MA%3D%3D",
  image3:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
};

const VideoCover = () => {
  const { imageId } = useParams();
  const coverImage = videos[imageId];

  if (!coverImage) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Video Cover - {imageId}</title>
        <meta property="og:image" content={coverImage} />
        <meta property="og:title" content={`Video Cover for ${imageId}`} />
        <meta
          property="og:description"
          content={`Check out the video cover for ${imageId}.`}
        />
      </Helmet>
      <h1>Video Cover for {imageId}</h1>
      <img
        src={coverImage}
        alt={`Cover for ${imageId}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default VideoCover;
