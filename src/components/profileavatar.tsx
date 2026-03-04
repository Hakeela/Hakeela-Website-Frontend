import React from 'react';
import styles from './ProfileAvatar.module.css';

interface ProfileAvatarProps {
  imageUrl?: string;
  altText?: string;
  onCameraClick?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl = '/placeholder.png',
  altText = 'Profile avatar',
  onCameraClick,
}) => {
  return (
    <div className={styles.avatarContainer}>
      <img
        src={imageUrl}
        alt={altText}
        className={styles.avatarImage}
      />
      <button
        className={styles.cameraButton}
        onClick={onCameraClick}
        aria-label="Upload profile picture"
        title="Upload profile picture"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.cameraIcon}
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </button>
    </div>
  );
};
