from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import uvicorn
from io import BytesIO
from PIL import Image
import base64


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def main():
    return "hello world"
    


@app.post("/predict")
async def main(data: dict):
    text = data["input"]
    text = "Summarize this text: " + text
    return {"meh": "These are any OPTIONS request with Origin and Access-Control-Request-Method headers. In this case the middleware will intercept the incoming request and respond with appropriate CORS headers, and either a 200 or 400 response for informational purposes."}

@app.post("/segment")
async def main(file: dict):
    image = file["image"]
    base64_content  = image.split(',')[1]
    image_bytes = base64.b64decode(base64_content)
    image_stream = BytesIO(image_bytes)
    newImage = Image.open(image_stream)
    newImage.save("/Users/samya/Desktop/meh.png")

    return {"image": file["image"]}
    # return StreamingResponse(content=image, media_type="image/png")



if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)

    