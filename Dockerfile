FROM gcr.io/distroless/python3-debian12

WORKDIR /web

COPY ./web .

ENTRYPOINT ["python3", "-m", "http.server", "80"]
