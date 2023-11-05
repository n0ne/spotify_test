import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { getTracks, playTrack } from "../common/functions";
import { useLocalStorage } from "@uidotdev/usehooks";
import Track from "./Track";

import type { Track as TrackType } from "../types/track"
import { Grid } from "@mui/material";
import usePlayer from "../common/usePlayer";
import Search from "./Search";
import Loader from "./Loader";
import NotFound from "./NotFound";
import NeedAuth from "./NeedAuth";
import ErrorBoundary from "./ErrorBoundary";


function TrackList() {
  const [search, setSearch] = useState<string>('')
  const [token] = useLocalStorage<string>('token')

  const { data, isLoading, error } = useQuery<TrackType[], Error>({
    queryKey: ['tracks', search],
    queryFn: () => getTracks(search, token),
  });
  const deviceId: string = usePlayer()

  const tracks: TrackType[] = data || [];

  const handleClick = useCallback((id: string) => {
    playTrack(deviceId, id, token)
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
