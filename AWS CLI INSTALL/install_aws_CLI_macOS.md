# 🚀 Install or Update the AWS CLI on macOS

If you are updating to the latest version, use the same installation method that you used for your current version. You can install the AWS CLI on macOS in the following ways.

## 🔹 Install AWS CLI using macOS GUI

1. 📥 **Download the macOS pkg file:**  
   👉 [AWS CLI macOS Installer](https://awscli.amazonaws.com/AWSCLIV2.pkg)
2. 🏃 **Run the downloaded file** and follow the on-screen instructions.

### 🖥️ Installation Options:
- **For all users (requires `sudo`)**:
  - Default install folder: `/usr/local/aws-cli`
  - Symlink created at `/usr/local/bin/aws`
- **For only the current user (no `sudo` needed)**:
  - Install to any folder with write permissions.
  - Manually create symlink:
    ```sh
    $ sudo ln -s /folder/installed/aws-cli/aws /usr/local/bin/aws
    $ sudo ln -s /folder/installed/aws-cli/aws_completer /usr/local/bin/aws_completer
    ```

💡 **Note:** You can view debug logs by pressing `Cmd+L` in the installer or checking `/var/log/install.log`.

## 🔹 Verify Installation
```sh
$ which aws
/usr/local/bin/aws
$ aws --version
aws-cli/2.19.1 Python/3.11.6 Darwin/23.3.0 botocore/2.4.5
```
If the `aws` command is not found, restart your terminal or check troubleshooting steps.

---

## 🔹 Install AWS CLI via Terminal (Recommended)
```sh
$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
$ sudo installer -pkg AWSCLIV2.pkg -target /
```
### 📝 Steps Explained:
1. 📥 **Download the pkg file** using `curl`:
   ```sh
   $ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
   ```
2. 🔧 **Run the installer**:
   ```sh
   $ sudo installer -pkg ./AWSCLIV2.pkg -target /
   ```
3. 📄 **Debug logs saved to** `/var/log/install.log`
4. ✅ **Verify Installation**:
   ```sh
   $ which aws
   /usr/local/bin/aws
   $ aws --version
   aws-cli/2.19.1 Python/3.11.6 Darwin/23.3.0 botocore/2.4.5
   ```

---

## 🔹 Custom Install Location
To install AWS CLI in a custom location, create an XML file (`choices.xml`) with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <array>
    <dict>
      <key>choiceAttribute</key>
      <string>customLocation</string>
      <key>attributeSetting</key>
      <string>/Users/myusername</string>
      <key>choiceIdentifier</key>
      <string>default</string>
    </dict>
  </array>
</plist>
```

📥 **Download & Install with Custom Location**:
```sh
$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
$ installer -pkg AWSCLIV2.pkg \
            -target CurrentUserHomeDirectory \
            -applyChoiceChangesXML choices.xml
```

💡 **After installing**, manually create symlinks if needed:
```sh
$ sudo ln -s /folder/installed/aws-cli/aws /usr/local/bin/aws
$ sudo ln -s /folder/installed/aws-cli/aws_completer /usr/local/bin/aws_completer
```

🔎 **Final Verification**:
```sh
$ which aws
/usr/local/bin/aws
$ aws --version
aws-cli/2.19.1 Python/3.11.6 Darwin/23.3.0 botocore/2.4.5
```

If you encounter issues, check **[Troubleshooting errors for AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/troubleshooting.html)**. 🚀

