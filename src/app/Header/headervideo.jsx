// import Video from 'next-video';
import "@/app/Header/style/headervideo.scss";
export function HeaderVideo() {
  return (
    <div className="hero_video">
      <video
        src="/videos/blok.mp4"
        className="video"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      ></video>

    </div>
  );
}

