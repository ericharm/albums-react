#!/bin/bash

source ".env.production"

# Check if the bucket exists
if ! aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Bucket doesn't exist."
  return 0
else
  echo "Bucket found"
fi

# Build the project for production
npm run build

# Sync the build directory to the S3 bucket
echo "Uploading files to S3..."
aws s3 sync "$BUILD_DIR" s3://"$BUCKET_NAME" --delete
echo "Deployment complete!"
