import { useEffect, useState } from "react"
import { useLocalStorage } from '@uidotdev/usehooks';


function usePlayer() {
  const [deviceId, setDeviceId] = useState<string>('');
  const [token] = useLocalStorage<string>('token')

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id)
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
      player.connect();

    };
  }, []);

  return deviceId
}

export default usePlayer