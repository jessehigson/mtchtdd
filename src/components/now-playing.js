import { Link } from 'gatsby'
import React, { useState, useEffect, useContext } from 'react'
import { CursorContext } from '../context/cursor-context-provider'

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
    const { activateCursor, deactivateCursor } = useContext(CursorContext)

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
        <Link
          to={url}
          rel="nofollow noopener"
          target="_blank"
          className="now-playing__link"
        >
          <img
            src={art}
            alt={`The artwork for the song ${name} by the artist ${artist}`}
            className="now-playing__art"
          />
          <div
            className="now-playing__content"
            onMouseEnter={activateCursor}
            onMouseLeave={deactivateCursor}
          >
            <span>
              {artist}&nbsp;-&nbsp;{name}
            </span>
            &nbsp;&nbsp;
            <span aria-hidden="true">
              {artist}&nbsp;-&nbsp;{name}
            </span>
            &nbsp;&nbsp;
            <span aria-hidden="true">
              {artist}&nbsp;-&nbsp;{name}
            </span>
          </div>
        </Link>
      </div>
    )
  }

  return buildLastFmData()
}
