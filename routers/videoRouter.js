import express from "express";
import routes from "../routes";
import { videoDetail, getEditVideo, deleteVideo, postUpload, getUpload, postEditVideo } from "../controller/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail 
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Video Delete
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);


export default videoRouter;