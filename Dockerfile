# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:latest as build
# Set the working directory
WORKDIR /app/chatter-web
# Add the source code to app
COPY ./ /app/chatter-web
# Install all the dependencies
# Generate the build of the application
RUN npm run build
RUN npm install --force

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/chatter-web/dist/* /usr/share/nginx/html
# Expose port 80
EXPOSE 4200