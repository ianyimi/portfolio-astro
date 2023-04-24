#!/usr/bin/env bash

NAME=$1
GLTFJSX_OPTIONS=$2

handle_error () { echo -e "\n🛑 ERRORED"; exit; }

STAGED_FOLDER="public/staging/${NAME}"
S3="https://dqeczc7c9n9n1.cloudfront.net"

NUM_GLTF=`ls -1 ${STAGED_FOLDER}/*.gltf 2>/dev/null | wc -l`
NUM_GLB=`ls -1 ${STAGED_FOLDER}/*.glb 2>/dev/null | wc -l`

echo -e "👉 Found\t $NUM_GLTF gltf, $NUM_GLB glb"

# check for 3d file
if [ $NUM_GLTF == 0 ] && [ $NUM_GLB == 0 ]
then
    echo -e "🛑 Couldn't find glb or gltf, exiting..."
    exit
fi

# get correct file extension (glb vs gltf)
EXTENSION="glb"
if [ $NUM_GLTF != 0 ]
then
    EXTENSION="gltf"
fi

# find first file with given extension
FILES=`find ${STAGED_FOLDER}/ -name *.${EXTENSION} -type f -print -quit`
FILE_NAME=`basename ${FILES} .${EXTENSION}`

# file outputs
DATE_S=`date +%s`
STAGED_FILE="${STAGED_FOLDER}/${FILE_NAME}.${EXTENSION}"
COMPRESSED_FILE="${NAME}-transformed.glb"
OUTPUT_FILE="${STAGED_FOLDER}/${NAME}.glb"
JSX_FILE="/src/models/${FILE_NAME}.tsx"
CLOUD_FOLDER="${NAME}-${DATE_S}"
CLOUD_URL="${S3}/models/${CLOUD_FOLDER}/${COMPRESSED_FILE}.gz"

echo -e "👉 Found\t\t${STAGED_FILE}"

# gltfjsx
npx gltfjsx "${STAGED_FILE}" --types --keepnames --simplify --weld --transform "${GLTFJSX_OPTIONS}" || handle_error
echo -e "👉 Gltfjsx\t\tComplete"

#gzip
gzip -c "${COMPRESSED_FILE}" > "${COMPRESSED_FILE}.gz"
echo -e "👉 Gzip\t\t\tComplete"

# upload to s3
aws s3 cp "${COMPRESSED_FILE}" "s3://ianyimi-portfolio/models/${CLOUD_FOLDER}/${COMPRESSED_FILE}"|| handle_error
aws s3 cp "${COMPRESSED_FILE}.gz" "s3://ianyimi-portfolio/models/${CLOUD_FOLDER}/${COMPRESSED_FILE}.gz" --content-encoding "gzip" || handle_error
echo -e "👉 Upload\t\tComplete, file available at the url below\n${CLOUD_URL}"

# clean folder
if [ $EXTENSION == "gltf" ]
then
    rm ./*.glb
    rm ./*.gz
fi
# rm ${STAGED_FOLDER}/*.gz
echo -e "👉 Clean\t\tComplete"

echo -e "\nDone 🤛👁👄👁🤜"
