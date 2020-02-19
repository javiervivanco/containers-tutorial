# Building de Imagenes en docker





```
docker build --no-cache -f steps/01/Dockerfile . -t workshop-comafi:container-01
```

```
docker run --rm -it -e PORT=8888  -p 8888:8888 workshop-comafi:container-01 index.js
```



```
curl localhost:8888/ping/stdout
```


```
docker ps
```

