import { OurFileRouter } from "@/app/api/uploadThing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";
 
 
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();