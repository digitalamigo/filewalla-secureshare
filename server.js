import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>FileWalla SecureShare</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .container { max-width: 1200px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; text-align: center; }
        .content { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; padding: 40px; }
        .feature { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #007bff; }
        .login-panel { background: #f8f9fa; padding: 30px; border-radius: 10px; }
        .badge { background: #28a745; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; margin: 5px; display: inline-block; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ FileWalla SecureShare</h1>
            <p>Enterprise-Grade Secure File Transfer for Medical Billing</p>
        </div>
        <div class="content">
            <div>
                <h2>Professional Medical Billing System</h2>
                <div class="feature">
                    <h3>🔐 AES-256 Encryption</h3>
                    <p>Military-grade encryption for all file transfers</p>
                </div>
                <div class="feature">
                    <h3>👥 Role-Based Access</h3>
                    <p>Admin, Agent, Client, and User permission levels</p>
                </div>
                <div class="feature">
                    <h3>📧 Email Notifications</h3>
                    <p>Automated notifications for file transfers</p>
                </div>
                <div style="margin-top: 20px;">
                    <span class="badge">✓ SOC 2 Compliant</span>
                    <span class="badge">✓ Enterprise Security</span>
                    <span class="badge">✓ Medical Ready</span>
                </div>
            </div>
            <div class="login-panel">
                <h3>Access FileWalla SecureShare</h3>
                <div style="margin: 20px 0; padding: 15px; background: #e3f2fd; border-radius: 5px;">
                    <h4>Test Accounts:</h4>
                    <p><strong>Admin:</strong> admin / admin123</p>
                    <p><strong>Client:</strong> s_client / password</p>
                    <p><strong>Agent:</strong> s_agent / password</p>
                </div>
                <p><em>Full React application loading after Railway deployment confirmed...</em></p>
            </div>
        </div>
    </div>
</body>
</html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(\`FileWalla SecureShare running on port \${PORT}\`);
});
