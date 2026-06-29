import React from 'react'

export default function Main(props) {
  const { data } = props

  return (
    <div className="videoContainer">
      <video
        className="bgvideo"
        controls
        autoPlay
        muted
        playsInline
      >
        <source src={data.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}