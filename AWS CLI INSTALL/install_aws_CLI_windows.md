# 🖥️ Windows AWS CLI Installation Guide

🔗 [Visit this link to install AWS CLI on your Operating System](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## ✅ Install and Update Requirements

🔹 **Supported OS:** Microsoft-supported versions of **64-bit Windows** 🏢
🔹 **Admin Rights:** Required to install software 🔑

---

## ⬇️ Install or Update the AWS CLI

🚀 To update your current installation of AWS CLI on Windows, download a new installer each time to overwrite previous versions. AWS CLI is updated regularly.

📅 To check the latest release date, see the **AWS CLI version 2 Changelog** on GitHub.

### 📥 Download & Run the Installer

1️⃣ **Download and run the AWS CLI MSI installer for Windows (64-bit):**

🔗 [AWS CLI MSI Installer (64-bit)](https://awscli.amazonaws.com/AWSCLIV2.msi)

2️⃣ **Alternatively, use the `msiexec` command to run the MSI installer:**

```sh
C:\> msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

💡 For additional parameters that can be used with `msiexec`, check the Microsoft Docs website. For example, use the `/qn` flag for a **silent installation**:

```sh
C:\> msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi /qn
```

---

## 🛠️ Confirm Installation

1️⃣ Open the **Start Menu** 📂
2️⃣ Search for **cmd** and open a **Command Prompt** terminal 📟
3️⃣ Run the following command to check the AWS CLI version:

```sh
C:\> aws --version
```

📌 Example Output:
```sh
aws-cli/2.19.1 Python/3.11.6 Windows/10 exe/AMD64 prompt/off
```

🚨 **Troubleshooting:**
If Windows is unable to find the program:
- Close and **reopen the Command Prompt** 🔄
- **Check the system PATH environment variable** 🛣️
- Follow the official **AWS CLI troubleshooting guide** 🛠️

---

🎉 Congratulations! You have successfully installed the AWS CLI on Windows. Now you're ready to manage AWS services from your command line! 🚀🌍

