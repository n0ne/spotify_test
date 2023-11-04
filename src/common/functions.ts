import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpService from "./api";
import { Track } from "../types/track";

type TracksResponse = {
  tracks: {
    items: Track[]
  };
};

export async function getTracks(query: string, token: string): Promise<Track[]> {
  if (!query) {
    return [];
  }
  
  const http: HttpService = new HttpService('https://api.spotify.com');

  const url: string = `v1/search`;

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    params: {
      q: query,
      type: "track"
    }
  };

  const response: AxiosResponse<TracksResponse> = await http.read(url, config)
  const data: TracksResponse = response.data;
  return data.tracks.items;
}

export async function playTrack(deviceId: string, spotify_uri: string, token: string): Promise<AxiosResponse> {
  const http: HttpService = new HttpService('https://api.spotify.com');

  const url: string = `v1/me/player/play?device_id=${deviceId}`;

  const data: object = {
    uris: [spotify_uri]
  };

  const config: AxiosRequestConfig = {
    method: 'put',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  return await http.put(url, data, config);
}