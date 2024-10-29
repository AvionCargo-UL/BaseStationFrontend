import React, { useEffect, useRef, useState } from "react";

const VideoStream: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://127.0.0.1:8080/video_streaming");

    ws.current.onmessage = (event: MessageEvent) => {
      const blob = new Blob([event.data], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setImageSrc(url);

      // Clean up old object URLs to prevent memory leaks
      return () => URL.revokeObjectURL(url);
    };

    ws.current.onclose = () => console.log("WebSocket connection closed");

    return () => {
      if (ws.current) ws.current.close();
    };
  }, []);

  return (
    <div>
      <h2>Live Video Feed</h2>
      {imageSrc && <img src={imageSrc} alt="Live Video" />}
    </div>
  );
};

export default VideoStream;
