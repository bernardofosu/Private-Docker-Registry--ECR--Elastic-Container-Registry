# 🐧 AWS CLI Installation and Update Guide for Linux 🚀

## 📌 Install and Update Requirements

- 🗜️ You must be able to extract or **unzip** the downloaded package. If your system lacks the built-in `unzip` command, install it.
- 📦 The AWS CLI requires **glibc, groff, and less**, which are included in most major Linux distributions.
- ✅ Supported on **64-bit** versions of **CentOS, Fedora, Ubuntu, Amazon Linux 1, 2, 2023, and Linux ARM**.
- ⚠️ **AWS does not maintain third-party repositories** except for **snap**, so external repositories may not have the latest AWS CLI version.

## 🔧 Installing or Updating AWS CLI

### ⚠️ Uninstall Pre-Installed AWS CLI (Amazon Linux Only)
If you're using **Amazon Linux**, remove the pre-installed `awscli` first:
```bash
sudo yum remove awscli
```
Then follow the installation steps below.

### 🏗️ Installation Methods

**1️⃣ Command-Line Installer (Recommended)**
- ✅ Allows version control by specifying the version you want.
- ❌ Does not auto-update. You need to download a new installer each time you update.

**2️⃣ Snap Package (Auto-Updating)**
- ✅ Always gets the latest version automatically.
- ❌ Cannot select minor versions, making it less suitable for teams that need version pinning.

### 📥 Quick Installation (One Command Block)
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### 🔄 Updating AWS CLI
If you already have AWS CLI installed and need to update, use:
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
```

## 🏁 Guided Installation Steps

### 🔹 Step 1: Download the Installation File
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```
Alternatively, download the file manually from:
👉 [AWS CLI Download](https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip)

### 🔹 Step 2: (Optional) Verify Download Integrity 🔑
If you manually downloaded the `.zip`, verify its integrity:

1. **Install GPG**
   ```bash
   sudo apt install gnupg  # Ubuntu/Debian
   sudo yum install gnupg  # Amazon Linux/CentOS
   ```

2. **Import AWS CLI Public Key**
   ```bash
   gpg --import public-key-file-name
   ```

3. **Download the Signature File**
   ```bash
   curl -o awscliv2.sig https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip.sig
   ```

4. **Verify Signature**
   ```bash
   gpg --verify awscliv2.sig awscliv2.zip
   ```
   ✅ If the signature is valid, proceed with installation.

### 🔹 Step 3: Extract the Installer
```bash
unzip awscliv2.zip
```
🔹 If updating, avoid prompts with:
```bash
unzip -u awscliv2.zip
```

### 🔹 Step 4: Install AWS CLI
Default installation (requires sudo for permissions):
```bash
sudo ./aws/install
```

🔹 **Custom Installation Paths** (without `sudo` if necessary):
```bash
./aws/install -i /usr/local/aws-cli -b /usr/local/bin
```

### 🔹 Step 5: Verify Installation ✅
```bash
aws --version
```
Expected output:
```bash
aws-cli/2.19.1 Python/3.11.6 Linux/5.10 botocore/2.4.5
```
If `aws` is not found, restart your terminal or troubleshoot.

## 💡 Troubleshooting
- **AWS CLI Not Found?** Restart the terminal or check your `$PATH`.
- **Need to Uninstall?** Remove the AWS CLI installation with:
  ```bash
  sudo rm -rf /usr/local/aws-cli
  ```

🎉 **AWS CLI is now installed on your Linux system!** 🚀

# 🚀 Installing AWS CLI using Snap on Linux 🐧

## 🌟 Overview
AWS provides an official **AWS CLI** package through Snap. If you want to always have the latest version installed on your system, Snap is a great option because it **auto-updates**! 🎉 However, Snap does not support selecting minor versions, so if your team needs to pin a specific version, consider using the **command-line installer** instead. ⚠️

---
## 🛠 Prerequisites

✅ Ensure **Snap** is installed on your Linux system.

🔹 If Snap is not installed, follow the instructions in **[Installing the daemon](https://snapcraft.io/docs/installing-snapd)** from the Snap documentation.

🔹 You may need to **restart your system** so that your `PATH` variables update correctly.

🔹 If you encounter installation issues, check **[Fix common issues](https://snapcraft.io/docs/troubleshooting)** in the Snap documentation.

To verify Snap is installed, run:
```sh
snap version
```
---
## 📥 Install AWS CLI using Snap

Run the following command to install AWS CLI via Snap:
```sh
snap install aws-cli --classic
```
🔹 If you get permission errors, try with `sudo`:
```sh
sudo snap install aws-cli --classic
```

> ℹ️ To explore the Snap repository for AWS CLI, visit [AWS CLI on Snapcraft](https://snapcraft.io/aws-cli).

---
## ✅ Verify Installation
After installation, confirm that AWS CLI is installed correctly:
```sh
aws --version
```
### ✅ Expected Output Example:
```sh
aws-cli/2.19.1 Python/3.11.6 Linux/5.10.205-195.807.amzn2.x86_64 botocore/2.4.5
```

🚨 If you encounter an error, check **[Troubleshooting AWS CLI installation](https://docs.aws.amazon.com/cli/latest/userguide/troubleshooting.html)**.

🎯 Now you're all set to use AWS CLI with Snap on Linux! 🎉🚀

