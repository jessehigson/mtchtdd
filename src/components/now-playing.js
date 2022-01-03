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
      console.log(error)
    }

    if (!track) {
      return null
    }

    const image = track[0].image.find(i => {
      return i.size === 'extralarge'
    })

    const name = track[0].name
    const artist = track[0].artist['#text']
    const art = image?.['#text'] ?? track[0].image[0]['#text']
    const url = track[0].url

    return (
      <div className="now-playing">
        <h4 className="now-playing__title">Playing</h4>
        <a
          href={url}
          rel="nofollow noopener"
          target="_blank"
          className="now-playing__link"
        >
          <img
            src={art}
            alt={`The artwork for the song ${name} by the artist ${artist}`}
            className="now-playing__art"
          />
          <span className="now-playing__artist">{artist}</span>
          &nbsp;-&nbsp;
          <span className="now-playing__song">{name}</span>
        </a>
      </div>
    )
  }

  return buildLastFmData()
}
