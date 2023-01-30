from database import Base, engine
from sqlalchemy import String, Column, DateTime
from sqlalchemy.dialects.postgresql import UUID
import uuid

def create_tables():
    Base.metadata.create_all(engine)



class Attendance(Base):
    __tablename__ = 'app'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    datetime = Column(DateTime, nullable=False)
    status = Column(String(40), nullable=False)