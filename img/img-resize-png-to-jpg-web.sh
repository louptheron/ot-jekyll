#/bin/bash

for file in "$@"; do
  name=$(echo "$file" | cut -f 1 -d '.');
  convert $name.png -sampling-factor 4:2:0 -strip -quality 65 -interlace JPEG -colorspace RGB $name.jpg;
done

