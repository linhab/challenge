from fastapi import FastAPI, HTTPException
from uuid import uuid4, UUID
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from uuid import UUID, uuid4
from pydantic import BaseModel
from datetime import datetime
import models
from database import SessionLocal


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(CORSMiddleware
,allow_origins = origins, allow_credentials = True, allow_methods = ["*"] , allow_headers = ["*"])

class OurBaseModel (BaseModel):
    class Config:
        orm_mode = True

db = SessionLocal()


class UserUpdateRequest(BaseModel):
    name: Optional[str]
    status: str

class Attendance_request(BaseModel):
    status: str

class Attendance_response(BaseModel):
    id: UUID
    attendance_datetime:datetime 
    status: str

@app.get("/")
async def root():
    return {"Hello": "World"}

@app.get("/api/attendance")
async def fetch_Attendances():
    return db.query(models.Attendance).all()


@app.post("/api/attendance")
async def attendance(attendance_request: Attendance_request):
    new_attendance = models.Attendance()
    new_attendance.datetime = datetime.now()
    new_attendance.status = attendance_request.status
    db.add(new_attendance)
    db.commit()
    db.flush()
    new_attendance.id
    return new_attendance
    
