import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export default function SingleStory({ story }: any) {
  return (
    <Card className="py-4 dark:bg-gray-800 hover:scale-105 transition-all duration-500 cursor-pointer">
      <CardBody className="overflow-visible py-2">
        <Link href={"/view-story/" + story?.storyID}>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={story?.storyCoverImage}
            width={270}
          />
        </Link>
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{story?.storyTitle}</p>
        <small className="text-default-500 text-sm lowercase">
          {/* {story?.userName} */}
        </small>
        <h4 className="font-[12px] dark:text-gray-400">Bed time story</h4>
      </CardHeader>
    </Card>
  );
}
