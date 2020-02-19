# Puertos


```
docker build  -f steps/02/Dockerfile . -t workshop-comafi:container-02
```

```
docker run --rm  -p 9999:8888 workshop-comafi:container-02
```



curl localhost:9999/ping/stdout

http://localhost:9999/ping/stdout

```
docker images
```

