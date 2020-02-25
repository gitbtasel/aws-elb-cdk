yum update 
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>ILAB AWS CDK DEMO</h1>" > /var/www/html/index.html