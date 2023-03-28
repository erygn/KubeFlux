# KubeFlux

flux bootstrap github --owner=erygn --repository=KubeFlux --branch=main --path=./ --personal

flux create source git production --url=https://github.com/erygn/KubeFlux --branch=main --interval=30s --export > ./production-source.yaml

flux create kustomization production --source production --path="./" --prune=true --interval=5m --export > ./production-kustom.yaml