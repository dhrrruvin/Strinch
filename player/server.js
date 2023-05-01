const express = require("express");
const fs = require("fs");
const app = express();
const port = 1234;

app.use(express.static("public"));

app.get("/video", function (req, res) {
  const videoPath = "./public/assets/bigbuck.mp4";
  const videoSize = fs.statSync(videoPath).size;
  const videoRange = req.headers.range;

  if (videoRange) {
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(videoRange.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;

    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Stream the video chunk to the client
    videoStream.pipe(res);
  } else {
    const header = {
      "Content-Length": videoSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, header);
    fs.createReadStream(videoPath).pipe(res);
  }
});

app.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
