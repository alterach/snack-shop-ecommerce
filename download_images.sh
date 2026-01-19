#!/bin/bash

# Function to download image
download() {
  local name="$1"
  local prompt="$2"
  local width="$3"
  local height="$4"
  
  # Check if file exists and is greater than 1KB (approx 1000 bytes)
  if [ -f "public/images/$name" ]; then
      # Get file size (handling both BSD and GNU stat)
      if [[ "$OSTYPE" == "darwin"* ]]; then
          size=$(stat -f%z "public/images/$name")
      else
          size=$(stat -c%s "public/images/$name")
      fi
      
      if [ $size -gt 1000 ]; then
          echo "Skipping $name (already exists, size: $size)"
          return
      fi
  fi
  
  # URL encode the prompt (replace spaces with %20)
  local encoded_prompt="${prompt// /%20}"
  
  echo "Downloading $name..."
  curl -L -s -o "public/images/$name" "https://image.pollinations.ai/prompt/$encoded_prompt?width=$width&height=$height&nologo=true&seed=$RANDOM"
}

mkdir -p public/images

# Hero Banner (Landscape)
download "hero-banner.jpg" "professional food photography of a spread of indonesian snacks brownies chips and puddings on a luxury wooden table cinematic wide shot warm lighting" 1920 1080

# Products (Square)
download "keripik-kentang-original.jpg" "professional food photography of a bowl of crispy potato chips on a wooden table cinematic lighting" 800 800
download "keripik-kentang-balado.jpg" "professional food photography of spicy red chili potato chips in a rustic bowl high detail" 800 800
download "keripik-kentang-keju.jpg" "professional food photography of cheese potato chips with orange cheese powder gourmet snack" 800 800

download "keripik-pisang-coklat.jpg" "professional food photography of chocolate coated banana chips sweet snack delicious" 800 800
download "keripik-pisang-gurih.jpg" "professional food photography of yellow crispy banana chips savory snack salty" 800 800

download "brownies-fudgy-original.jpg" "professional food photography of stack of fudgy chocolate brownies rich texture cocoa" 800 800
download "brownies-almond.jpg" "professional food photography of chocolate brownies topped with almond slices elegant dessert" 800 800
download "brownies-cheese.jpg" "professional food photography of brownies with cream cheese swirl delicious cake" 800 800
download "brownies-marble.jpg" "professional food photography of marble brownies chocolate and vanilla swirl" 800 800

download "puding-coklat.jpg" "professional food photography of silky chocolate pudding in a glass cup creamy dessert" 800 800
download "puding-mangga.jpg" "professional food photography of mango pudding with fresh mango topping bright yellow dessert" 800 800
download "puding-strawberry.jpg" "professional food photography of pink strawberry pudding with fresh strawberry garnish" 800 800
download "puding-jelly-rainbow.jpg" "professional food photography of colorful layer rainbow pudding jelly vibrant dessert" 800 800

download "es-gabus-original.jpg" "professional food photography of traditional Indonesian Es Gabus colorful frozen cake popsicle rainbow colors" 800 800
download "es-gabus-coklat.jpg" "professional food photography of chocolate frozen cake popsicle Es Gabus style" 800 800
download "es-gabus-keju.jpg" "professional food photography of yellow cheese frozen cake popsicle" 800 800
download "es-gabus-matcha.jpg" "professional food photography of green matcha frozen cake popsicle" 800 800

download "pastel-ayam.jpg" "professional food photography of golden brown fried pastel pastry curry puff" 800 800
download "pastel-ayam-keju.jpg" "professional food photography of fried pastry curry puff with cheese filling" 800 800
download "pastel-sosis.jpg" "professional food photography of fried pastry pastel with sausage" 800 800
download "pastel-abon.jpg" "professional food photography of fried pastry pastel with beef floss" 800 800

download "klepon.jpg" "professional food photography of indonesian klepon green rice ball with coconut grating palm sugar" 800 800
download "putu-ayu.jpg" "professional food photography of indonesian kue putu ayu green steamed cake with coconut" 800 800
download "rempeyek-kacang.jpg" "professional food photography of indonesian rempeyek peanut cracker traditional snack" 800 800
download "risol-mayo.jpg" "professional food photography of golden crispy risol mayo fried roll" 800 800

echo "All images downloaded!"
