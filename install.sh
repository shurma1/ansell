#!/bin/bash
ls
apt-get update
sudo apt install curl -y
cd /
cd /tmp
curl --output anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh
sudo apt -y install python3-pip
pip3 install flask
pip3 install flask_cors
pip3 install pyjwt
pip3 install hashlib
pip3 install openpyxl
pip3 install XlsxWriter
pip3 install pandas
pip3 install gevent