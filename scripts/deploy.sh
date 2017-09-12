
npm run build
gcloud config set project slichters-jams
gsutil -m rsync -R build gs://www.slichtersjams.com

# Make all files publicly readable
gsutil iam ch allUsers:objectViewer gs://www.slichtersjams.com

# Make the default web page be index.html
gsutil web set -m index.html gs://www.slichtersjams.com