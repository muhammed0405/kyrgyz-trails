"use client";
import CommentComponent from "@/app/components/common/commentsModal";
import { UseTypedDispatch } from "@/app/redux/customHooks/useTypedDispatch";
import { useTypedSelectorHook } from "@/app/redux/customHooks/useTypedSelectorHook";
import Image from "next/image";
import { useEffect, useState } from "react";
const TourDetails = ({ params }: { params: { id: string } }) => {
  const tours = useTypedSelectorHook((state) => state.tours.tours);
  const filteredTour = tours.find((t: any) => t.id === parseInt(params.id, 10));
  const { getTours } = UseTypedDispatch();
  useEffect(() => {
    getTours();
  }, []);
  console.log("filteredTour", filteredTour);
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
        {" "}
        Коментарии
      </button>
      {showComments ? <CommentComponent tourId={undefined} /> : ""}
      <Image
        src={filteredTour?.images}
        alt={filteredTour?.title}
        width={500}
        height={300}
      />
      <p>{filteredTour?.title}</p>
      <p>{filteredTour?.itinerary.description}</p>
      <p>{filteredTour?.comments}</p>
      <p>{filteredTour?.itinerary.price}</p>
      <p>{filteredTour?.place_to_live.description}</p>
      <Image
        src={filteredTour?.place_to_live.images}
        alt={filteredTour?.title}
        width={500}
        height={300}
      />

      {filteredTour && <h1>{filteredTour?.title}</h1>}
      <p>{filteredTour?.price}</p>
    </div>
  );
};

export default TourDetails;
