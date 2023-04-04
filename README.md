# KubeFlux

flux bootstrap github --owner=erygn --repository=KubeFlux --branch=main --path=./ --personal

flux create source git production --url=https://github.com/erygn/KubeFlux --branch=main --interval=30s --export > ./production-source.yaml

flux create kustomization production --source production --path="./app" --prune=true --interval=5m --export > ./production-kustom.yaml


## Flux HelmRelease

namespace: flux-system, pour le helmRelease
targetNamespace: default, définir le name space ou l'installation va se faire

## Helm UnitTest

docker run -ti --rm -v C:\Users\EtienneReygner\Documents\Nex\DataIngestion\helm:/apps quintush/helm-unittest:3.3.0-0.2.10 -3 -d -u ./data-ingestion