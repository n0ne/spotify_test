import React, { FC, useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import Grid from "@mui/material/Grid";

import Search from "./Search";
import Track from "./Track";
import Loader from "./Loader";
import NotFound from "./NotFound";
import NeedAuth from "./NeedAuth";
import ErrorBoundary from "./ErrorBoundary";

import { getTracks, playTrack } from "../common/functions";
import usePlayer from "../common/usePlayer";

import type { Track as TrackType } from "../types/track"

const TrackList: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [token] = useLocalStorage<string>('token')

  const { data, isLoading, error } = useQuery<TrackType[], Error>({
    queryKey: ['tracks', search],
    queryFn: () => getTracks(search, token),
  });

  const deviceId: string = usePlayer()

  const tracks: TrackType[] = data || [];

  const handleClick = useCallback((id: string) => {
    try {
      playTrack(deviceId, id, token)
    } catch (error) {
      console.log(error)
    }
  }, [deviceId]);

  if (!token) {
    return <NeedAuth />
  }

  if (error) {
    return <NotFound />
  }

  return (
    <ErrorBoundary>
      <Search setSearch={setSearch} />
      {isLoading && <Loader />}
      {!tracks.length && !isLoading && <NotFound />}
      {!!tracks.length && <Grid container spacing={2}>
        {tracks?.map((track: TrackType) => (
          <Grid item xs={12} sm={6} md={4} key={track.id} >
            <Track item={track} onClick={() => handleClick(track.uri)} />
          </Grid>
        ))}
      </Grid>}
    </ErrorBoundary>
  );
}

export default TrackList;