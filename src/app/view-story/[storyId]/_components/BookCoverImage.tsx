import Image from "next/image";
import React from "react";

type BookCoverImageProps = {
  imageUrl: string;
};

const BookCoverImage: React.FC<BookCoverImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <Image
        src={imageUrl}
        width={400}
        height={400}
        alt="book cover image"
        className="object-cover w-full h-[400px] min-h-[350px] md:max-w-[400px] rounded-lg"
      />
    </div>
  );
};

export default BookCoverImage;
