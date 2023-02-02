FROM nginx:1.23.3
#COPY ./ dist/angular-example-app/index.html
COPY ./ dist/angular-example-app


COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
