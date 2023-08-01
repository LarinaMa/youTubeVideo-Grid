function Card({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} />
      <div className="details">
        <img src={video.channelAvatar} />
        <section>
          <h3>{video.title}</h3>
          <p>{video.channelName}</p>
          <p>{video.views + " • " + video.timestamp}</p>
        </section>
      </div>
    </div>
  );
}
export default Card;
// • symbol made by holding down the option key & pressing 8
