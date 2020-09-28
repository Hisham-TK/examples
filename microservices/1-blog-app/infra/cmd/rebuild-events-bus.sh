docker build -t hisham13/events-bus-service 5-events-bus-service
docker push hisham13/events-bus-service

kubectl apply -f ./infra/k8s/events-bus-depl.yaml

kubectl rollout restart deployment events-bus-service-depl