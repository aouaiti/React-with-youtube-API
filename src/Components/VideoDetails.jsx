import "./VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) return <div></div>;
  const source = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="iframe-container">
      <iframe
        width="560"
        height="315"
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="text">
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetails;
