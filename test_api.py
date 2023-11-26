from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

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

@app.post("/")
async def main(data: dict):
    text = data["input"]
    text = "Summarize this text: " + text
    return {"meh": "These are any OPTIONS request with Origin and Access-Control-Request-Method headers. In this case the middleware will intercept the incoming request and respond with appropriate CORS headers, and either a 200 or 400 response for informational purposes."}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)

    