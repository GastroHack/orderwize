# syntax=docker/dockerfile:1
FROM python:3.6-stretch
WORKDIR /
COPY requirements.txt requirements.txt
COPY .env .env
# RUN apk add --no-cache gcc musl-dev linux-headers
RUN pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt
RUN pip install python-dotenv
EXPOSE 5000
WORKDIR /src
CMD ["flask", "run"]