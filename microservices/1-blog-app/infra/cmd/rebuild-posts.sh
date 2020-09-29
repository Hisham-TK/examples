docker build -t hisham13/posts-service 1-posts-service
docker push hisham13/posts-service

kubectl apply -f ./infra/k8s/posts-depl.yaml

kubectl rollout restart deployment posts-service-depl