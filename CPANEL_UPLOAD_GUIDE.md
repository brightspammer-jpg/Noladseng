# cPanel Upload Guide for Nolads Engineering Website

## 📁 Files Ready for Upload

Your website has been successfully built and is ready for cPanel hosting. Here's what you need to upload:

### Main Upload File
- **`website-for-cpanel.zip`** - This contains all your website files

### Alternative: Manual Upload
If you prefer to upload files individually, use the contents of the `dist/` folder.

## 🚀 cPanel Upload Instructions

### Method 1: File Manager Upload (Recommended)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel login page
   - Enter your username and password

2. **Open File Manager**
   - Look for "File Manager" in the cPanel dashboard
   - Click to open it

3. **Navigate to Public HTML**
   - In File Manager, navigate to `public_html` folder
   - This is your website's root directory

4. **Clear Existing Files (if any)**
   - Select all existing files in `public_html`
   - Delete them to start fresh

5. **Upload Your Website**
   - Click "Upload" button in File Manager
   - Select `website-for-cpanel.zip` from your computer
   - Wait for upload to complete

6. **Extract the Archive**
   - Right-click on `website-for-cpanel.zip`
   - Select "Extract" or "Extract Here"
   - This will unzip all your website files into `public_html`

7. **Verify Upload**
   - You should see files like:
     - `index.html`
     - `assets/` folder
     - `favicon.ico`
     - `manifest.json`
     - etc.

### Method 2: FTP Upload (Alternative)

If you prefer using FTP software like FileZilla:

1. **Get FTP Credentials**
   - Find your FTP details in cPanel (usually under "FTP Accounts")
   - Note: Host, Username, Password, Port

2. **Connect via FTP**
   - Open your FTP client
   - Enter the credentials
   - Navigate to `public_html` directory

3. **Upload Files**
   - Upload all contents from the `dist/` folder
   - Maintain the folder structure

## ⚙️ Important Configuration Notes

### Environment Variables
Your website uses Supabase for backend services. Make sure these are configured in your hosting environment:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

### SSL Certificate
- Ensure your domain has an SSL certificate installed
- Your website will work on both HTTP and HTTPS

### Domain Configuration
- Point your domain to the hosting provider's nameservers
- Update DNS records if needed

## 🔧 Post-Upload Checklist

After uploading, verify:

- [ ] Website loads at your domain
- [ ] All pages are accessible
- [ ] Images and assets load correctly
- [ ] Contact forms work (if applicable)
- [ ] Admin panel is accessible (if needed)
- [ ] Mobile responsiveness works

## 🆘 Troubleshooting

### Common Issues:

1. **404 Errors**
   - Check that `index.html` is in the root of `public_html`
   - Verify all files uploaded correctly

2. **Missing Images/Assets**
   - Ensure the `assets/` folder uploaded completely
   - Check file permissions (should be 644 for files, 755 for folders)

3. **Database Connection Issues**
   - Verify Supabase environment variables are set
   - Check Supabase project is active

4. **Slow Loading**
   - Enable gzip compression in cPanel
   - Consider using a CDN for better performance

## 📞 Support

If you encounter any issues:
1. Check cPanel error logs
2. Verify file permissions
3. Contact your hosting provider's support
4. Check Supabase dashboard for any service issues

## 🎉 Success!

Once uploaded correctly, your Nolads Engineering website will be live and accessible to visitors worldwide!

---

**Build Information:**
- Build Date: $(Get-Date)
- Total Files: $(Get-ChildItem -Path dist -Recurse | Measure-Object).Count
- Total Size: $(Get-ChildItem -Path dist -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB MB
