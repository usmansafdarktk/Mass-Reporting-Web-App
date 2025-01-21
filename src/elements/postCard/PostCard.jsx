import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShare, FaExpand } from 'react-icons/fa';

function PostCard({ userName, userPhoto, postPhoto, postText, initialLikeCount, liked, postId, postdt, startupName, startupID }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [showMore, setShowMore] = useState(false);
  const [showFullPhoto, setShowFullPhoto] = useState(false);

  const toggleLike = async () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    try {
      await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        body: JSON.stringify({ liked: !isLiked }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate.replace(',', '');
  }

  const postdate = formatDate(postdt)

  return (
    <div className="border dark:border-gray-600 rounded-lg p-4 bg-white shadow-md max-w-full max-h-[500px] overflow-hidden dark:bg-gray-800">
      <div className="flex flex-col h-full gap-4">        
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={userPhoto}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className='flex flex-col'>
              {startupName ? (
                <>
                  <span className="font-semibold text-gray-800 dark:text-white">{startupName}</span>
                  <span className="font-semibold text-gray-400 text-xs dark:text-white">{userName}</span>
                </>
              ) : (
                <span className="font-semibold text-gray-800 dark:text-white">{userName}</span>
              )}
            </div>

          </div>
          <span className="text-sm text-gray-500 dark:text-white">{postdate}</span>
        </div>

        <div className="flex-grow mt-4 relative">
          <div className="relative w-full h-[300px] overflow-hidden rounded-md group">
            <img
              src={postPhoto}
              alt="Post"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div
              className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
              onClick={() => setShowFullPhoto(true)}
            >
              <FaExpand className="text-white text-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLike}
              className="flex items-center gap-2"
            >
              {isLiked ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
              <span className="text-gray-700 dark:text-white">{likeCount}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500">
              <FaComment />
              <span className="text-gray-700 dark:text-white">Comment</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500">
              <FaShare />
              <span className="text-gray-700 dark:text-white">Share</span>
            </button>
          </div>

          <div className="text-gray-700 dark:text-white">
            {showMore ? postText : postText.slice(0, 100) + (postText.length > 100 ? '...' : '')}
            {postText.length > 100 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="ml-2 text-blue-500"
              >
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        </div>
      </div>

      {showFullPhoto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <img
              src={postPhoto}
              alt="Full Post"
              className="max-w-full max-h-screen object-contain rounded-md"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2"
              onClick={() => setShowFullPhoto(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
