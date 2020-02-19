# Volumenes


```
docker build  -f steps/03/Dockerfile . -t workshop-comafi:container-03
```

```
docker run --rm  -p 9999:8888 -v $PWD/.env:/opt/app/data/.env workshop-comafi:container-03
```

 
```
docker exec -it {nombre de container} sh
```

