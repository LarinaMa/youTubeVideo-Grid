import Card from "./Card.jsx";
import videos from "./database.js";

function App() {
  return (
    <div className="container">
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  );
}
export default App;
