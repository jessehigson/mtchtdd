import React, { useState, useEffect } from 'react'

export const NowPlaying = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({})

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`,
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('error')
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' }),
      )
  }, [])

  const buildLastFmData = () => {
    const { error } = lfmData
    const track = lfmData?.recenttracks?.track

    if (error) {
      return <p>{error}</p>
    }

    if (!track) {
      return <p>Loading</p>
    }

    const [
      { name: songName, artist: { '#text': artistName } = {} } = {},
    ] = track

    return (
      <div className="now-playing">
        <h4 className="now-playing__title">Playing</h4>
        <span className="now-playing__artist">{artistName}</span>
        &nbsp;-&nbsp;
        <span className="now-playing__song">{songName}</span>
      </div>
    )
  }

  return buildLastFmData()
}
