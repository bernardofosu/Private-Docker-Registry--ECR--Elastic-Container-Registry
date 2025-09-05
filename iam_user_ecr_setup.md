# 👤 Create IAM User, Attach Policy & Configure AWS CLI

⚠️ **Note:** It’s **not good practice** to use the **root user** for day-to-day tasks.  
Always create and use an **IAM user** with specific permissions for security.  

---

## 🔹 Step 1: Create IAM User

1. Go to **AWS Management Console → IAM**.  
2. Click **Users → Add users**.  
3. Enter a username (example: `ecr-user`).  
4. Choose **Access type**:  
   - ✅ Check **Access key – Programmatic access** (for CLI/SDK use).  

---

## 🔹 Step 2: Attach Policy

1. On the permissions page → **Attach existing policies directly**.  
2. Search for:  
   ```
   AmazonEC2ContainerRegistryFullAccess
   ```  
3. ✅ Select it to give full access to Amazon ECR.  
4. Continue and create the user.  

---

## 🔹 Step 3: Save Access Keys

- After creation, AWS shows:  
  - **Access Key ID**  
  - **Secret Access Key**  
- ⚠️ Download the `.csv` file or copy them securely (**you won’t see the secret again!**).  

---

## 🔹 Step 4: Configure AWS CLI

On your local machine (Linux, macOS, or Windows terminal):  

```bash
aws configure
```

It will prompt:  
```
AWS Access Key ID [None]: <your-access-key-id>
AWS Secret Access Key [None]: <your-secret-access-key>
Default region name [None]: us-east-1
Default output format [None]: json
```

- Enter the values from the IAM user you created.  
- 🌍 Default region: e.g., `us-east-1` (or your preferred).  
- 📄 Output format: `json`, `table`, or `text`.  

---

## 🔹 Step 5: Verify Configuration

Run:  
```bash
aws sts get-caller-identity
```
✅ You should see your **account ID, user ARN, and user ID**.  

---

## 🚀 Step 6: Test with ECR

Authenticate Docker to ECR:  

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.us-east-1.amazonaws.com
```

Now you can **push and pull Docker images** securely with ECR 🎉  
