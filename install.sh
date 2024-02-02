#!/bin/bash

echo -e "\nInstalling Root Package\n"
npm install

for module in modules/MMM-*; do
    if [ -d "$module" ]; then
        echo -e "\nInstalling $module\n"
        (cd $module && npm install)
    fi
done

echo -e "\nInstallation Done"