FROM nginx:1.23.3
COPY ./ dist/C:\Users\henna\OneDrive\Työpöytä\DevOps koodi\angular-example-app\dist
#COPY . /usr/share/nginx/html


COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
