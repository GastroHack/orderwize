# syntax=docker/dockerfile:1
FROM python:3.7-alpine
WORKDIR /
# RUN apk add --no-cache gcc musl-dev linuaders
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install python-dotenv
EXPOSE 5000
COPY .env .env
COPY ./src/server .
CMD ["flask", "run"]