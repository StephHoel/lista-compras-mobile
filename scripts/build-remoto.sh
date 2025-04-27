#!/bin/bash

echo "=== Iniciando script de build remoto ==="
echo ""

expo prebuild

eas build -p android

echo ""
echo "=== Build remoto finalizado! ==="