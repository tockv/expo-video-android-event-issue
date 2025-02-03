import { useVideoPlayer, VideoView } from "expo-video";

import type { VideoPlayer } from "expo-video";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function Index() {
  const player = useVideoPlayer(videoSource, (player: VideoPlayer) => {
    player.loop = true;
    player.play();
  });

  return (
    <VideoView
      style={{ width: 350, height: 275 }}
      contentFit="contain"
      player={player}
      nativeControls={false}
      onTouchStart={() => console.log("touch start")}
      onTouchEndCapture={() => console.log("touch end")}
    />
  );
}
