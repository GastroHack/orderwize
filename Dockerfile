# syntax=docker/dockerfile:1
FROM python:3.7-alpine
WORKDIR /
COPY requirements.txt requirements.txt
COPY .env .env
RUN pip install -r requirements.txt
RUN pip install python-dotenv
EXPOSE 5000
WORKDIR /src
CMD ["flask", "run"]