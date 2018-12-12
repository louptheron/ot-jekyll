#/bin/bash

for file in "$@"; do
  echo "$i"
  convert $file -sampling-factor 4:2:0 -strip -quality 65 -interlace JPEG -colorspace RGB $file;
done

