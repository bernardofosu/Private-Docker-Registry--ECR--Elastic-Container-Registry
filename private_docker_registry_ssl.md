# 🐳 Project | Private Docker Registry in Linux with SSL

## 📌 Overview
- 🖥️ Operating System: Debian/Ubuntu  
- 🔒 Registry Access: Private (secured with authentication)  
- 💾 Storage Location: Local or Cloud  
- 🔐 Security: Secured with TLS (SSL certificate)  

---

## 🔹 Step 1: Install Docker and Dependencies

### 1.1 Update Your System
```bash
sudo apt update && sudo apt upgrade -y
```
- 📦 `sudo apt update`: Updates the list of available packages.  
- ⬆️ `sudo apt upgrade -y`: Upgrades installed packages.  

### 1.2 Install Docker and Docker Compose
```bash
sudo apt install -y docker.io
sudo systemctl enable --now docker
```
- 🐳 Installs Docker.  
- ⚡ Enables Docker to start on boot.  

### 1.3 Verify Docker Installation
```bash
docker --version
```
- ✅ Confirms Docker is installed.  

---

## 🔹 Step 2: Run a Local Docker Registry

### 2.1 Start the Registry
```bash
docker run -d -p 5000:5000 --name registry --restart always registry:2
```
- 🚀 Starts the private registry container.  

### 2.2 Verify the Registry
```bash
curl http://localhost:5000/v2/
```
- ✅ If running, returns `{}`.  

---

## 🔹 Step 3: Push and Pull an Image

### 3.1 Pull a Sample Image
```bash
docker pull ubuntu
```

### 3.2 Tag the Image
```bash
docker tag ubuntu localhost:5000/ubuntu
```

### 3.3 Push the Image
```bash
docker push localhost:5000/ubuntu
```

### 3.4 Check Images in Registry
```bash
curl http://localhost:5000/v2/_catalog
```
- 📋 Expected: `{"repositories":["ubuntu"]}`  

### 3.5 Pull Image from Registry
```bash
docker rmi ubuntu
docker pull localhost:5000/ubuntu
```

---

## 🔹 Step 4: Secure the Registry with Authentication

### 🛠 Step 4.1: Create Authentication Credentials
```bash
sudo mkdir -p /etc/docker/registry
sudo chmod 777 /etc/docker/registry
sudo apt update
sudo apt install -y apache2-utils
htpasswd -Bbn adijaiswal devopsshack > /etc/docker/registry/htpasswd
```

### 🛠 Step 4.2: Run Registry with Authentication
```bash
docker stop registry && docker rm registry
docker run -d -p 5000:5000 --name registry --restart always   -v /etc/docker/registry:/auth   -e "REGISTRY_AUTH=htpasswd"   -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"   -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd"   registry:2
```

Login:
```bash
docker login localhost:5000
```

---

## 🔹 Step 5: Secure the Registry with SSL/TLS

### 🛠 Step 5.1: Install Certbot
```bash
sudo apt install -y certbot
```

### 🛠 Step 5.2: Generate SSL Certificate
```bash
sudo certbot certonly --standalone -d skjptpp.in
```
- 📂 Certificates stored in `/etc/letsencrypt/live/skjptpp.in/`  

### 🛠 Step 5.3: Run Registry with SSL
```bash
docker stop registry && docker rm registry
docker run -d -p 5000:5000 --name registry --restart always   -v /etc/docker/registry:/auth   -v /etc/letsencrypt:/certs   -e "REGISTRY_AUTH=htpasswd"   -e "REGISTRY_AUTH_HTPASSWD_REALM=Private Docker Registry"   -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd"   -e "REGISTRY_HTTP_TLS_CERTIFICATE=/certs/live/skjptpp.in/fullchain.pem"   -e "REGISTRY_HTTP_TLS_KEY=/certs/live/skjptpp.in/privkey.pem"   registry:2
```

### 🔑 Fix Permissions
```bash
sudo chmod -R 755 /etc/letsencrypt/
sudo chmod -R 755 /etc/letsencrypt/live/
sudo chmod -R 644 /etc/letsencrypt/live/skjptpp.in/*
sudo chmod -R 644 /etc/letsencrypt/archive/skjptpp.in/*
sudo chmod 640 /etc/docker/registry/htpasswd
sudo chown root:docker /etc/docker/registry/htpasswd
docker restart registry
```

### 🔍 Test Secure Connection
```bash
curl -k -u adijaiswal:'devopsshack' https://skjptpp.in:5000/v2/
docker login skjptpp.in:5000
docker pull skjptpp.in:5000/ubuntu
curl https://skjptpp.in:5000/v2/_catalog
```

---

## ✅ Final Checks
1. Ensure Registry is Running  
```bash
docker ps | grep registry
```

2. Verify Login Works  
```bash
docker login skjptpp.in:5000
```
