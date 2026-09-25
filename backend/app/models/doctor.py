from datetime import date, datetime

from sqlalchemy import Date, DateTime, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database.models import Base


class Doctor(Base):
    __tablename__ = "doctors"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    first_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    last_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    date_of_birth: Mapped[date] = mapped_column(
        Date,
        nullable=False
    )

    gender: Mapped[str] = mapped_column(
        String(30),
        nullable=False
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True
    )

    phone: Mapped[str] = mapped_column(
        String(20),
        unique=True,
        nullable=False
    )

    specialization: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    sub_specialization: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )

    license_number: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False
    )

    license_authority: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )

    experience: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    qualification: Mapped[str] = mapped_column(
        String(200),
        nullable=False
    )

    university: Mapped[str] = mapped_column(
        String(200),
        nullable=False
    )

    graduation_year: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    clinic_name: Mapped[str] = mapped_column(
        String(200),
        nullable=False
    )

    consultation_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )

    consultation_fee: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    address: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    city: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    state: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    pincode: Mapped[str] = mapped_column(
        String(10),
        nullable=False
    )

    bio: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    password_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    profile_photo: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )