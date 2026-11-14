import React, { useEffect, useRef } from 'react';

/**
 * Robust YouTube Audio Player using the official YouTube IFrame Player API.
 * Video: PGer5XYPaPk (Kudmayi)
 * Configured with autoplay=1 & mute handling to ensure music starts playing
 * as soon as the page loads, unlocking audio immediately on any initial touch/click.
 */
export default function YouTubeAudio({ videoId = "PGer5XYPaPk", isPlaying = true }) {
  const playerRef = useRef(null);
  const containerId = "yt-wedding-audio-player-global";

  useEffect(() => {
    // 1. Ensure YouTube IFrame API script is inserted
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const tryPlay = (player) => {
      if (!player || typeof player.playVideo !== 'function') return;
      try {
        player.unMute();
        player.setVolume(85);
        const playPromise = player.playVideo();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // In case browser blocks unmuted autoplay, play muted first then unmute on first gesture
            player.mute();
            player.playVideo();
          });
        }
      } catch (err) {
        console.log("Audio autoplay attempt handled:", err);
      }
    };

    const createPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerId, {
          height: '200',
          width: '200',
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              if (isPlaying) {
                tryPlay(event.target);
              }
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0, true);
                event.target.playVideo();
              }
            }
          }
        });
      }
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // Window-level unlock for any user tap/touch anywhere on screen
    const unlockAudio = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.unMute();
          playerRef.current.setVolume(85);
          playerRef.current.playVideo();
        } catch (e) {}
      }
    };

    window.addEventListener('click', unlockAudio, { passive: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true });
    window.addEventListener('scroll', unlockAudio, { passive: true });
    window.addEventListener('pointerdown', unlockAudio, { passive: true });

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
      window.removeEventListener('pointerdown', unlockAudio);

      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
          playerRef.current = null;
        } catch (e) {}
      }
    };
  }, [videoId]);

  // Sync play / pause with isPlaying
  useEffect(() => {
    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') return;

    try {
      if (isPlaying) {
        playerRef.current.unMute();
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      console.warn("YouTube player control exception:", e);
    }
  }, [isPlaying]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '1px',
        height: '1px',
        opacity: 0.001,
        pointerEvents: 'none',
        zIndex: -10
      }}
    >
      <div id={containerId} />
    </div>
  );
}
