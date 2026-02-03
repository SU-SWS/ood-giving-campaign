import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook to manage video play/pause state with automatic play/pause based on viewport visibility.
 *
 * Features:
 * - Auto-plays video when it enters the viewport
 * - Auto-pauses video when it exits the viewport
 * - Remembers user's manual pause state to prevent auto-play after manual pause
 * - Provides toggle function for manual play/pause control
 *
 * @param viewThreshold - A number < 1. The amount of the video that must be visible to trigger auto-play (default: 0.1)
 * @returns Object containing video ref, playing state, user paused state, and toggle function
 */
export const useVideoControl = (viewThreshold?: number) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { once: false, amount: viewThreshold ?? 0.1 });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);

  /**
   * Toggle video play/pause state manually
   */
  const toggleVideo = () => {
    if (!videoRef.current) return;

    setIsPlaying((prev) => {
      if (prev) {
        videoRef.current?.pause();
        setIsUserPaused(true);
      } else {
        videoRef.current
          ?.play()
          .catch(() => {
            // Silently handle autoplay restrictions
          });
        setIsUserPaused(false);
      }
      return !prev;
    });
  };

  /**
   * Pause video when it goes out of viewport,
   * resume when it comes back into view if it was not manually paused by the user.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoInView && !isUserPaused) {
      video.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    } else {
      video.pause();
    }
  }, [isVideoInView, isUserPaused]);

  return {
    videoRef,
    isPlaying,
    isUserPaused,
    isVideoInView,
    toggleVideo,
    onPlay: () => setIsPlaying(true),
    onPause: () => setIsPlaying(false),
  };
};
